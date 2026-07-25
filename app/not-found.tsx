import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#090D16] px-6 text-center">
      <div className="rounded-full border border-[#00F5D4]/20 px-4 py-2 text-sm text-[#00F5D4]">
        404 — Halaman Tidak Ditemukan
      </div>
      <h1 className="mt-6 text-6xl font-bold text-white sm:text-7xl">
        Oops, halaman ini belum ada.
      </h1>
      <p className="mt-4 max-w-xl text-lg text-slate-400">
        Halaman yang Anda cari mungkin sudah dipindah atau belum tersedia.
        Kembali ke beranda untuk melihat layanan utama kami.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-xl bg-[#00F5D4] px-8 py-4 font-semibold text-black transition hover:scale-105"
        >
          Kembali ke Beranda
        </Link>
        <Link
          href="/kontak"
          className="rounded-xl border border-[#00F5D4]/20 px-8 py-4 font-semibold text-white transition hover:border-[#00F5D4]"
        >
          Hubungi Kami
        </Link>
      </div>
    </main>
  );
}
