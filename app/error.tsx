"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  void error;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-base px-6">
      <h1 className="text-4xl font-bold text-red-600">
        Terjadi Kesalahan
      </h1>
      <p className="mt-4 text-slate-600">
        Silakan coba lagi atau hubungi kami jika masalah berlanjut.
      </p>
      <button
        onClick={reset}
        className="mt-8 rounded-xl bg-accent px-8 py-4 font-semibold text-black transition hover:scale-105"
      >
        Coba Lagi
      </button>
    </main>
  );
}
