import { Reveal, Stagger, StaggerItem } from "./anim-wrapper";
import { waLink } from "@/data/site";

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
    <section id="harga" className="scroll-mt-24 bg-base py-24">
      <div className="mx-auto max-w-7xl px-6">

        <Reveal>
          <div className="text-center">
            <span className="rounded-full border border-accent-strong/40 px-4 py-2 text-sm text-accent-strong">
              Paket Layanan
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Pilih Paket Sesuai Kebutuhan Proyek
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Mulai dari estimasi RAB hingga kontrol proyek secara menyeluruh.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-14 grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <StaggerItem key={pkg.name}>
              <div
                className={`rounded-3xl border p-8 flex flex-col h-full ${
                  pkg.featured
                    ? "border-accent-strong bg-surface"
                    : "border-slate-300 bg-surface/50"
                }`}
              >
                <h3 className="text-2xl font-bold text-slate-900">
                  {pkg.name}
                </h3>

                <p className="mt-4 text-3xl font-bold text-accent-strong">
                  {pkg.price}
                </p>

                <ul className="mt-8 space-y-4 flex-1">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-slate-600"
                    >
                      ✓ {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(`Halo Cost Guard, saya tertarik paket ${pkg.name} (${pkg.price}). Mohon info detail.`)}
                  className="mt-8 block rounded-xl bg-accent px-5 py-3 text-center font-semibold text-black"
                >
                  Konsultasi
                </a>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

      </div>
    </section>
  );
}