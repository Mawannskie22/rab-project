import Image from "next/image";
import { Reveal } from "./anim-wrapper";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#090D16] pt-40 pb-24">
      <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#00F5D4]/10 blur-[180px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 lg:gap-16 lg:grid-cols-2">
        <Reveal x={30} delay={0.2} className="lg:order-2 w-full">
          <div className="relative max-w-sm mx-auto lg:max-w-none lg:mx-0">
            <div className="absolute inset-0 rounded-3xl bg-[#00F5D4]/10 blur-3xl" />

            <Image
              src="/images/project-control.png"
              alt="Cost Guard"
              width={800}
              height={600}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="relative z-10 w-full rounded-3xl"
            />
          </div>
        </Reveal>

        <Reveal x={-30} className="lg:order-1">
          <span className="rounded-full border border-[#00F5D4]/20 px-4 py-2 text-sm text-[#00F5D4]">
            Project Cost Control Partner
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl">
            Hitung RAB,
            <br />
            Audit BQ &amp;
            <br />
            Kontrol Biaya <span className="text-[#00F5D4]">Proyek</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-slate-400">
            Membantu kontraktor, owner, developer, dan konsultan mengendalikan
            biaya, cashflow, schedule pekerjaan, serta kebutuhan material agar
            proyek lebih terukur, efisien, dan minim risiko kerugian.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/6281999476069"
              className="rounded-xl bg-[#00F5D4] px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Konsultasi Gratis
            </a>

            <a
              href="#layanan"
              className="rounded-xl border border-[#00F5D4]/20 px-8 py-4 font-semibold text-white transition hover:border-[#00F5D4]"
            >
              Lihat Layanan
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
