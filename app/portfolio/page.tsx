import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/anim-wrapper";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Portfolio Proyek RAB, Audit BQ & Cost Control",
  description:
    "Contoh proyek yang pernah ditangani Cost Guard: RAB rumah tinggal, audit BQ renovasi kantor, schedule pekerjaan interior, dan cashflow project control.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    type: "website",
    title: "Portfolio Proyek RAB, Audit BQ & Cost Control",
    description:
      "Contoh proyek yang pernah ditangani Cost Guard: RAB rumah tinggal, audit BQ renovasi kantor, schedule pekerjaan interior, dan cashflow project control.",
    url: `${siteConfig.url}/portfolio`,
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-base">
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <Reveal>
              <span className="rounded-full border border-accent-strong/40 px-4 py-2 text-sm text-accent-strong">
                Portfolio
              </span>
              <h1 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
                Proyek yang Pernah Kami Tangani
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                Berbagai jenis proyek konstruksi, renovasi, dan interior yang
                berhasil dikendalikan biayanya dengan RAB, audit BQ, schedule,
                dan cost control.
              </p>
            </Reveal>
          </div>
        </section>
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
