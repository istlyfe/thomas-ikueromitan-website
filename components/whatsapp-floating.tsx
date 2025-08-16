"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function WhatsAppFloating() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '2349168295957'
    const message = encodeURIComponent(
      'Hello! I\'m interested in your sourcing and logistics services for building materials, automobiles, or agriculture. Can you help me get started with a quote?'
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <TooltipProvider>
      <div className="fixed bottom-6 right-6 z-50">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="lg"
              className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-all duration-300 bg-green-500 hover:bg-green-600 text-white hover:scale-110"
              onClick={handleWhatsAppClick}
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left" className="bg-green-600 text-white border-green-600">
            <p>Chat with us on WhatsApp!</p>
            <p className="text-xs opacity-90">Get instant quotes & support</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}
