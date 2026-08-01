import type { Metadata } from "next";
import "./globals.css";
import ClientFloatingWhatsapp from "@/components/ClientFloatingWhatsapp";
import PageTransition from "@/components/PageTransition";
import Analytics from "@/components/Analytics";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/data/site";

const siteName = `${siteConfig.name} | ${siteConfig.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteName,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  category: "construction",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName,
    title: siteName,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: `${siteConfig.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/opengraph-image`,
    logo: `${siteConfig.url}/opengraph-image`,
    telephone: `+${siteConfig.whatsapp}`,
    email: siteConfig.email,
    priceRange: siteConfig.priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
      postalCode: siteConfig.postcode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.2088,
      longitude: 106.8456,
    },
    openingHours: siteConfig.openingHours,
    areaServed: "ID",
    founder: {
      "@type": "Person",
      name: "Cost Guard Team",
    },
    sameAs: [
      `https://wa.me/${siteConfig.whatsapp}`,
    ],
  };

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "id-ID",
    publisher: {
      "@type": "ProfessionalService",
      "@id": siteConfig.url,
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <html lang="id">
      <head>
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={webSiteJsonLd} />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body>
        <PageTransition>{children}</PageTransition>
        <ClientFloatingWhatsapp />
        <Analytics />
      </body>
    </html>
  );
}
