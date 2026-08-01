import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Layanan Jasa Hitung RAB, Audit BQ & Cost Control",
  description:
    "Daftar layanan Cost Guard: hitung RAB, audit BQ, review RAB, back up volume, cost control, cashflow proyek, schedule pekerjaan, dan schedule material.",
  alternates: {
    canonical: "/layanan",
  },
};

export default function LayananPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Services />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
