import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-base px-6 text-center">
      <div className="rounded-full border border-accent-strong/40 px-4 py-2 text-sm text-accent-strong">
        404 — Halaman Tidak Ditemukan
      </div>
      <h1 className="mt-6 text-6xl font-bold text-slate-900 sm:text-7xl">
        Oops, halaman ini belum ada.
      </h1>
      <p className="mt-4 max-w-xl text-lg text-slate-600">
        Halaman yang Anda cari mungkin sudah dipindah atau belum tersedia.
        Kembali ke beranda untuk melihat layanan utama kami.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-xl bg-accent px-8 py-4 font-semibold text-black transition hover:scale-105"
        >
          Kembali ke Beranda
        </Link>
        <Link
          href="/kontak"
          className="rounded-xl border border-accent-strong/40 px-8 py-4 font-semibold text-slate-900 transition hover:border-accent-strong"
        >
          Hubungi Kami
        </Link>
      </div>
    </main>
  );
}
