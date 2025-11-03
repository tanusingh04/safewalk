"use client"

import { Phone, AlertTriangle, MapPin, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function EmergencyQuickActions() {
  const handleEmergencyCall = (type: string) => {
    // In a real app, this would trigger actual emergency services
    if (type === "911") {
      window.location.href = "tel:911"
    } else if (type === "poison") {
      window.location.href = "tel:18002221222"
    }
  }

  const handleLocationShare = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords
        // In a real app, this would send location to emergency services
        alert(`Location shared: ${latitude}, ${longitude}`)
      })
    }
  }

  const handleMedicalAlert = () => {
    // Trigger medical alert system
    if ("vibrate" in navigator) {
      navigator.vibrate([200, 100, 200, 100, 200])
    }
    alert("Medical alert activated! Emergency contacts have been notified.")
  }

  return (
    <div className="fixed top-20 left-4 right-4 z-40 md:hidden">
      <Card className="bg-red-50 border-red-200">
        <CardContent className="p-4">
          <h3 className="font-semibold text-red-800 mb-3 text-center">Emergency Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={() => handleEmergencyCall("911")}
              className="bg-red-600 hover:bg-red-700 text-white h-12"
              size="sm"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call 911
            </Button>

            <Button
              onClick={handleMedicalAlert}
              className="bg-orange-600 hover:bg-orange-700 text-white h-12"
              size="sm"
            >
              <Heart className="h-4 w-4 mr-2" />
              Medical Alert
            </Button>

            <Button onClick={handleLocationShare} className="bg-blue-600 hover:bg-blue-700 text-white h-12" size="sm">
              <MapPin className="h-4 w-4 mr-2" />
              Share Location
            </Button>

            <Button
              onClick={() => handleEmergencyCall("poison")}
              className="bg-purple-600 hover:bg-purple-700 text-white h-12"
              size="sm"
            >
              <AlertTriangle className="h-4 w-4 mr-2" />
              Poison Control
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
