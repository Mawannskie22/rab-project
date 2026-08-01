import { Reveal, Stagger, StaggerItem } from "./anim-wrapper";

const faqs = [
  {
    question: "Apakah bisa hitung RAB dari gambar PDF?",
    answer:
      "Bisa. Selama gambar cukup jelas dan ukuran dapat dibaca, kami dapat menyusun perhitungan RAB dari file PDF.",
  },
  {
    question: "Apakah bisa audit BQ dari file Excel?",
    answer:
      "Bisa. Kami dapat memeriksa volume, rumus Excel, item pekerjaan, harga satuan, dan rekapitulasi total biaya.",
  },
  {
    question: "Apakah melayani proyek interior?",
    answer:
      "Ya. Kami melayani RAB interior, furniture custom, renovasi, dan pekerjaan komersial lainnya.",
  },
  {
    question: "Apakah bisa membantu proyek yang sedang berjalan?",
    answer:
      "Bisa. Kami dapat membantu kontrol biaya, cashflow, schedule pekerjaan, dan schedule material.",
  },
  {
    question: "Berapa lama pengerjaan?",
    answer:
      "Tergantung luas, kompleksitas proyek, dan kelengkapan dokumen yang diberikan.",
  },
  {
    question: "Apakah data proyek aman?",
    answer:
      "Ya. Seluruh dokumen dan data proyek dijaga kerahasiaannya dan tidak akan dipublikasikan tanpa izin.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-base py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="text-center">
            <span className="rounded-full border border-accent-strong/40 px-4 py-2 text-sm text-accent-strong">
              FAQ
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Pertanyaan yang Sering Diajukan
            </h2>

            <p className="mt-4 text-slate-600">
              Temukan jawaban untuk pertanyaan yang paling sering ditanyakan klien.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-12 space-y-6">
          {faqs.map((faq) => (
            <StaggerItem key={faq.question}>
              <div className="rounded-2xl border border-slate-300 bg-surface/50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </h3>

                <p className="mt-3 text-slate-600">
                  {faq.answer}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}