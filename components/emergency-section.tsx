import { Phone, Heart, MapPin, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function EmergencySection() {
  return (
    <section id="emergency" className="py-16 bg-gradient-to-br from-red-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-full mb-6">
            <span className="text-3xl font-bold text-white">SOS</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Emergency Response</h2>
          <p className="text-xl text-gray-600">Quick access to emergency services and patient information</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-red-700">
                <Phone className="h-6 w-6" />
                <span>Emergency Contacts</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">VIT Bhopal University</div>
                    <div className="text-sm text-gray-600">Immediate medical assistance</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-red-600">911</div>
              </div>

              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Poison Control</div>
                    <div className="text-sm text-gray-600">24/7 poison emergency hotline</div>
                  </div>
                </div>
                <div className="text-lg font-bold text-blue-600">1-800-222-1222</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-blue-700">
                <MapPin className="h-6 w-6" />
                <span>Patient Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Quick access to patient details and medical history for emergency responders.
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf9b2_F5FtsgVT5x-iZfQQwWt8ye7bEaH9tiw0Mqxf_UQBO_A/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Fill Patient Details Form
                  </Button>
                </a>
                <div className="text-sm text-gray-500 text-center">Secure Google Form for patient information</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
