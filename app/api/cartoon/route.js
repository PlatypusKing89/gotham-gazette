export async function GET(request) {
  return Response.redirect(new URL('/optimist-reality.webp', request.url), 307);
}
