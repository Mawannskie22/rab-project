import { Reveal, Stagger, StaggerItem } from "./anim-wrapper";

const services = [
  "Hitung RAB",
  "Audit BQ",
  "Review RAB",
  "Back Up Volume",
  "Cost Control",
  "Cashflow Proyek",
  "Schedule Pekerjaan",
  "Schedule Material",
];

export default function Services() {
  return (
    <section id="layanan" className="bg-[#090D16] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <Reveal>
          <h2 className="text-center text-4xl font-bold text-white">
            Layanan Utama
          </h2>

          <p className="mt-4 text-center text-slate-400">
            Solusi lengkap untuk estimasi, audit,
            dan kontrol biaya proyek.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <StaggerItem key={service}>
              <div className="rounded-2xl border border-white/10 bg-[#1E293B] p-6 transition hover:border-[#00F5D4]">
                <h3 className="text-lg font-semibold text-white">
                  {service}
                </h3>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

      </div>
    </section>
  );
}