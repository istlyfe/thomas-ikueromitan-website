"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MessageCircle, Reply, Send, Clock, User, Mail, Building2, Phone, CheckCircle, AlertCircle, Loader2, LogOut, RefreshCw } from "lucide-react"

// Import types from server file (these are safe to use on client)
interface ContactSubmission {
  id: string
  name: string
  email: string
  phone: string | null
  company: string | null
  sector: string | null
  message: string
  preferred_contact: string
  status: 'new' | 'replied'
  created_at: string
  replied_at: string | null
  admin_notes: string | null
}

export function ContactSubmissions() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null)
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

  // Fetch submissions from API
  const fetchSubmissions = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/contact')
      if (response.ok) {
        const data = await response.json()
        setSubmissions(data.submissions || [])
      } else {
        console.error('Failed to fetch submissions')
        setSubmissions([])
      }
    } catch (error) {
      console.error('Error fetching submissions:', error)
      setSubmissions([])
    } finally {
      setLoading(false)
    }
  }

  // Load submissions on component mount
  useEffect(() => {
    fetchSubmissions()
  }, [])

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/login')
    } catch (error) {
      console.error('Logout failed:', error)
      router.push('/login')
    }
  }

  const handleReply = (submission: ContactSubmission) => {
    setSelectedSubmission(submission)
    setReplyForm({
      subject: `Re: Inquiry from ${submission.name}`,
      message: `Dear ${submission.name},\n\nThank you for your inquiry about ${submission.sector || 'our services'}.\n\n`
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
          replyTo: 'support@thomasikueromitan.com',
          submissionId: selectedSubmission.id
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSendStatus({
          type: 'success',
          message: 'Reply sent successfully!'
        })
        
        // Update submission status locally
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
      {/* Header with Logout and Refresh */}
      <div className="flex items-center justify-between">
        <h2 className="font-manrope font-semibold text-2xl text-foreground">
          Contact Submissions ({submissions.length})
        </h2>
        <div className="flex items-center space-x-3">
          <Button 
            variant="outline" 
            onClick={fetchSubmissions}
            disabled={loading}
            className="flex items-center space-x-2"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </Button>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="flex items-center space-x-2"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </Button>
        </div>
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

      {/* Loading State */}
      {loading && (
        <Card className="border-0 shadow-lg">
          <CardContent className="py-12 text-center">
            <Loader2 className="h-12 w-12 text-muted-foreground mx-auto mb-4 animate-spin" />
            <h3 className="font-manrope font-semibold text-lg mb-2">Loading Submissions...</h3>
            <p className="text-muted-foreground">
              Please wait while we fetch your contact form submissions.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Submissions List */}
      {!loading && submissions.length > 0 && (
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
                              <div><strong>Preferred Contact:</strong> {submission.preferred_contact}</div>
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
                        <span>Sector: {submission.sector || 'Not specified'}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>Phone: {submission.phone || 'Not provided'}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>Received: {formatTimestamp(submission.created_at)}</span>
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
      )}

      {/* Empty State */}
      {!loading && submissions.length === 0 && (
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
