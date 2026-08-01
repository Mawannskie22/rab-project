"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Reveal } from "./anim-wrapper";
import { waLink } from "@/data/site";

const schema = z.object({
  nama: z.string().min(2, "Nama minimal 2 karakter"),
  whatsapp: z
    .string()
    .min(8, "Nomor WhatsApp minimal 8 digit")
    .regex(/^[0-9+\-()\s]+$/, "Format nomor tidak valid"),
  jenisProyek: z.string().optional(),
  pesan: z.string().min(10, "Jelaskan kebutuhan minimal 10 karakter"),
});

type FormValues = z.infer<typeof schema>;

const inputClass =
  "w-full rounded-xl border border-slate-300 bg-base p-4 text-slate-900 outline-none transition focus:border-accent-strong";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    const text = `Halo Cost Guard,

Nama: ${data.nama}
WhatsApp: ${data.whatsapp}
Jenis Proyek: ${data.jenisProyek || "-"}

Kebutuhan:
${data.pesan}`;

    window.open(waLink(text), "_blank");
    setStatus("success");
    reset();
  };

  return (
    <section className="bg-base py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Konsultasikan Proyek Anda
          </h2>

          <p className="mt-4 text-slate-600">
            Kirim detail proyek dan kami akan membantu menentukan layanan yang sesuai.
          </p>
        </div>

        <Reveal>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="mt-12 space-y-6 rounded-3xl border border-slate-300 bg-surface/50 p-8"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <input
                  type="text"
                  placeholder="Nama"
                  aria-invalid={!!errors.nama}
                  {...register("nama")}
                  className={inputClass}
                />
                {errors.nama && (
                  <p className="mt-2 text-sm text-red-600">{errors.nama.message}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Nomor WhatsApp"
                  aria-invalid={!!errors.whatsapp}
                  {...register("whatsapp")}
                  className={inputClass}
                />
                {errors.whatsapp && (
                  <p className="mt-2 text-sm text-red-600">{errors.whatsapp.message}</p>
                )}
              </div>
            </div>

            <input
              type="text"
              placeholder="Jenis Proyek"
              {...register("jenisProyek")}
              className={inputClass}
            />

            <div>
              <textarea
                rows={5}
                placeholder="Jelaskan kebutuhan proyek Anda..."
                aria-invalid={!!errors.pesan}
                {...register("pesan")}
                className={inputClass}
              />
              {errors.pesan && (
                <p className="mt-2 text-sm text-red-600">{errors.pesan.message}</p>
              )}
            </div>

            {status === "success" && (
              <p className="rounded-xl border border-accent-strong/30 bg-accent/10 p-3 text-sm text-accent-strong">
                Terima kasih, Anda akan diarahkan ke WhatsApp kami.
              </p>
            )}

            <button
              type="submit"
              className="rounded-xl bg-accent px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Kirim Konsultasi
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
