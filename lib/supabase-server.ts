import { createClient } from '@supabase/supabase-js'

// This file should only be imported in API routes (server-side)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Types for contact submissions
export interface ContactSubmission {
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

export interface CreateContactSubmission {
  name: string
  email: string
  phone?: string
  company?: string
  sector?: string
  message: string
  preferred_contact?: string
}
