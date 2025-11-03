import { AlertTriangle, TrendingDown, ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section id="home" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Fall Detection */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="mb-4 bg-transparent">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Fall Detection
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>SUBSCRIBE</span>
            <TrendingDown className="h-4 w-4" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Fact Sheet: Falls</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">The Biggest Threat to Senior Health and Safety</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                  <h2 className="text-2xl font-bold text-red-800">Falls are, Unfortunately, a Common Occurrence</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Falls represent one of the most significant health risks for older adults, leading to serious
                  injuries, reduced independence, and increased healthcare costs. Understanding the scope of this issue
                  is the first step toward prevention.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <img
              src="/images/elderly-gentleman.png"
              alt="Smiling elderly gentleman in burgundy sweater representing senior safety and independence"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
