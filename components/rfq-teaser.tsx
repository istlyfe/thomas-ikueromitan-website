"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface RFQFormData {
  name: string
  company: string
  email: string
  phone: string
  sector: string
  destination: string
  description: string
}

export function RFQTeaser() {
  const { toast } = useToast()
  const [formData, setFormData] = useState<RFQFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    sector: '',
    destination: '',
    description: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: keyof RFQFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleWhatsAppRedirect = () => {
    const phoneNumber = '2349168295957'
    const message = encodeURIComponent(
      `Hello! I need a quote for your sourcing and logistics services.\n\n` +
      `📋 *Quote Request Details:*\n` +
      `👤 Name: ${formData.name || 'Not specified'}\n` +
      `🏢 Company: ${formData.company || 'Not specified'}\n` +
      `🏭 Sector: ${formData.sector || 'Not specified'}\n` +
      `📍 Destination: ${formData.destination || 'Not specified'}\n\n` +
      `📝 *Requirements:*\n${formData.description || 'Not specified'}\n\n` +
      `Can you help me get started with a professional quote?`
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name, email, and description.",
        variant: "destructive"
      })
      return
    }

    if (!formData.sector) {
      toast({
        title: "Sector Required",
        description: "Please select a sector for your quote request.",
        variant: "destructive"
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Submit to your contact form API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          sector: formData.sector,
          message: `RFQ Request:\n\nDestination: ${formData.destination}\n\nDescription: ${formData.description}`,
          preferredContact: 'email'
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        toast({
          title: "Quote Request Submitted!",
          description: "We'll get back to you within 1 business day with a detailed quote.",
        })
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: '',
            company: '',
            email: '',
            phone: '',
            sector: '',
            destination: '',
            description: ''
          })
          setIsSubmitted(false)
        }, 3000)
      } else {
        throw new Error('Failed to submit')
      }
    } catch (error) {
      console.error('RFQ submission error:', error)
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again or use WhatsApp.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="rfq-section" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="py-16 text-center">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
                <h3 className="font-manrope text-2xl font-semibold mb-4">Quote Request Submitted!</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for your interest! We'll review your requirements and get back to you within 1 business day with a detailed quote.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                >
                  Submit Another Request
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="rfq-section" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="font-manrope text-3xl text-foreground">Ready to Get Started?</CardTitle>
              <CardDescription className="text-lg">
                Submit your request for quotation and we'll respond within 1 business day
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Input 
                    placeholder="Your Name *" 
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                  <Input 
                    placeholder="Company Name" 
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                  />
                  <Input 
                    type="email" 
                    placeholder="Email Address *" 
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-4">
                  <Input 
                    placeholder="Phone Number" 
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                  <Select 
                    value={formData.sector} 
                    onValueChange={(value) => handleInputChange('sector', value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Sector *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="building-materials">Building Materials</SelectItem>
                      <SelectItem value="automobiles">Automobiles</SelectItem>
                      <SelectItem value="agriculture">Agriculture</SelectItem>
                      <SelectItem value="transport-haulage">Transport & Haulage</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input 
                    placeholder="Destination" 
                    value={formData.destination}
                    onChange={(e) => handleInputChange('destination', e.target.value)}
                  />
                </div>
                <div className="md:col-span-2">
                  <Input 
                    placeholder="Describe what you need (items, quantity, specifications) *" 
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    required
                  />
                </div>
                <div className="md:col-span-2 flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="flex-1"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Request a Quote
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                  <Button 
                    type="button"
                    variant="outline" 
                    size="lg" 
                    className="flex-1 bg-transparent"
                    onClick={handleWhatsAppRedirect}
                  >
                    Chat on WhatsApp Instead
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
