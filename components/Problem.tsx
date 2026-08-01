import { Reveal, Stagger, StaggerItem } from "./anim-wrapper";

const problems = [
  "Volume pekerjaan salah hitung",
  "Item pekerjaan terlewat",
  "Cashflow proyek sering minus",
  "Material datang terlambat",
  "Progress tidak sesuai target",
  "Margin proyek tidak terpantau",
];

export default function Problems() {
  return (
    <section className="bg-base py-24">
      <div className="mx-auto max-w-7xl px-6">

        <Reveal>
          <div className="text-center">
            <span className="rounded-full border border-red-500/20 px-4 py-2 text-sm text-red-600">
              Masalah Umum Proyek
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Apakah Anda Mengalami Masalah Ini?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Banyak proyek mengalami pembengkakan biaya bukan karena
              harga murah, tetapi karena perencanaan dan kontrol yang
              kurang tepat.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <StaggerItem key={problem}>
              <div className="rounded-2xl border border-red-500/30 bg-surface/50 p-6 transition hover:border-red-500/40 h-full">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10 text-red-600">
                  ✕
                </div>

                <p className="text-lg font-medium text-slate-900">
                  {problem}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

      </div>
    </section>
  );
}