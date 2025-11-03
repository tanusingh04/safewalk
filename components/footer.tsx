import { Shield, Heart, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">MAZT.com</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Dedicated to preventing falls and promoting safety for seniors. Our mission is to provide comprehensive
              resources and support for fall prevention and emergency response.
            </p>
            <div className="flex items-center space-x-2 text-red-400">
              <Heart className="h-5 w-5" />
              <span className="text-sm">Committed to Senior Safety</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Fall Detection
                </Link>
              </li>
              <li>
                <Link href="/home" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/home#statistics" className="hover:text-blue-400 transition-colors">
                  Statistics
                </Link>
              </li>
              <li>
                <Link href="/home#emergency" className="hover:text-blue-400 transition-colors">
                  Emergency
                </Link>
              </li>
              <li>
                <Link href="/home#prevention" className="hover:text-blue-400 transition-colors">
                  Prevention
                </Link>
              </li>
              <li>
                <Link href="/home#contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Emergency</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-400" />
                <span className="text-sm">911 - Emergency</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm">1-800-FALL-HELP</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-sm">mazt@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 MAZT.com. All rights reserved. | Privacy Policy | Terms of Service</p>
          <p className="text-sm mt-2">
            This website provides educational information and should not replace professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
