const packages = [
  {
    name: "Estimasi RAB",
    price: "Mulai Rp500.000",
    features: [
      "Hitung Volume Pekerjaan",
      "Hitung RAB",
      "Rekap Biaya",
      "File Excel",
      "1 Kali Revisi",
    ],
  },
  {
    name: "Audit BQ / Review RAB",
    price: "Mulai Rp1.000.000",
    features: [
      "Audit BQ",
      "Cek Volume",
      "Cek Rumus Excel",
      "Cek Item Terlewat",
      "Rekomendasi Perbaikan",
    ],
    featured: true,
  },
  {
    name: "Full Project Control",
    price: "Custom",
    features: [
      "Hitung RAB",
      "Audit BQ",
      "Cost Control",
      "Cashflow",
      "Schedule Proyek",
      "Monitoring Progress",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="harga" className="bg-[#090D16] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full border border-[#00F5D4]/20 px-4 py-2 text-sm text-[#00F5D4]">
            Paket Layanan
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Pilih Paket Sesuai Kebutuhan Proyek
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Mulai dari estimasi RAB hingga kontrol proyek secara menyeluruh.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-3xl border p-8 ${
                pkg.featured
                  ? "border-[#00F5D4] bg-[#1E293B]"
                  : "border-white/10 bg-[#1E293B]/50"
              }`}
            >
              <h3 className="text-2xl font-bold text-white">
                {pkg.name}
              </h3>

              <p className="mt-4 text-3xl font-bold text-[#00F5D4]">
                {pkg.price}
              </p>

              <ul className="mt-8 space-y-4">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-slate-300"
                  >
                    ✓ {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/628123456789"
                className="mt-8 block rounded-xl bg-[#00F5D4] px-5 py-3 text-center font-semibold text-black"
              >
                Konsultasi
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}