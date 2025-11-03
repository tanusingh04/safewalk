"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, X, Smartphone } from "lucide-react"

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed"
    platform: string
  }>
  prompt(): Promise<void>
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)

  useEffect(() => {
    // Check if device is iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    setIsIOS(iOS)

    // Check if app is already installed (standalone mode)
    const standalone = window.matchMedia("(display-mode: standalone)").matches
    setIsStandalone(standalone)

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setShowInstallPrompt(true)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

    // Show install prompt for iOS after a delay
    if (iOS && !standalone) {
      setTimeout(() => {
        setShowInstallPrompt(true)
      }, 3000)
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === "accepted") {
        setDeferredPrompt(null)
        setShowInstallPrompt(false)
      }
    }
  }

  const handleDismiss = () => {
    setShowInstallPrompt(false)
    // Don't show again for this session
    sessionStorage.setItem("installPromptDismissed", "true")
  }

  // Don't show if already dismissed this session or if already installed
  if (!showInstallPrompt || isStandalone || sessionStorage.getItem("installPromptDismissed")) {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-sm">
      <Card className="bg-white shadow-lg border-2 border-blue-200">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-600 p-2 rounded-full">
              <Smartphone className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">Install MAZT Safety App</h3>
              <p className="text-sm text-gray-600 mb-3">
                {isIOS
                  ? "Tap the share button and select 'Add to Home Screen' for quick access to emergency features."
                  : "Install our app for faster access to fall detection and emergency features."}
              </p>
              <div className="flex space-x-2">
                {!isIOS && (
                  <Button onClick={handleInstallClick} className="bg-blue-600 hover:bg-blue-700 text-white" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    Install
                  </Button>
                )}
                <Button onClick={handleDismiss} variant="outline" size="sm">
                  <X className="h-4 w-4 mr-1" />
                  Dismiss
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
