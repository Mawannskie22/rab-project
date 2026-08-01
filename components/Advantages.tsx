import {
  SearchCheck,
  ShieldCheck,
  PiggyBank,
  CalendarClock,
  FileSpreadsheet,
  Building2,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./anim-wrapper";

const advantages = [
  {
    title: "Perhitungan Lebih Detail",
    description:
      "Setiap item pekerjaan dihitung berdasarkan gambar, spesifikasi, dan kebutuhan proyek.",
    icon: SearchCheck,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Mengurangi Risiko Kerugian",
    description:
      "Audit BQ dan kontrol biaya membantu menemukan kesalahan sebelum proyek berjalan.",
    icon: ShieldCheck,
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Cashflow Lebih Terencana",
    description:
      "Membantu mengatur arus kas proyek agar pembayaran material dan tenaga kerja lebih terkendali.",
    icon: PiggyBank,
    color: "bg-amber-100 text-amber-700",
  },
  {
    title: "Schedule Lebih Jelas",
    description:
      "Menyusun target pekerjaan dan kebutuhan material secara terukur.",
    icon: CalendarClock,
    color: "bg-rose-100 text-rose-700",
  },
  {
    title: "File Rapi & Siap Pakai",
    description:
      "Output Excel dan PDF mudah digunakan untuk tender maupun monitoring proyek.",
    icon: FileSpreadsheet,
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    title: "Bangunan & Interior",
    description:
      "Melayani proyek konstruksi, renovasi, interior, dan pekerjaan komersial.",
    icon: Building2,
    color: "bg-cyan-100 text-cyan-700",
  },
];

export default function Advantages() {
  return (
    <section className="bg-base py-24">
      <div className="mx-auto max-w-7xl px-6">

        <Reveal>
          <div className="text-center">
            <span className="rounded-full border border-accent-strong/40 px-4 py-2 text-sm text-accent-strong">
              Keunggulan Kami
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Kenapa Memilih Cost Guard?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Lebih dari sekadar menghitung RAB. Kami membantu
              mengontrol biaya dan performa proyek secara menyeluruh.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
            <StaggerItem key={item.title}>
              <div className="rounded-2xl border border-slate-300 bg-surface/50 p-6 transition hover:border-accent-strong/50 flex flex-col h-full">
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}>
                  <item.icon size={24} />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-slate-600 flex-1">
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