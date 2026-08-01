import { Reveal, Stagger, StaggerItem } from "./anim-wrapper";

const categoryColor: Record<string, string> = {
  "Estimasi RAB": "bg-blue-100 text-blue-700",
  "Audit BQ": "bg-violet-100 text-violet-700",
  "Project Schedule": "bg-amber-100 text-amber-700",
  "Cost Control": "bg-emerald-100 text-emerald-700",
};

const projects = [
  {
    title: "RAB Rumah Tinggal 2 Lantai",
    category: "Estimasi RAB",
    description:
      "Penyusunan RAB lengkap untuk pembangunan rumah tinggal dengan rekap volume dan harga satuan pekerjaan.",
  },
  {
    title: "Audit BQ Renovasi Kantor",
    category: "Audit BQ",
    description:
      "Pemeriksaan volume pekerjaan, item terlewat, dan validasi harga satuan sebelum tender.",
  },
  {
    title: "Schedule Pekerjaan Interior",
    category: "Project Schedule",
    description:
      "Penyusunan time schedule, target mingguan, dan monitoring progres pekerjaan interior.",
  },
  {
    title: "Cashflow Project Control",
    category: "Cost Control",
    description:
      "Perencanaan arus kas proyek untuk mengontrol pemasukan, pengeluaran, dan kebutuhan dana.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24 bg-base py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center">
            <span className="rounded-full border border-accent-strong/40 px-4 py-2 text-sm text-accent-strong">
              Portofolio
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Beberapa Proyek yang Pernah Kami Tangani
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Contoh layanan estimasi biaya, audit BQ, schedule, dan cost control.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <div className="rounded-2xl border border-slate-300 bg-surface/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-accent-strong flex flex-col h-full">
                <div className="mb-6 h-40 rounded-xl bg-linear-to-br from-accent/20 to-transparent" />

                <p className={`w-fit rounded-full px-3 py-1 text-sm font-medium ${categoryColor[project.category]}`}>
                  {project.category}
                </p>

                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 flex-1">
                  {project.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}