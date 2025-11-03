"use client"

import { useState, useEffect, useRef } from "react"
import { Camera, Shield, AlertTriangle, CheckCircle, Phone, X, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useRouter } from "next/navigation"

export default function FallDetectionLanding() {
  const [cameraPermission, setCameraPermission] = useState<"pending" | "granted" | "denied" | "unavailable">("pending")
  const [isDetecting, setIsDetecting] = useState(false)
  const [fallDetected, setFallDetected] = useState(false)
  const [countdown, setCountdown] = useState(0)
  const [showEmergencyModal, setShowEmergencyModal] = useState(false)
  const [permissionError, setPermissionError] = useState<string>("")
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const detectionIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const countdownIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const router = useRouter()

  // Check if camera is available
  const checkCameraAvailability = async () => {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setCameraPermission("unavailable")
        setPermissionError("Camera not supported on this device/browser")
        return false
      }

      // Check if any video input devices are available
      const devices = await navigator.mediaDevices.enumerateDevices()
      const videoDevices = devices.filter((device) => device.kind === "videoinput")

      if (videoDevices.length === 0) {
        setCameraPermission("unavailable")
        setPermissionError("No camera devices found")
        return false
      }

      return true
    } catch (error) {
      console.error("Error checking camera availability:", error)
      setCameraPermission("unavailable")
      setPermissionError("Unable to access camera devices")
      return false
    }
  }

  // Simulated fall detection using motion detection
  const detectMotion = () => {
    if (!videoRef.current || !canvasRef.current) return false

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return false

    // Simple motion detection simulation
    // In a real implementation, this would use ML models like PoseNet or MediaPipe
    const random = Math.random()

    // Simulate fall detection with 2% chance every check (for demo purposes)
    if (random < 0.02) {
      return true
    }

    return false
  }

  const startFallDetection = async () => {
    try {
      setPermissionError("")
      setIsDetecting(true)

      console.log("Starting camera...")

      // Simple camera request
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: true, 
        audio: false 
      })

      console.log("Camera stream obtained:", stream)

      // Set the stream immediately
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.muted = true
        videoRef.current.playsInline = true
        
        // Force play
        try {
          await videoRef.current.play()
          console.log("Video playing successfully")
          setCameraPermission("granted")
          setPermissionError("")
        } catch (playError) {
          console.error("Play error:", playError)
          setPermissionError("Video cannot play. Please refresh and try again.")
        }
      }

      streamRef.current = stream

      // Start detection loop
      detectionIntervalRef.current = setInterval(() => {
        const fallDetected = detectMotion()
        if (fallDetected) {
          handleFallDetected()
        }
      }, 1000)

    } catch (error: any) {
      console.error("Camera error:", error)
      setCameraPermission("denied")
      setIsDetecting(false)
      
      if (error.name === "NotAllowedError") {
        setPermissionError("Camera access denied. Please allow camera access.")
      } else if (error.name === "NotFoundError") {
        setPermissionError("No camera found.")
      } else {
        setPermissionError(`Camera error: ${error.message}`)
      }
    }
  }

  const retryCamera = async () => {
    setCameraPermission("pending")
    setPermissionError("")
    await startFallDetection()
  }

  const handleFallDetected = () => {
    setFallDetected(true)
    setIsDetecting(false)
    setCountdown(10)

    // Clear detection interval
    if (detectionIntervalRef.current) {
      clearInterval(detectionIntervalRef.current)
    }

    // Start countdown
    countdownIntervalRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          // Auto-call emergency if no response
          setShowEmergencyModal(true)
          if (countdownIntervalRef.current) {
            clearInterval(countdownIntervalRef.current)
          }
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const handleImOkay = () => {
    setFallDetected(false)
    setCountdown(0)
    if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current)
    }
    stopDetection()
    router.push("/home")
  }

  const handleEmergencyCall = () => {
    // In a real implementation, this would trigger actual emergency services
    alert("Emergency services have been contacted. Help is on the way.")
    setShowEmergencyModal(false)
    stopDetection()
    router.push("/home")
  }

  const stopDetection = () => {
    setIsDetecting(false)

    if (detectionIntervalRef.current) {
      clearInterval(detectionIntervalRef.current)
    }

    if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current)
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop())
      streamRef.current = null
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null
    }
  }

  const skipToHomepage = () => {
    stopDetection()
    router.push("/home")
  }

  // Simulate fall for demo purposes
  const simulateFall = () => {
    handleFallDetected()
  }

  useEffect(() => {
    // Check camera availability on component mount
    checkCameraAvailability()

    return () => {
      stopDetection()
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Shield className="h-10 w-10 text-blue-200" />
            <h1 className="text-3xl font-bold text-white">MAZT Fall Detection</h1>
          </div>
          <p className="text-lg text-blue-100">Advanced AI-powered fall detection system for senior safety</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="bg-blue-950 bg-opacity-60 rounded-xl shadow-lg p-6 flex-1 flex items-center justify-center min-h-[300px] relative">
            {/* Video or detection area */}
            {cameraPermission === "granted" ? (
              <div className="relative w-full h-64">
                <video
                  ref={videoRef}
                  className="rounded-lg w-full h-full bg-black border-4 border-blue-400"
                  autoPlay
                  muted
                  playsInline
                  style={{ objectFit: 'cover' }}
                  onError={() => setPermissionError('Video playback error. Try refreshing or using a different browser.')}
                />
                {isDetecting && (
                  <div className="absolute top-2 left-2 bg-green-600 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                    <span>Monitoring Active</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center w-full h-64 bg-black bg-opacity-60 rounded-lg text-blue-200">
                <Camera className="h-12 w-12 mb-2" />
                <span className="text-lg">Camera feed will appear here</span>
                {permissionError && <span className="text-red-400 mt-2 text-center">{permissionError}</span>}
                {cameraPermission === "denied" && (
                  <Button onClick={retryCamera} className="mt-4 bg-blue-600 hover:bg-blue-700">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Retry Camera
                  </Button>
                )}
              </div>
            )}
            {/* Fall Detected Overlay */}
            {fallDetected && (
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center rounded-lg z-10">
                <AlertTriangle className="h-16 w-16 text-red-400 mb-4 animate-pulse" />
                <h3 className="text-3xl font-bold text-white mb-4">FALL DETECTED!</h3>
                <div className="flex gap-4">
                  <Button onClick={handleImOkay} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg font-semibold rounded-lg shadow">
                    I'm Okay
                  </Button>
                  <Button onClick={() => { alert('Calling 102...'); setFallDetected(false); stopDetection(); }} className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-lg font-semibold rounded-lg shadow">
                    Help! Call 102
                  </Button>
                </div>
              </div>
            )}
          </div>
          <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-8 flex-1 flex flex-col items-center justify-center min-h-[300px]">
            <Camera className="h-12 w-12 text-blue-700 mb-4" />
            <h2 className="text-xl font-bold text-blue-900 mb-2">Enable Fall Detection</h2>
            <p className="text-gray-700 mb-6 text-center">Allow camera access to start monitoring for falls. Your privacy is protected - no data is stored or transmitted.</p>
            <Button
              onClick={startFallDetection}
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow mb-4"
              size="lg"
              disabled={isDetecting}
            >
              <Camera className="h-5 w-5 mr-2" /> Start Detection
            </Button>
            <Button
              onClick={simulateFall}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow"
              size="lg"
              disabled={!isDetecting}
            >
              <AlertTriangle className="h-5 w-5 mr-2" /> Simulate Fall
            </Button>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="bg-white bg-opacity-80 rounded-lg shadow p-4 max-w-xl w-full">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Privacy & Security</h3>
            <p className="text-gray-700 text-sm">All processing happens locally on your device. No video data is transmitted or stored. Emergency contacts are only activated when a fall is confirmed.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
