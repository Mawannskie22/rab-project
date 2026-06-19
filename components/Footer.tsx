import { Reveal } from "./anim-wrapper";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090D16]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <Reveal y={20}>
          <div className="grid gap-10 md:grid-cols-4">

            <div>
              <h3 className="text-xl font-bold text-white">
                Cost Guard
              </h3>

              <p className="mt-4 text-slate-400">
                Partner kontraktor dan owner dalam estimasi biaya,
                audit BQ, cashflow, dan kontrol proyek.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white">
                Layanan
              </h4>

              <ul className="mt-4 space-y-2 text-slate-400">
                <li>Hitung RAB</li>
                <li>Audit BQ</li>
                <li>Cost Control</li>
                <li>Schedule Proyek</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white">
                Informasi
              </h4>

              <ul className="mt-4 space-y-2 text-slate-400">
                <li>Tentang Kami</li>
                <li>Portfolio</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white">
                Kontak
              </h4>

              <ul className="mt-4 space-y-2 text-slate-400">
                <li>WhatsApp</li>
                <li>Email</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>

          </div>

          <div className="mt-12 border-t border-white/10 pt-8 text-center text-slate-500">
            © 2026 Cost Guard. All rights reserved.
          </div>
        </Reveal>
      </div>
    </footer>
  );
}