"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function WhatsAppFloating() {
  const whatsappUrl =
    "https://wa.me/2349168295957?text=Hello%20Thomas%20IKueromitan%20and%20Sons%20Nigeria%20Limited%20(LTD)%20%E2%80%94%20I%27d%20like%20to%20request%20a%20quote."

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-shadow bg-green-500 hover:bg-green-600 text-white"
        onClick={() => window.open(whatsappUrl, "_blank")}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  )
}
