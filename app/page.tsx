import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Problems from "@/components/Problem";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Advantages from "@/components/Advantages";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Hitung RAB, Audit BQ & Kontrol Biaya Proyek",
  description:
    "Jasa hitung RAB, audit BQ, review RAB, cost control, dan cashflow proyek. Bantu kontraktor, owner, dan developer mengendalikan biaya bangunan agar akurat dan minim risiko pembengkakan.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Hitung RAB, Audit BQ & Kontrol Biaya Proyek | Cost Guard",
    description:
      "Solusi praktis untuk menghitung RAB, audit BQ, dan mengendalikan biaya proyek secara terukur.",
  },
};

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Apakah bisa hitung RAB dari gambar PDF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bisa. Selama gambar cukup jelas dan ukuran dapat dibaca, kami dapat menyusun perhitungan RAB dari file PDF.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah bisa audit BQ dari file Excel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bisa. Kami dapat memeriksa volume, rumus Excel, item pekerjaan, harga satuan, dan rekapitulasi total biaya.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah melayani proyek interior?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya. Kami melayani RAB interior, furniture custom, renovasi, dan pekerjaan komersial lainnya.",
        },
      },
      {
        "@type": "Question",
        name: "Berapa lama pengerjaan RAB?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tergantung luas, kompleksitas proyek, dan kelengkapan dokumen yang diberikan.",
        },
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Jasa Hitung RAB, Audit BQ, dan Cost Control Proyek",
    url: siteConfig.url,
    image: `${siteConfig.url}/opengraph-image`,
    provider: {
      "@type": "ProfessionalService",
      "@id": siteConfig.url,
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: `+${siteConfig.whatsapp}`,
    },
    areaServed: "ID",
    description: siteConfig.description,
    offers: {
      "@type": "Offer",
      price: "500000",
      priceCurrency: "IDR",
      description: "Estimasi RAB mulai Rp500.000",
    },
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <JsonLd data={serviceJsonLd} />
      <Navbar />
      <Hero />
      <Stats />
      <Problems />
      <Services />
      <Portfolio />
      <Advantages />
      <Pricing />
      <WhyChooseUs />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
