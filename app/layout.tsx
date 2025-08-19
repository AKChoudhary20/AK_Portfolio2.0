import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayush Kumar Choudhary - Developer Advocate & Salesforce MVP",
  description: "Portfolio of Ayush Kumar Choudhary - Developer Advocate, Salesforce MVP, and founder of Cloud Code Academy. Specializing in developer education, technical content creation, and community building.",
  keywords: "Ayush Kumar Choudhary, Developer Advocate, Salesforce MVP, Cloud Code Academy, Salesforce Development, Technical Content Creator",
  authors: [{ name: "Ayush Kumar Choudhary" }],
  openGraph: {
    title: "Ayush Kumar Choudhary - Developer Advocate & Salesforce MVP",
    description: "Bridging developers and cutting-edge technologies with 10+ years of experience.",
    url: "https://ayushkumar.com",
    siteName: "Ayush Kumar Choudhary Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Kumar Choudhary - Developer Advocate & Salesforce MVP",
    description: "Bridging developers and cutting-edge technologies with 10+ years of experience.",
  },
};

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
        <Navigation />
        <main style={{ paddingTop: '80px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
