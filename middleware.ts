import { type NextRequest, NextResponse } from 'next/server'

const publicRoutes = ['/login', '/signup']

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value
  const pathname = request.nextUrl.pathname

  if (publicRoutes.includes(pathname) && token) {
    return NextResponse.redirect(new URL('/today', request.url))
  }

  if (!publicRoutes.includes(pathname) && !token && pathname !== '/') {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|icon|apple-icon).*)'],
}
