import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const defaultLocale = 'en'
const locales = ['en', 'zh']

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const [browserLang] = acceptLanguage.split(',')
    if (browserLang.startsWith('zh')) return 'zh'
  }
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check for sitemap.xml and robots.txt
  if (pathname.endsWith('.xml') || pathname.endsWith('.txt')) {
    return NextResponse.next(); // Do not redirect, continue
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
