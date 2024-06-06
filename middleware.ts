import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log('middleware')

  //! Authentication
  // return NextResponse.redirect(new URL('/home', request.url))

  //! 許可しそのまま通す
  return NextResponse.next(); // Continue to the Next.js request handler

}
 
// 設定したパスのみmiddlewareを適用する
export const config = {
  matcher: ['/', '/dashboard/:path*'],
}