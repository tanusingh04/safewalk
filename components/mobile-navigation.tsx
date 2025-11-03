"use client"

import { useState } from "react"
import { Home, Shield, Phone, Heart, MessageCircle } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Fall Detection", href: "/", icon: Shield },
    { name: "Home", href: "/home", icon: Home },
    { name: "Emergency", href: "/home#emergency", icon: Phone },
    { name: "Health", href: "/home#prevention", icon: Heart },
    { name: "Chat", href: "#", icon: MessageCircle, action: "chat" },
  ]

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 md:hidden">
        <div className="grid grid-cols-5 h-16">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center space-y-1 ${
                isActive(item.href) ? "text-blue-600 bg-blue-50" : "text-gray-600 hover:text-blue-600"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Add bottom padding to main content to account for fixed navigation */}
      <div className="h-16 md:hidden" />
    </>
  )
}
