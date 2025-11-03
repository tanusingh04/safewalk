import { Clock, Users, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function OptimizedStatisticsSection() {
  return (
    <section id="statistics" className="py-8 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Critical Statistics</h2>
          <p className="text-lg text-gray-600">Understanding the scope of fall-related incidents</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-6 text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-800 mb-1">11</div>
              <div className="text-base font-semibold text-blue-700 mb-2">seconds</div>
              <p className="text-gray-700 text-sm">
                Every <strong>11 seconds</strong>, an older adult is treated in the emergency room for a fall-related
                injury
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-50 to-pink-50 border-red-200 hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-6 text-center">
              <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-red-800 mb-1">19</div>
              <div className="text-base font-semibold text-red-700 mb-2">minutes</div>
              <p className="text-gray-700 text-sm">
                Every <strong>19 minutes</strong>, an older adult dies from a fall
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 max-w-xl mx-auto">
            <CardContent className="p-4">
              <Users className="h-10 w-10 text-orange-600 mx-auto mb-3" />
              <p className="text-base text-gray-800">
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
