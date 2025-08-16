import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'v+opqXRtCQasGR4JQDZrzl76zKm05NtnQJsKKgoGyoE='

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('admin_token')

    if (!token) {
      return NextResponse.json(
        { authenticated: false, error: 'No token found' },
        { status: 401 }
      )
    }

    try {
      const decoded = verify(token.value, JWT_SECRET) as any
      
      // Check if token is expired
      if (decoded.exp && Date.now() >= decoded.exp * 1000) {
        return NextResponse.json(
          { authenticated: false, error: 'Token expired' },
          { status: 401 }
        )
      }

      return NextResponse.json({
        authenticated: true,
        user: {
          username: decoded.username,
          role: decoded.role
        }
      })

    } catch (jwtError) {
      return NextResponse.json(
        { authenticated: false, error: 'Invalid token' },
        { status: 401 }
      )
    }

  } catch (error) {
    console.error('Verification error:', error)
    return NextResponse.json(
      { authenticated: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
