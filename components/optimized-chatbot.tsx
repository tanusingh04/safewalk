"use client"

import type React from "react"
import { useState, useRef, useEffect, useMemo } from "react"
import { MessageCircle, X, Send, Bot, Phone, AlertTriangle, Heart, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: Date
  isEmergency?: boolean
}

interface QuickAction {
  id: string
  label: string
  icon: React.ReactNode
  action: string
  isEmergency?: boolean
}

export default function OptimizedChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content: "Hello! I'm your senior safety assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const quickActions: QuickAction[] = useMemo(
    () => [
      {
        id: "emergency",
        label: "Emergency Help",
        icon: <AlertTriangle className="h-4 w-4" />,
        action: "I need emergency assistance",
        isEmergency: true,
      },
      {
        id: "fall",
        label: "I've Fallen",
        icon: <Phone className="h-4 w-4" />,
        action: "I've fallen and need help",
        isEmergency: true,
      },
      {
        id: "health",
        label: "Health Question",
        icon: <Heart className="h-4 w-4" />,
        action: "I have a health question",
      },
      {
        id: "prevention",
        label: "Fall Prevention",
        icon: <Home className="h-4 w-4" />,
        action: "Tell me about fall prevention",
      },
    ],
    [],
  )

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    if (lowerMessage.includes("emergency") || lowerMessage.includes("help") || lowerMessage.includes("fallen")) {
      return "🚨 EMERGENCY DETECTED 🚨\n\nConnecting to emergency services...\n📞 Calling 911\n📍 Sharing location\n\nAre you conscious and breathing?"
    }

    if (lowerMessage.includes("fall prevention")) {
      return "🏠 **Home Safety Tips:**\n- Remove loose rugs\n- Install grab bars\n- Improve lighting\n\n💪 **Stay Active:**\n- Balance exercises\n- Regular walking\n\nWould you like specific exercises?"
    }

    if (lowerMessage.includes("health")) {
      return "I can help with general health info. For serious concerns, contact your doctor.\n\n🚨 **Emergencies:** Call 911\n💊 **Medications:** Consult pharmacist\n\nWhat health topic interests you?"
    }

    return "I'm here to help with:\n🚨 Emergency situations\n🏠 Fall prevention\n💊 Health guidance\n💪 Safe exercises\n\nWhat would you like to know?"
  }

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: content.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: generateBotResponse(content),
        timestamp: new Date(),
        isEmergency: content.toLowerCase().includes("emergency") || content.toLowerCase().includes("fallen"),
      }

      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 800)
  }

  const handleQuickAction = (action: QuickAction) => {
    handleSendMessage(action.action)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage(inputValue)
    }
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
          size="lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 h-96 z-50 shadow-xl rounded-lg overflow-hidden">
      <Card className="h-full flex flex-col">
        <CardHeader className="bg-blue-600 text-white p-3">
          <CardTitle className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5" />
              <span>Safety Assistant</span>
            </div>
            <Button onClick={() => setIsOpen(false)} variant="ghost" size="sm" className="text-white hover:bg-blue-700">
              <X className="h-4 w-4" />
            </Button>
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0">
          <ScrollArea className="flex-1 p-3">
            <div className="space-y-3">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-2 text-sm ${
                      message.type === "user"
                        ? "bg-blue-600 text-white"
                        : message.isEmergency
                          ? "bg-red-50 border border-red-200 text-gray-900"
                          : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{message.content}</div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-2 max-w-[80%]">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </ScrollArea>

          <div className="p-3 border-t bg-gray-50">
            <div className="grid grid-cols-2 gap-1 mb-2">
              {quickActions.map((action) => (
                <Button
                  key={action.id}
                  onClick={() => handleQuickAction(action)}
                  variant="outline"
                  size="sm"
                  className={`text-xs h-7 ${action.isEmergency ? "border-red-200 text-red-700" : "border-blue-200 text-blue-700"}`}
                >
                  {action.icon}
                  <span className="ml-1 truncate">{action.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="p-3 border-t">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type message..."
                className="flex-1 text-sm"
                disabled={isTyping}
              />
              <Button
                onClick={() => handleSendMessage(inputValue)}
                disabled={!inputValue.trim() || isTyping}
                className="bg-blue-600 hover:bg-blue-700"
                size="sm"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
