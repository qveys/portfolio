import { NextResponse } from 'next/server'

export function middleware(request) {
  // Handle source map requests for React Toastify
  if (request.nextUrl.pathname.includes('.map')) {
    // Return a minimal source map response
    const emptySourceMap = {
      version: 3,
      sources: [],
      names: [],
      mappings: "",
      file: "empty.js"
    };

    return new NextResponse(JSON.stringify(emptySourceMap), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/_next/static/chunks/app/:path*.map',
  ],
}
