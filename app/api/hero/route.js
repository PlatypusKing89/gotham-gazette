export async function GET(request) {
  return Response.redirect(new URL('/chaos-city.webp', request.url), 307);
}
