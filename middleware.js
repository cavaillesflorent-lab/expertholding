import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  // Vérifier la session
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Protéger les routes /admin/*
  if (req.nextUrl.pathname.startsWith('/admin') && 
      !req.nextUrl.pathname.startsWith('/admin/login')) {
    if (!session) {
      return NextResponse.redirect(new URL('/admin/login', req.url))
    }
  }

  // Rediriger si déjà connecté et tente d'accéder au login
  if (req.nextUrl.pathname === '/admin/login' && session) {
    return NextResponse.redirect(new URL('/admin/dashboard', req.url))
  }

  return res
}

export const config = {
  matcher: ['/admin/:path*']
}