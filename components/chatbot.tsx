"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Bot, User, Phone, AlertTriangle, Heart, Home } from "lucide-react"
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

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content:
        "Hello! I'm your senior safety assistant. I'm here to help with fall prevention, emergency situations, and health questions. How can I assist you today?",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const quickActions: QuickAction[] = [
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
  ]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    // Emergency responses
    if (lowerMessage.includes("emergency") || lowerMessage.includes("help") || lowerMessage.includes("fallen")) {
      return "🚨 EMERGENCY DETECTED 🚨\n\nI'm connecting you to emergency services immediately. Please stay calm.\n\n📞 Calling 911 now...\n📍 Sharing your location\n🏥 Medical assistance is on the way\n\nIf you can respond, please let me know:\n- Are you conscious and breathing?\n- Are you injured?\n- Can you move safely?"
    }

    // Fall prevention
    if (lowerMessage.includes("fall prevention") || lowerMessage.includes("prevent falls")) {
      return "Here are key fall prevention tips:\n\n🏠 **Home Safety:**\n- Remove loose rugs and clutter\n- Install grab bars in bathrooms\n- Improve lighting throughout your home\n- Keep frequently used items within easy reach\n\n💪 **Stay Active:**\n- Do balance and strength exercises\n- Consider tai chi or yoga\n- Walk regularly\n\n👓 **Health Maintenance:**\n- Get regular eye exams\n- Review medications with your doctor\n- Wear proper footwear\n\nWould you like specific exercises or more detailed home safety tips?"
    }

    // Health questions
    if (lowerMessage.includes("health") || lowerMessage.includes("medication") || lowerMessage.includes("doctor")) {
      return "I can help with general health information, but please remember I'm not a replacement for medical advice.\n\n🩺 **For serious concerns:** Contact your doctor immediately\n🚨 **For emergencies:** Call 911\n💊 **Medication questions:** Consult your pharmacist or doctor\n\n📋 **I can help with:**\n- General wellness tips\n- Fall prevention strategies\n- Emergency preparedness\n- Finding local resources\n\nWhat specific health topic would you like to discuss?"
    }

    // Exercise and mobility
    if (lowerMessage.includes("exercise") || lowerMessage.includes("balance") || lowerMessage.includes("strength")) {
      return "Great question! Here are safe exercises for seniors:\n\n🧘‍♀️ **Balance Exercises:**\n- Stand on one foot (hold onto a chair)\n- Heel-to-toe walking\n- Tai chi movements\n\n💪 **Strength Training:**\n- Chair exercises\n- Light weights or resistance bands\n- Wall push-ups\n\n🚶‍♀️ **Cardio:**\n- Walking\n- Swimming\n- Chair aerobics\n\n⚠️ **Always:** Start slowly and consult your doctor before beginning new exercises.\n\nWould you like specific instructions for any of these exercises?"
    }

    // Technology help
    if (lowerMessage.includes("technology") || lowerMessage.includes("phone") || lowerMessage.includes("device")) {
      return "I can help with technology for seniors:\n\n📱 **Emergency Devices:**\n- Medical alert systems\n- Fall detection watches\n- Emergency buttons\n\n📞 **Communication:**\n- Large button phones\n- Video calling setup\n- Emergency contact lists\n\n🏠 **Smart Home Safety:**\n- Motion sensor lights\n- Smart doorbells\n- Medication reminders\n\nWhat type of technology assistance do you need?"
    }

    // Default helpful response
    return "I'm here to help with:\n\n🚨 **Emergency situations**\n🏠 **Fall prevention tips**\n💊 **General health guidance**\n💪 **Safe exercises for seniors**\n📱 **Technology assistance**\n🏥 **Finding local resources**\n\nPlease let me know what you'd like to learn about, or if you need immediate assistance, don't hesitate to ask for emergency help!"
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

    // Simulate bot thinking time
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
    }, 1500)
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

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
          size="lg"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          <span className="sr-only">Toggle chat assistant</span>
        </Button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] z-50 shadow-2xl rounded-lg overflow-hidden">
          <Card className="h-full flex flex-col">
            <CardHeader className="bg-blue-600 text-white p-4">
              <CardTitle className="flex items-center space-x-2">
                <Bot className="h-6 w-6" />
                <div>
                  <div className="font-semibold">Senior Safety Assistant</div>
                  <div className="text-sm text-blue-100">Always here to help</div>
                </div>
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages Area */}
              <ScrollArea className="flex-1 p-4 h-[350px] max-h-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-50">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.type === "user"
                            ? "bg-blue-600 text-white"
                            : message.isEmergency
                              ? "bg-red-50 border-2 border-red-200 text-gray-900"
                              : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {message.type === "bot" && (
                            <Bot
                              className={`h-4 w-4 mt-0.5 flex-shrink-0 ${message.isEmergency ? "text-red-600" : "text-blue-600"}`}
                            />
                          )}
                          {message.type === "user" && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                          <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                        </div>
                        <div className={`text-xs mt-2 ${message.type === "user" ? "text-blue-100" : "text-gray-500"}`}>
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </div>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                        <div className="flex items-center space-x-2">
                          <Bot className="h-4 w-4 text-blue-600" />
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
                    </div>
                  )}
                </div>
                <div ref={messagesEndRef} />
              </ScrollArea>

              {/* Quick Actions */}
              <div className="p-4 border-t bg-gray-50">
                <div className="text-xs text-gray-600 mb-2">Quick Actions:</div>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action) => (
                    <Button
                      key={action.id}
                      onClick={() => handleQuickAction(action)}
                      variant="outline"
                      size="sm"
                      className={`text-xs h-8 ${
                        action.isEmergency
                          ? "border-red-200 text-red-700 hover:bg-red-50"
                          : "border-blue-200 text-blue-700 hover:bg-blue-50"
                      }`}
                    >
                      {action.icon}
                      <span className="ml-1 truncate">{action.label}</span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1"
                    disabled={isTyping}
                  />
                  <Button
                    onClick={() => handleSendMessage(inputValue)}
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-xs text-gray-500 mt-2 text-center">For emergencies, call 911 immediately</div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
