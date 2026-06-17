import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#090D16] px-6">
      <h1 className="text-8xl font-bold text-[#00F5D4]">404</h1>
      <p className="mt-4 text-xl text-slate-400">
        Halaman tidak ditemukan
      </p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-[#00F5D4] px-8 py-4 font-semibold text-black transition hover:scale-105"
      >
        Kembali ke Beranda
      </Link>
    </main>
  );
}
