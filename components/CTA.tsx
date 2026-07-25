import { Reveal } from "./anim-wrapper";

export default function CTA() {
  return (
    <section className="bg-[#090D16] py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="rounded-3xl border border-[#00F5D4]/20 bg-[#1E293B] p-12 text-center">

            <h2 className="text-4xl font-bold text-white">
              Siap Mengontrol Biaya Proyek Lebih Aman?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Tim kami membantu Anda menghitung RAB, memeriksa BQ, mengatur cashflow,
              dan menjaga proyek tetap terkendali dari awal sampai selesai.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/6281999476069"
                className="inline-block rounded-xl bg-[#00F5D4] px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                Konsultasi Gratis
              </a>
              <a
                href="/#portfolio"
                className="inline-block rounded-xl border border-[#00F5D4]/20 px-8 py-4 font-semibold text-white transition hover:border-[#00F5D4]"
              >
                Lihat Portofolio
              </a>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}