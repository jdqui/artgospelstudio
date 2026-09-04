import type { Metadata, Viewport } from "next";

import "./globals.css"

const baseUrl = "https://artgospelstudio.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Art Gospel Studio | Branding & Design",
  description: "Branding, packaging, email design, and website design for B2B and DTC brands. Expert graphic design and creative direction.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Art Gospel Studio | Branding & Design",
    description: "Branding, packaging, email design, and website design for B2B and DTC brands.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Art Gospel Studio",
  "url": baseUrl,
  "description": "Branding, packaging, email design, and website design for B2B and DTC brands.",
  "knowsAbout": [
    "Branding",
    "Packaging Design",
    "Email Design",
    "Website Design",
    "Social Media Ads",
    "Creative Direction"
  ]
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}