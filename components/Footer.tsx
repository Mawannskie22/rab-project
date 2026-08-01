import Link from "next/link";
import { Reveal } from "./anim-wrapper";
import { siteConfig, waLink } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-300 bg-base">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <Reveal y={20}>
          <div className="grid gap-10 md:grid-cols-4">

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                {siteConfig.name}
              </h3>

              <p className="mt-4 text-slate-600">
                Partner kontraktor, owner, dan developer dalam estimasi biaya,
                audit BQ, cashflow, dan kontrol proyek.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">
                Layanan
              </h4>

              <ul className="mt-4 space-y-2 text-slate-600">
                <li><Link href="/layanan" className="hover:text-accent-strong">Hitung RAB</Link></li>
                <li><Link href="/layanan" className="hover:text-accent-strong">Audit BQ</Link></li>
                <li><Link href="/layanan" className="hover:text-accent-strong">Cost Control</Link></li>
                <li><Link href="/layanan" className="hover:text-accent-strong">Schedule Proyek</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">
                Informasi
              </h4>

              <ul className="mt-4 space-y-2 text-slate-600">
                <li><Link href="/tentang" className="hover:text-accent-strong">Tentang Kami</Link></li>
                <li><Link href="/portfolio" className="hover:text-accent-strong">Portfolio</Link></li>
                <li><Link href="/artikel" className="hover:text-accent-strong">Artikel</Link></li>
                <li><Link href="/#faq" className="hover:text-accent-strong">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900">
                Kontak
              </h4>

              <ul className="mt-4 space-y-2 text-slate-600">
                <li>
                  <a
                    href={waLink("Halo Cost Guard, saya ingin bertanya.")}
                    className="hover:text-accent-strong"
                  >
                    WhatsApp: {siteConfig.whatsappDisplay}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-accent-strong">
                    {siteConfig.email}
                  </a>
                </li>
                <li>{siteConfig.address}</li>
              </ul>
            </div>

          </div>

          <div className="mt-12 border-t border-slate-300 pt-8 text-center text-slate-500">
            © 2026 {siteConfig.name}. All rights reserved.
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
