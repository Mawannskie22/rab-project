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
    <section id="faq" className="bg-[#090D16] py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="rounded-full border border-[#00F5D4]/20 px-4 py-2 text-sm text-[#00F5D4]">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Pertanyaan yang Sering Diajukan
          </h2>

          <p className="mt-4 text-slate-400">
            Temukan jawaban untuk pertanyaan yang paling sering ditanyakan klien.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-white/10 bg-[#1E293B]/50 p-6"
            >
              <h3 className="text-lg font-semibold text-white">
                {faq.question}
              </h3>

              <p className="mt-3 text-slate-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}