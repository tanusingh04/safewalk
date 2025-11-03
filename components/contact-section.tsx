import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600">
            Contact us for more information about fall prevention and senior safety
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">1-800-FALL-HELP</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">mazt@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Address</div>
                    <div className="text-gray-600">
                      VIT Bhopal University
                      <br />
                      Health City, HC 12345
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">24/7 Emergency Support</h3>
                <p className="text-gray-700">
                  Our emergency response team is available around the clock to provide immediate assistance and guidance
                  for fall-related incidents.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email address" />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What is this regarding?" />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us how we can help you..." rows={4} />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
