import { Reveal } from "./anim-wrapper";

const points = [
  {
    title: "Proses yang sistematis",
    description: "Mulai dari identifikasi kebutuhan, hitungan volume, sampai kontrol biaya tetap terarah.",
  },
  {
    title: "Hasil lebih akurat",
    description: "Meminimalkan risiko salah hitung yang sering memicu pembengkakan biaya proyek.",
  },
  {
    title: "Support yang cepat",
    description: "Konsultasi langsung via WhatsApp untuk kebutuhan mendesak dan keputusan cepat.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-surface-2 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center">
            <span className="rounded-full border border-accent-strong/40 px-4 py-2 text-sm text-accent-strong">
              Kenapa Memilih Kami
            </span>
            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Solusi yang membantu Anda mengontrol proyek tanpa ribet
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Kami fokus pada akurasi, efisiensi, dan dukungan yang nyata agar biaya proyek lebih aman.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {points.map((item, index) => (
            <Reveal key={item.title} delay={0.1 * index}>
              <div className="rounded-3xl border border-slate-300 bg-surface/50 p-8 h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-xl font-bold text-accent-strong">
                  {index + 1}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
