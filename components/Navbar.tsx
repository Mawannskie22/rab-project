"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { waLink } from "@/data/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-300 bg-base/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/logoRAB.jpg"
            alt="Logo Cost Guard"
            width={60}
            height={60}
            priority
            className="rounded-xl"
          />
          <div>
            <h1 className="font-bold text-slate-900">Cost Guard</h1>
            <p className="text-xs text-slate-600">Cost Control Partner</p>
          </div>
        </Link>

        <nav className="hidden gap-8 md:flex">
          <Link href="/#layanan" className="text-slate-600 hover:text-accent-strong">
            Layanan
          </Link>
          <Link href="/#harga" className="text-slate-600 hover:text-accent-strong">
            Harga
          </Link>
          <Link href="/#faq" className="text-slate-600 hover:text-accent-strong">
            FAQ
          </Link>
          <Link href="/#portfolio" className="text-slate-600 hover:text-accent-strong">
            Portfolio
          </Link>
          <Link href="/kontak" className="text-slate-600 hover:text-accent-strong">
            Kontak
          </Link>
        </nav>

        <a
          href={waLink("Halo Cost Guard, saya ingin konsultasi biaya proyek.")}
          className="hidden rounded-xl bg-accent px-5 py-3 font-semibold text-black md:block"
        >
          Konsultasi
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-900 md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-300 bg-base md:hidden">
          <nav className="flex flex-col p-6">
            <Link href="/#layanan" className="py-3 text-slate-600">
              Layanan
            </Link>
            <Link href="/#harga" className="py-3 text-slate-600">
              Harga
            </Link>
            <Link href="/#faq" className="py-3 text-slate-600">
              FAQ
            </Link>
            <Link href="/#portfolio" className="py-3 text-slate-600">
              Portfolio
            </Link>
            <Link href="/kontak" className="py-3 text-slate-600">
              Kontak
            </Link>
            <a
              href={waLink("Halo Cost Guard, saya ingin konsultasi biaya proyek.")}
              className="mt-4 rounded-xl bg-accent px-5 py-3 text-center font-semibold text-black"
            >
              Konsultasi
            </a>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
