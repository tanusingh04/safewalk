import { Clock, Users, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function StatisticsSection() {
  return (
    <section id="statistics" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Critical Statistics</h2>
          <p className="text-xl text-gray-600">Understanding the scope of fall-related incidents</p>
        </div>

        {/* Falls Common Occurrence Section */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200 max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-red-800 mb-6">
                Falls are, Unfortunately, a Common Occurrence
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Falls represent one of the most significant health risks for older adults, leading to serious injuries,
                reduced independence, and increased healthcare costs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Understanding the scope of this issue is the first step toward prevention and creating safer
                environments for our seniors.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-800 mb-2">11</div>
              <div className="text-lg font-semibold text-blue-700 mb-2">seconds</div>
              <p className="text-gray-700">
                Every <strong>11 seconds</strong>, an older adult is treated in the emergency room for a fall-related
                injury
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-50 to-pink-50 border-red-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-red-800 mb-2">19</div>
              <div className="text-lg font-semibold text-red-700 mb-2">minutes</div>
              <p className="text-gray-700">
                Every <strong>19 minutes</strong>, an older adult dies from a fall
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <p className="text-lg text-gray-800">
                <strong>1 in 4</strong> adults aged 65+ falls each year, making falls the leading cause of
                injury-related death among older adults.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
