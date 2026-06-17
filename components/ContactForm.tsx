"use client";

import { useState } from "react";
import { Reveal } from "./anim-wrapper";
export default function ContactForm() {
  const [nama, setNama] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [jenisProyek, setJenisProyek] = useState("");
  const [pesan, setPesan] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Halo RAB Project Control,

Nama: ${nama}
WhatsApp: ${whatsapp}
Jenis Proyek: ${jenisProyek}

Kebutuhan:
${pesan}`;

    const url = `https://wa.me/6287882828329?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="bg-[#090D16] py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            Konsultasikan Proyek Anda
          </h2>

          <p className="mt-4 text-slate-400">
            Kirim detail proyek dan kami akan membantu menentukan layanan yang sesuai.
          </p>
        </div>

        <Reveal>
        <form
          onSubmit={handleSubmit}
          className="mt-12 space-y-6 rounded-3xl border border-white/10 bg-[#1E293B]/50 p-8"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              placeholder="Nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="rounded-xl border border-white/10 bg-[#090D16] p-4 text-white outline-none"
            />

            <input
              type="text"
              placeholder="Nomor WhatsApp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="rounded-xl border border-white/10 bg-[#090D16] p-4 text-white outline-none"
            />
          </div>

          <input
            type="text"
            placeholder="Jenis Proyek"
            value={jenisProyek}
            onChange={(e) => setJenisProyek(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-[#090D16] p-4 text-white outline-none"
          />

          <textarea
            rows={5}
            placeholder="Jelaskan kebutuhan proyek Anda..."
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-[#090D16] p-4 text-white outline-none"
          />

          <button
            type="submit"
            className="rounded-xl bg-[#00F5D4] px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Kirim Konsultasi
          </button>
        </form>
        </Reveal>
      </div>
    </section>
  );
}