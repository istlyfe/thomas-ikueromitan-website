# 🗄️ Supabase Setup Guide for Contact Form

## 🚀 **What We've Built:**

Your contact form now has a **professional database backend** that:
- ✅ **Stores all submissions** in a PostgreSQL database
- ✅ **Sends emails via Resend** (keeps your existing email functionality)
- ✅ **Real-time admin interface** to view and reply to submissions
- ✅ **Persistent data** that never gets lost
- ✅ **Professional scalability** for thousands of submissions

## 🔧 **Step-by-Step Setup:**

### **1. Create Supabase Account**
1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project" and sign up
3. Create a new project (choose a name like "thomas-ikueromitan-website")

### **2. Get Your Project Credentials**
1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (looks like: `https://abcdefghijklmnop.supabase.co`)
   - **Service Role Key** (starts with `eyJ...`)

### **3. Create the Database Table**
1. In Supabase dashboard, go to **SQL Editor**
2. Run this SQL command:

```sql
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  sector TEXT,
  message TEXT NOT NULL,
  preferred_contact TEXT DEFAULT 'email',
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  replied_at TIMESTAMP WITH TIME ZONE,
  admin_notes TEXT
);

-- Enable Row Level Security (recommended)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow all operations (for now)
CREATE POLICY "Allow all operations" ON contact_submissions
  FOR ALL USING (true);
```

### **4. Set Environment Variables**
Create a file called `.env.local` in your project root:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Resend Email Service (keep your existing key)
RESEND_API_KEY=re_U3ZZ9cyx_CJcf84Jm5psRgCpBYd5uzZsP

# Domain Configuration
NEXT_PUBLIC_DOMAIN=thomasikueromitan.com

# Admin Authentication
ADMIN_USERNAME=thomas_ikueromitan_admin
ADMIN_PASSWORD=Th0m@s!Kuer0m1t@n2024!
JWT_SECRET=v+opqXRtCQasGR4JQDZrzl76zKm05NtnQJsKKgoGyoE=
```

### **5. Set Vercel Environment Variables**
1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add the same variables from step 4

## 🧪 **Testing the Setup:**

### **1. Test Contact Form**
1. Submit a contact form on your website
2. Check if you receive the email
3. Check if submission appears in admin dashboard

### **2. Test Admin Interface**
1. Go to `/admin` and login
2. You should see the new submission
3. Try replying to it

### **3. Check Database**
1. In Supabase dashboard, go to **Table Editor**
2. Click on `contact_submissions`
3. You should see your test submission

## 🔍 **Troubleshooting:**

### **Common Issues:**

**"Missing Supabase environment variables"**
- Check your `.env.local` file exists
- Verify variable names are correct
- Restart your development server

**"Database connection failed"**
- Verify your Supabase URL and key
- Check if your IP is allowed (check Supabase settings)

**"Table doesn't exist"**
- Run the SQL command again in Supabase
- Check the table name matches exactly

**"Contact form works but admin shows empty"**
- Check browser console for errors
- Verify the GET endpoint works (`/api/contact`)
- Check Supabase table has data

## 📊 **Database Schema:**

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Unique identifier |
| `name` | TEXT | Customer name (required) |
| `email` | TEXT | Customer email (required) |
| `phone` | TEXT | Phone number (optional) |
| `company` | TEXT | Company name (optional) |
| `sector` | TEXT | Business sector (optional) |
| `message` | TEXT | Inquiry message (required) |
| `preferred_contact` | TEXT | Contact preference |
| `status` | TEXT | 'new' or 'replied' |
| `created_at` | TIMESTAMP | When submitted |
| `replied_at` | TIMESTAMP | When replied to |
| `admin_notes` | TEXT | Internal notes |

## 🚀 **Next Steps After Setup:**

1. **Test thoroughly** with multiple submissions
2. **Monitor email delivery** in Resend dashboard
3. **Check database** in Supabase dashboard
4. **Consider adding** spam protection (reCAPTCHA)
5. **Set up backups** in Supabase (automatic with paid plans)

## 💰 **Costs:**

- **Supabase**: Free tier includes 500MB database, 50K monthly active users
- **Resend**: Free tier includes 3,000 emails/month
- **Total**: $0/month for most small businesses

## 🆘 **Need Help?**

1. Check Supabase documentation
2. Verify environment variables
3. Check browser console for errors
4. Test API endpoints directly
5. Check Supabase logs

---

**Your contact form now has enterprise-grade database storage while keeping the beautiful email functionality!** 🎉
