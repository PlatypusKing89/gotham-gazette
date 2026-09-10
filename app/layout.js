export const metadata = {
  title: "Gotham Gazette | Issue 0: 2026 Draft Special",
  description: "Issue 0 of the Gotham Gazette, the 2026 Gotham City Fantasy Sports Chaos League draft recap.",
  alternates: { canonical: "https://www.gothamgazette.fans/" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
