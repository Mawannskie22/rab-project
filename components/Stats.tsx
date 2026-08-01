import { Stagger, StaggerItem } from "./anim-wrapper";

const stats = [
  { value: "250+", label: "Proyek Ditangani", color: "text-blue-600" },
  { value: "100+", label: "RAB Disusun", color: "text-emerald-600" },
  { value: "95%", label: "Klien Puas", color: "text-highlight" },
  { value: "Rp100M+", label: "Nilai Proyek Terkelola", color: "text-indigo-600" },
];

export default function Stats() {
  return (
    <section className="bg-base py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Stagger className="grid gap-6 md:grid-cols-4">
          {stats.map((item) => (
            <StaggerItem key={item.label}>
              <div className="rounded-2xl border border-slate-300 bg-surface/50 p-8 text-center h-full">
                <h3 className={`text-4xl font-bold ${item.color}`}>
                  {item.value}
                </h3>

                <p className="mt-2 text-slate-600">
                  {item.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}