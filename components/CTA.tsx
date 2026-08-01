import Link from "next/link";
import { Reveal } from "./anim-wrapper";
import { waLink } from "@/data/site";

export default function CTA() {
  return (
    <section className="bg-base py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="rounded-3xl border border-accent-strong/40 bg-surface p-12 text-center">

            <h2 className="text-4xl font-bold text-slate-900">
              Siap Mengontrol Biaya Proyek Lebih Aman?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Tim kami membantu Anda menghitung RAB, memeriksa BQ, mengatur cashflow,
              dan menjaga proyek tetap terkendali dari awal sampai selesai.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={waLink("Halo Cost Guard, saya ingin mengontrol biaya proyek saya.")}
                className="inline-block rounded-xl bg-accent px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                Konsultasi Gratis
              </a>
              <Link
                href="/portfolio"
                className="inline-block rounded-xl border border-accent-strong/40 px-8 py-4 font-semibold text-slate-900 transition hover:border-accent-strong"
              >
                Lihat Portofolio
              </Link>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}