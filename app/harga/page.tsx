import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Harga Paket Jasa Hitung RAB & Audit BQ",
  description:
    "Harga paket jasa hitung RAB mulai Rp500.000, audit BQ/review RAB mulai Rp1.000.000, dan paket Full Project Control custom sesuai kebutuhan proyek Anda.",
  alternates: {
    canonical: "/harga",
  },
  openGraph: {
    type: "website",
    title: "Harga Paket Jasa Hitung RAB & Audit BQ",
    description:
      "Harga paket jasa hitung RAB mulai Rp500.000, audit BQ/review RAB mulai Rp1.000.000, dan paket Full Project Control custom sesuai kebutuhan proyek Anda.",
    url: `${siteConfig.url}/harga`,
  },
};

export default function HargaPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Harga Paket",
        item: "/harga",
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <Navbar />
      <main className="pt-20">
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
