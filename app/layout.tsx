import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { profile } from "@/data/portfolio";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://relinxx.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Syed Muhammad Rehan | AI-focused Software Engineer",
    template: "%s | Syed Muhammad Rehan",
  },
  description:
    "AI-focused Software Engineer building production RAG systems, AI agents, NL2SQL workflows, and Azure-deployed applications.",
  keywords: [
    "Syed Muhammad Rehan",
    "AI Engineer",
    "RAG Engineer",
    "Agentic AI",
    "NL2SQL",
    "Azure AI Search",
    "Python",
    "FastAPI",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Syed Muhammad Rehan",
    title: "Syed Muhammad Rehan | AI-focused Software Engineer",
    description:
      "Production RAG systems, AI agents, NL2SQL workflows, and Azure-deployed applications.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Muhammad Rehan | AI-focused Software Engineer",
    description:
      "Production RAG systems, AI agents, NL2SQL workflows, and Azure-deployed applications.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/rehan-profile-suit.png",
    apple: "/rehan-profile-suit.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#090912",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    alternateName: profile.handle,
    jobTitle: profile.role,
    email: profile.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rawalpindi",
      addressCountry: "PK",
    },
    url: siteUrl,
    sameAs: [profile.links.github, profile.links.linkedin],
    knowsAbout: [
      "Retrieval-Augmented Generation",
      "AI Agents",
      "Natural Language to SQL",
      "Azure AI Search",
      "Python",
      "FastAPI",
    ],
  };

  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="ambient ambient-one" aria-hidden="true" />
        <div className="ambient ambient-two" aria-hidden="true" />
        <SiteHeader />
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
