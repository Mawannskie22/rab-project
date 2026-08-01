import {
  Calculator,
  FileSearch,
  FileCheck2,
  Ruler,
  TrendingDown,
  Wallet,
  CalendarClock,
  Truck,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./anim-wrapper";

const services = [
  {
    name: "Hitung RAB",
    description: "Susun RAB lengkap dari gambar & spesifikasi proyek.",
    icon: Calculator,
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Audit BQ",
    description: "Periksa volume, rumus, dan item pekerjaan BQ Anda.",
    icon: FileSearch,
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    name: "Review RAB",
    description: "Validasi RAB sebelum tender atau pelaksanaan.",
    icon: FileCheck2,
    color: "bg-violet-100 text-violet-700",
  },
  {
    name: "Back Up Volume",
    description: "Hitung ulang volume pekerjaan dari gambar kerja.",
    icon: Ruler,
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    name: "Cost Control",
    description: "Pantau biaya aktual vs rencana selama proyek.",
    icon: TrendingDown,
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Cashflow Proyek",
    description: "Atur arus kas pemasukan dan pengeluaran proyek.",
    icon: Wallet,
    color: "bg-amber-100 text-amber-700",
  },
  {
    name: "Schedule Pekerjaan",
    description: "Susun time schedule dan target mingguan.",
    icon: CalendarClock,
    color: "bg-rose-100 text-rose-700",
  },
  {
    name: "Schedule Material",
    description: "Rencanakan kebutuhan material tepat waktu.",
    icon: Truck,
    color: "bg-orange-100 text-orange-700",
  },
];

export default function Services() {
  return (
    <section id="layanan" className="scroll-mt-24 bg-base py-24">
      <div className="mx-auto max-w-7xl px-6">

        <Reveal>
          <h2 className="text-center text-4xl font-bold text-slate-900">
            Layanan Utama
          </h2>

          <p className="mt-4 text-center text-slate-600">
            Solusi lengkap untuk estimasi, audit,
            dan kontrol biaya proyek.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <StaggerItem key={service.name}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-300 bg-surface p-6 transition hover:border-accent-strong">
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${service.color}`}>
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {service.name}
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">
                  {service.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

      </div>
    </section>
  );
}
