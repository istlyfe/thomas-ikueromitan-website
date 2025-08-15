"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, MessageCircle, Phone } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    sector: "",
    message: "",
    preferredContact: "email"
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    
    setIsSubmitting(false)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      sector: "",
      message: "",
      preferredContact: "email"
    })
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="font-manrope text-2xl text-foreground">Send us a Message</CardTitle>
        <CardDescription className="text-lg">
          Fill out the form below and we'll get back to you within 24 hours
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Full Name *
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
                className="h-11"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address *
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@company.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                className="h-11"
              />
            </div>
          </div>

          {/* Company Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone Number
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="+234 XXX XXX XXXX"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="h-11"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                Company Name
              </label>
              <Input
                id="company"
                type="text"
                placeholder="Your company name"
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
                className="h-11"
              />
            </div>
          </div>

          {/* Sector Selection */}
          <div>
            <label htmlFor="sector" className="block text-sm font-medium text-foreground mb-2">
              Sector of Interest
            </label>
            <Select value={formData.sector} onValueChange={(value) => handleChange("sector", value)}>
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Select your sector" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="building-materials">Building Materials</SelectItem>
                <SelectItem value="automobiles">Automobiles</SelectItem>
                <SelectItem value="agriculture">Agriculture</SelectItem>
                <SelectItem value="transport-haulage">Transport & Haulage</SelectItem>
                <SelectItem value="general-procurement">General Procurement</SelectItem>
                <SelectItem value="logistics">Logistics Services</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message *
            </label>
            <Textarea
              id="message"
              placeholder="Tell us about your procurement needs, project requirements, or any questions you have..."
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              required
              rows={5}
              className="resize-none"
            />
          </div>

          {/* Preferred Contact Method */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">
              Preferred Contact Method
            </label>
            <div className="flex gap-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="preferredContact"
                  value="email"
                  checked={formData.preferredContact === "email"}
                  onChange={(e) => handleChange("preferredContact", e.target.value)}
                  className="text-primary"
                />
                <span className="text-sm">Email</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="preferredContact"
                  value="phone"
                  checked={formData.preferredContact === "phone"}
                  onChange={(e) => handleChange("preferredContact", e.target.value)}
                  className="text-primary"
                />
                <span className="text-sm">Phone</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="preferredContact"
                  value="whatsapp"
                  checked={formData.preferredContact === "whatsapp"}
                  onChange={(e) => handleChange("preferredContact", e.target.value)}
                  className="text-primary"
                />
                <span className="text-sm">WhatsApp</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            size="lg" 
            className="w-full h-12 text-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Sending Message..."
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </>
            )}
          </Button>

          {/* Alternative Contact Methods */}
          <div className="text-center pt-4">
            <p className="text-sm text-muted-foreground mb-3">Or contact us directly:</p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="sm" className="bg-transparent">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
