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
    <section className="bg-[#090D16] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full border border-[#00F5D4]/20 px-4 py-2 text-sm text-[#00F5D4]">
            Portofolio
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Beberapa Proyek yang Pernah Kami Tangani
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Contoh layanan estimasi biaya, audit BQ, schedule, dan cost control.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-white/10 bg-[#1E293B]/50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#00F5D4]"
            >
              <div className="mb-6 h-40 rounded-xl bg-gradient-to-br from-[#00F5D4]/20 to-transparent" />

              <p className="text-sm text-[#00F5D4]">
                {project.category}
              </p>

              <h3 className="mt-2 text-lg font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-sm text-slate-400">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}