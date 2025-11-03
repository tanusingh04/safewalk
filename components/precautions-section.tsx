import { Shield, Home, Eye, Dumbbell, Pill, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrecautionsSection() {
  const precautions = [
    {
      icon: Home,
      title: "Home Safety",
      description: "Remove tripping hazards, improve lighting, install grab bars and handrails",
    },
    {
      icon: Eye,
      title: "Vision Care",
      description: "Regular eye exams, proper lighting, wearing prescribed glasses",
    },
    {
      icon: Dumbbell,
      title: "Exercise & Balance",
      description: "Strength training, balance exercises, tai chi, and regular physical activity",
    },
    {
      icon: Pill,
      title: "Medication Review",
      description: "Regular medication reviews with healthcare providers to identify fall risks",
    },
  ]

  const actionItems = [
    "Talk with your doctor about fall risks and prevention strategies",
    "Check for hazards in your home and make necessary modifications",
    "Get your eyes checked annually and update prescriptions as needed",
    "Stay active with exercises that improve strength and balance",
    "Review medications with your pharmacist or doctor regularly",
    "Consider using assistive devices when recommended",
    "Wear proper footwear with good support and non-slip soles",
    "Get adequate sleep and maintain a healthy diet",
  ]

  return (
    <section id="prevention" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Precautions to be Taken</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive fall prevention strategies to keep seniors safe and independent
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {precautions.map((item, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 hover:shadow-lg transition-shadow"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-green-800">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-blue-800">Action Checklist for Fall Prevention</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {actionItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
