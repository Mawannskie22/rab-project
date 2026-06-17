"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#090D16]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/logoRAB.jpeg"
            alt="RAB Project Control"
            width={60}
            height={60}
            priority
            className="rounded-xl"
          />
          <div>
            <h1 className="font-bold text-white">RAB Project Control</h1>
            <p className="text-xs text-slate-400">Cost Control Partner</p>
          </div>
        </Link>

        <nav className="hidden gap-8 md:flex">
          <a href="#layanan" className="text-slate-300 hover:text-[#00F5D4]">
            Layanan
          </a>
          <a href="#harga" className="text-slate-300 hover:text-[#00F5D4]">
            Harga
          </a>
          <a href="#faq" className="text-slate-300 hover:text-[#00F5D4]">
            FAQ
          </a>
          <Link href="/portfolio" className="text-slate-300 hover:text-[#00F5D4]">
            Portfolio
          </Link>
          <Link href="/kontak" className="text-slate-300 hover:text-[#00F5D4]">
            Kontak
          </Link>
        </nav>

        <a
          href="https://wa.me/6287882828329"
          className="hidden rounded-xl bg-[#00F5D4] px-5 py-3 font-semibold text-black md:block"
        >
          Konsultasi
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#090D16] md:hidden">
          <nav className="flex flex-col p-6">
            <a href="#layanan" className="py-3 text-slate-300">
              Layanan
            </a>
            <a href="#harga" className="py-3 text-slate-300">
              Harga
            </a>
            <a href="#faq" className="py-3 text-slate-300">
              FAQ
            </a>
            <Link href="/portfolio" className="py-3 text-slate-300">
              Portfolio
            </Link>
            <Link href="/kontak" className="py-3 text-slate-300">
              Kontak
            </Link>
            <a
              href="https://wa.me/6287882828329"
              className="mt-4 rounded-xl bg-[#00F5D4] px-5 py-3 text-center font-semibold text-black"
            >
              Konsultasi
            </a>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
