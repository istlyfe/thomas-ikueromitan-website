"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MessageCircle, Reply, Send, Clock, User, Mail, Building2, Phone, CheckCircle, AlertCircle, Loader2, LogOut } from "lucide-react"

// Mock data - in a real app, this would come from a database
const mockSubmissions = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+234 801 234 5678",
    company: "ABC Construction Ltd",
    sector: "Building Materials",
    message: "I need a quote for 1000 bags of cement and 50 tons of rebar for our new project in Lagos.",
    preferredContact: "email",
    timestamp: "2024-01-15T10:30:00Z",
    status: "new"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@transport.com",
    phone: "+234 802 345 6789",
    company: "Fast Logistics",
    sector: "Transport & Haulage",
    message: "We're looking for reliable transport services for our goods from Port Harcourt to Abuja. Can you provide a quote?",
    preferredContact: "phone",
    timestamp: "2024-01-15T09:15:00Z",
    status: "replied"
  }
]

export function ContactSubmissions() {
  const [submissions, setSubmissions] = useState(mockSubmissions)
  const [selectedSubmission, setSelectedSubmission] = useState<any>(null)
  const [replyForm, setReplyForm] = useState({
    subject: "",
    message: ""
  })
  const [isSending, setIsSending] = useState(false)
  const [sendStatus, setSendStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/login')
    } catch (error) {
      console.error('Logout failed:', error)
      router.push('/login')
    }
  }

  const handleReply = (submission: any) => {
    setSelectedSubmission(submission)
    setReplyForm({
      subject: `Re: Inquiry from ${submission.name}`,
      message: `Dear ${submission.name},\n\nThank you for your inquiry about ${submission.sector}.\n\n`
    })
  }

  const handleSendReply = async () => {
    if (!selectedSubmission || !replyForm.subject || !replyForm.message) {
      setSendStatus({ type: 'error', message: 'Please fill in all fields' })
      return
    }

    setIsSending(true)
    setSendStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: selectedSubmission.email,
          subject: replyForm.subject,
          message: replyForm.message,
          replyTo: 'support@thomasikueromitan.com'
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSendStatus({
          type: 'success',
          message: 'Reply sent successfully!'
        })
        
        // Update submission status
        setSubmissions(prev => prev.map(sub => 
          sub.id === selectedSubmission.id 
            ? { ...sub, status: 'replied' }
            : sub
        ))
        
        // Reset form
        setReplyForm({ subject: "", message: "" })
        setSelectedSubmission(null)
        
        // Clear success message after 3 seconds
        setTimeout(() => {
          setSendStatus({ type: null, message: '' })
        }, 3000)
      } else {
        setSendStatus({
          type: 'error',
          message: result.error || 'Failed to send reply'
        })
      }
    } catch (error) {
      console.error('Reply sending error:', error)
      setSendStatus({
        type: 'error',
        message: 'Network error. Please try again.'
      })
    } finally {
      setIsSending(false)
    }
  }

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('en-NG', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getStatusBadge = (status: string) => {
    if (status === 'replied') {
      return <Badge variant="secondary" className="bg-green-100 text-green-800">Replied</Badge>
    }
    return <Badge variant="secondary" className="bg-blue-100 text-blue-800">New</Badge>
  }

  return (
    <div className="space-y-8">
      {/* Header with Logout */}
      <div className="flex items-center justify-between">
        <h2 className="font-manrope font-semibold text-2xl text-foreground">
          Contact Submissions
        </h2>
        <Button 
          variant="outline" 
          onClick={handleLogout}
          className="flex items-center space-x-2"
        >
          <LogOut className="h-4 w-4" />
          <span>Logout</span>
        </Button>
      </div>

      {/* Status Messages */}
      {sendStatus.type && (
        <div className={`p-4 rounded-lg border ${
          sendStatus.type === 'success'
            ? 'bg-green-50 border-green-200 text-green-800'
            : 'bg-red-50 border-red-200 text-red-800'
        }`}>
          <div className="flex items-center space-x-2">
            {sendStatus.type === 'success' ? (
              <CheckCircle className="h-5 w-5 text-green-600" />
            ) : (
              <AlertCircle className="h-5 w-5 text-red-600" />
            )}
            <span className="font-medium">{sendStatus.message}</span>
          </div>
        </div>
      )}

      {/* Submissions List */}
      <div className="grid gap-6">
        {submissions.map((submission) => (
          <Card key={submission.id} className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="font-manrope text-xl">{submission.name}</CardTitle>
                    <CardDescription className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span>{submission.email}</span>
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {getStatusBadge(submission.status)}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleReply(submission)}
                        className="flex items-center space-x-2"
                      >
                        <Reply className="h-4 w-4" />
                        <span>Reply</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Reply to {submission.name}</DialogTitle>
                        <DialogDescription>
                          Send a professional reply from support@thomasikueromitan.com
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-4">
                        {/* Customer Info */}
                        <div className="bg-muted/30 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Customer Inquiry:</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div><strong>Company:</strong> {submission.company || 'Not provided'}</div>
                            <div><strong>Sector:</strong> {submission.sector || 'Not provided'}</div>
                            <div><strong>Phone:</strong> {submission.phone || 'Not provided'}</div>
                            <div><strong>Preferred Contact:</strong> {submission.preferredContact}</div>
                          </div>
                          <div className="mt-3">
                            <strong>Message:</strong>
                            <p className="text-muted-foreground mt-1">{submission.message}</p>
                          </div>
                        </div>

                        {/* Reply Form */}
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Subject</label>
                            <Input
                              value={replyForm.subject}
                              onChange={(e) => setReplyForm(prev => ({ ...prev, subject: e.target.value }))}
                              placeholder="Enter email subject"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium mb-2">Your Reply</label>
                            <Textarea
                              value={replyForm.message}
                              onChange={(e) => setReplyForm(prev => ({ ...prev, message: e.target.value }))}
                              placeholder="Write your professional reply..."
                              rows={8}
                              className="resize-none"
                            />
                          </div>
                        </div>

                        {/* Send Button */}
                        <Button 
                          onClick={handleSendReply}
                          disabled={isSending}
                          className="w-full"
                        >
                          {isSending ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Sending Reply...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              Send Reply
                            </>
                          )}
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Inquiry Details</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Building2 className="h-4 w-4" />
                      <span>Sector: {submission.sector}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>Phone: {submission.phone || 'Not provided'}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>Received: {formatTimestamp(submission.timestamp)}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Message</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {submission.message}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {submissions.length === 0 && (
        <Card className="border-0 shadow-lg">
          <CardContent className="py-12 text-center">
            <MessageCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-manrope font-semibold text-lg mb-2">No Contact Submissions Yet</h3>
            <p className="text-muted-foreground">
              When customers submit the contact form, their inquiries will appear here for you to review and reply to.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
