import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { HeroHeader } from "@/components/header";
import { StructuredData } from "@/components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zebra Design | Design & Development Services for Startups | €5k/month",
  description: "Launch your digital product in weeks, not months. AI-powered design & development services for founders and SMEs. Monthly subscription from €5k. Cancel anytime.",
  keywords: ["design agency", "web development", "startup services", "AI development", "product design", "rapid prototyping", "founders", "SME", "digital products"],
  authors: [{ name: "Charlie Ellington" }],
  creator: "Zebra Design",
  publisher: "Zebra Design",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zebradesign.studio'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Zebra Design | Design & Development Services for Startups",
    description: "Launch your digital product in weeks, not months. AI-powered design & development services. €5k/month, cancel anytime.",
    url: 'https://zebradesign.studio', // Replace with your actual domain
    siteName: 'Zebra Design',
    images: [
      {
        url: '/images/og-image.png', // You'll need to create this
        width: 1200,
        height: 630,
        alt: 'Zebra Design - Design and AI Code',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Zebra Design | Design & Development for Startups",
    description: "Launch your digital product in weeks. AI-powered development. €5k/month.",
    images: ['/images/og-image.png'], // Same as OG image
    creator: '@charlieellington', // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌈</text></svg>',
    apple: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌈</text></svg>',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HeroHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
