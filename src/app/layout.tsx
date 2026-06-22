import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { personalInfo } from '@/data/personal';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `${personalInfo.name} | ${personalInfo.title}`,
  description: `${personalInfo.title} specializing in React, Node.js, and TypeScript. Building modern web and mobile applications in ${personalInfo.location}.`,
  keywords: [
    'Full Stack Developer',
    'JavaScript Developer',
    'TypeScript Developer',
    'React Developer',
    'Node.js Developer',
    'Web Developer',
    'Mobile Developer',
    'React Native',
    'Portugal Developer',
    personalInfo.name,
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://danielmatalone.com',
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: `${personalInfo.title} specializing in React, Node.js, and TypeScript. Building modern web and mobile applications.`,
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - ${personalInfo.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: `${personalInfo.title} specializing in React, Node.js, and TypeScript.`,
    images: ['/og-image.png'],
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
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

