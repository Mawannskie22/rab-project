const stats = [
  { value: "250+", label: "Proyek Ditangani" },
  { value: "100+", label: "RAB Disusun" },
  { value: "95%", label: "Klien Puas" },
  { value: "Rp100M+", label: "Nilai Proyek Terkelola" },
];

export default function Stats() {
  return (
    <section className="bg-[#090D16] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-[#1E293B]/50 p-8 text-center"
            >
              <h3 className="text-4xl font-bold text-[#00F5D4]">
                {item.value}
              </h3>

              <p className="mt-2 text-slate-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}