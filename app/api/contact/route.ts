import { NextRequest, NextResponse } from 'next/server'

// Only initialize Resend if API key is available
let resend: any = null
try {
  if (process.env.RESEND_API_KEY) {
    const { Resend } = require('resend')
    resend = new Resend(process.env.RESEND_API_KEY)
  }
} catch (error) {
  console.warn('Resend not available:', error)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, sector, message, preferredContact } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Check if Resend is available
    if (!resend) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for your message! We will get back to you within 24 hours. (Email service not configured yet)' 
        },
        { status: 200 }
      )
    }

    // Prepare email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      <p><strong>Sector:</strong> ${sector || 'Not provided'}</p>
      <p><strong>Preferred Contact:</strong> ${preferredContact || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <hr>
      <p><em>This message was sent from your website contact form.</em></p>
      <p><em>To reply, use the reply function in your dashboard or send to: ${email}</em></p>
    `

    // Send email to your business
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <support@thomasikueromitan.com>', // Updated to your new domain
      to: ['support@thomasikueromitan.com'], // Changed to your domain email
      subject: `New Contact Form Submission from ${name}`,
      html: emailContent,
    })

    if (error) {
      console.error('Email sending failed:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }

    // Send confirmation email to the customer
    const confirmationEmail = `
      <h2>Thank you for contacting us!</h2>
      <p>Dear ${name},</p>
      <p>Thank you for reaching out to Thomas Ikueromitan & Sons Nigeria Limited. We have received your message and will get back to you within 24 hours.</p>
      <p><strong>Your message:</strong></p>
      <p>${message}</p>
      <hr>
      <p><strong>Our Contact Information:</strong></p>
      <p>Phone: +234 916 829 5957</p>
      <p>WhatsApp: +234 916 829 5957</p>
      <p>Coverage: Nationwide across Nigeria</p>
      <br>
      <p>Best regards,</p>
      <p>Thomas Ikueromitan & Sons Nigeria Limited</p>
    `

    await resend.emails.send({
      from: 'Thomas Ikueromitan & Sons <support@thomasikueromitan.com>', // Updated to your new domain
      to: [email],
      subject: 'Thank you for contacting us - Thomas Ikueromitan & Sons',
      html: confirmationEmail,
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! We will get back to you within 24 hours.',
        data 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    )
  }
}

// New API endpoint for sending replies
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { to, subject, message, replyTo } = body

    // Basic validation
    if (!to || !subject || !message) {
      return NextResponse.json(
        { error: 'To, subject, and message are required' },
        { status: 400 }
      )
    }

    // Check if Resend is available
    if (!resend) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Send reply email
    const { data, error } = await resend.emails.send({
      from: 'Thomas Ikueromitan & Sons <support@thomasikueromitan.com>',
      to: [to],
      replyTo: replyTo || 'support@thomasikueromitan.com',
      subject: subject,
      html: message,
    })

    if (error) {
      console.error('Reply email sending failed:', error)
      return NextResponse.json(
        { error: 'Failed to send reply email. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Reply email sent successfully!',
        data 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Reply email error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    )
  }
}
