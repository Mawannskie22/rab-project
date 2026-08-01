import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal, Stagger, StaggerItem } from "@/components/anim-wrapper";
import JsonLd from "@/components/JsonLd";
import { articles } from "@/data/artikel";
import { waLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Artikel & Panduan Biaya Bangunan, RAB & Audit BQ",
  description:
    "Kumpulan artikel dan panduan tentang cara menghitung biaya bangunan, menyusun RAB, audit BQ, dan kontrol biaya proyek untuk kontraktor, owner, dan developer.",
  alternates: {
    canonical: "/artikel",
  },
};

export default function ArtikelPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `/artikel/${article.slug}`,
      name: article.title,
    })),
  };

  return (
    <>
      <JsonLd data={itemListJsonLd} />
      <Navbar />
      <main className="bg-base pt-20">
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal>
              <div className="text-center">
                <span className="rounded-full border border-accent-strong/40 px-4 py-2 text-sm text-accent-strong">
                  Artikel & Panduan
                </span>
                <h1 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
                  Panduan Biaya Bangunan & RAB
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                  Pelajari cara menghitung biaya bangunan, menyusun RAB yang
                  akurat, dan mencegah pembengkakan biaya proyek.
                </p>
              </div>
            </Reveal>

            <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <StaggerItem key={article.slug}>
                  <Link
                    href={`/artikel/${article.slug}`}
                    className="flex h-full flex-col rounded-2xl border border-slate-300 bg-surface/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-accent-strong"
                  >
                    <div className="flex items-center gap-3">
                      <span className="rounded-full border border-accent-strong/40 px-3 py-1 text-xs text-accent-strong">
                        {article.category}
                      </span>
                      <span className="text-xs text-slate-500">
                        {article.readTime}
                      </span>
                    </div>

                    <h2 className="mt-4 text-xl font-semibold text-slate-900">
                      {article.title}
                    </h2>

                    <p className="mt-3 flex-1 text-sm text-slate-600">
                      {article.description}
                    </p>

                    <span className="mt-6 text-sm font-semibold text-accent-strong">
                      Baca selengkapnya →
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="mt-16">
              <div className="rounded-3xl border border-accent-strong/40 bg-surface p-10 text-center">
                <h2 className="text-2xl font-bold text-slate-900">
                  Butuh perhitungan biaya proyek yang akurat?
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-slate-600">
                  Konsultasikan proyek Anda dan dapatkan estimasi RAB yang
                  terperinci dari tim kami.
                </p>
                <a
                  href={waLink("Halo Cost Guard, saya ingin konsultasi biaya proyek.")}
                  className="mt-6 inline-block rounded-xl bg-accent px-8 py-4 font-semibold text-black transition hover:scale-105"
                >
                  Konsultasi Gratis
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
