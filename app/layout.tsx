import type { Metadata } from "next";
import "./globals.css";
import ClientFloatingWhatsapp from "@/components/ClientFloatingWhatsapp";

export const metadata: Metadata = {
  title: "RAB Project Control",
  description: "Hitung RAB, Audit BQ, dan Kontrol Biaya Proyek",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        {children}<ClientFloatingWhatsapp />
      </body>
    </html>
  );
}
