import { Reveal, Stagger, StaggerItem } from "./anim-wrapper";

const advantages = [
  {
    title: "Perhitungan Lebih Detail",
    description:
      "Setiap item pekerjaan dihitung berdasarkan gambar, spesifikasi, dan kebutuhan proyek.",
  },
  {
    title: "Mengurangi Risiko Kerugian",
    description:
      "Audit BQ dan kontrol biaya membantu menemukan kesalahan sebelum proyek berjalan.",
  },
  {
    title: "Cashflow Lebih Terencana",
    description:
      "Membantu mengatur arus kas proyek agar pembayaran material dan tenaga kerja lebih terkendali.",
  },
  {
    title: "Schedule Lebih Jelas",
    description:
      "Menyusun target pekerjaan dan kebutuhan material secara terukur.",
  },
  {
    title: "File Rapi & Siap Pakai",
    description:
      "Output Excel dan PDF mudah digunakan untuk tender maupun monitoring proyek.",
  },
  {
    title: "Bangunan & Interior",
    description:
      "Melayani proyek konstruksi, renovasi, interior, dan pekerjaan komersial.",
  },
];

export default function Advantages() {
  return (
    <section className="bg-[#090D16] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <Reveal>
          <div className="text-center">
            <span className="rounded-full border border-[#00F5D4]/20 px-4 py-2 text-sm text-[#00F5D4]">
              Keunggulan Kami
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white">
              Kenapa Memilih RAB Project Control?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Lebih dari sekadar menghitung RAB. Kami membantu
              mengontrol biaya dan performa proyek secara menyeluruh.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
            <StaggerItem key={item.title}>
              <div className="rounded-2xl border border-white/10 bg-[#1E293B]/50 p-6 transition hover:border-[#00F5D4]/50 flex flex-col h-full">
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-slate-400 flex-1">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

      </div>
    </section>
  );
}