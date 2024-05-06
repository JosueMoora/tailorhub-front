import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'
export async function middleware (request: NextRequest) {
  const token = request.cookies.get('token')
  if (token === undefined) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  try {
    await jwtVerify(token?.value, new TextEncoder().encode(process.env.TOKEN_SECRET))
    return NextResponse.next()
  } catch (error) {
    console.error(error)
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/home', '/restaurant/:path*', '/dashboard']
}
