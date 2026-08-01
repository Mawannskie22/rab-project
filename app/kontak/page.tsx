import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kontak & Konsultasi Gratis Biaya Proyek",
  description:
    "Konsultasikan proyek Anda kepada Cost Guard secara gratis. Kirim detail proyek lewat WhatsApp dan dapatkan rekomendasi layanan hitung RAB, audit BQ, dan cost control yang sesuai.",
  alternates: {
    canonical: "/kontak",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <ContactForm />
      </main>

      <Footer />
    </>
  );
}
