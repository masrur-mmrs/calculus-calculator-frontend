import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const url = new URL(request.url)
  const token = url.searchParams.get("token")

  if (!token) {
    return NextResponse.redirect(new URL('/unauthorized', request.url))
  }

  try {
    const res = await fetch(`https://lms.titanova.xyz/user/user/VlidateKYC?token=${token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    })

    if (!res.ok) {
      return NextResponse.redirect(new URL('/unauthorized', request.url))
    }

    const data = await res.json()
    console.log(data)

    if (data === "Yes") {
      const response = NextResponse.redirect(new URL('/derivative', request.url))
      response.cookies.set('access_token', token, {
        httpOnly: true,
        secure: true,
        path: '/',
      })
      return response
    }

    return NextResponse.redirect(new URL('/unauthorized', request.url))
  } catch (error) {
    console.error('Middleware token validation error:', error)
    return NextResponse.redirect(new URL('/error', request.url))
  }
}

export const config = {
  matcher: '/',
}