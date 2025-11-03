import { AlertTriangle, TrendingDown, ArrowLeft } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import LazyImage from "./lazy-image"

export default function OptimizedHeroSection() {
  return (
    <section id="home" className="py-8 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Fall Detection */}
        <div className="mb-6">
          <Link href="/">
            <Button variant="outline" className="mb-4 bg-transparent" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Fall Detection
            </Button>
          </Link>
        </div>

        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <span>SUBSCRIBE</span>
            <TrendingDown className="h-4 w-4" />
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Fact Sheet: Falls</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">The Biggest Threat to Senior Health and Safety</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  <h2 className="text-xl font-bold text-red-800">Falls are, Unfortunately, a Common Occurrence</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Falls represent one of the most significant health risks for older adults, leading to serious
                  injuries, reduced independence, and increased healthcare costs. Understanding the scope of this issue
                  is the first step toward prevention.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <LazyImage
              src="/images/elderly-gentleman.png"
              alt="Smiling elderly gentleman representing senior safety"
              className="w-full h-auto rounded-lg shadow-lg object-cover max-h-80"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
