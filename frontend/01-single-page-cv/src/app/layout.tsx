import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Single Page CV",
  description: "This is a frontend project on roadmap sh",
};
{/* <meta name="robots" content="index, follow" />
<meta property="og:title" content="Panduan Belajar Next.js" />
<meta property="og:description" content="Panduan lengkap belajar Next.js untuk pemula dan profesional." />
<meta property="og:image" content="https://example.com/image.jpg" />
<meta property="og:url" content="https://example.com" /> */}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
