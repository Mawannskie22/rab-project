import type { Metadata } from "next";
import "./globals.css";
import ClientFloatingWhatsapp from "@/components/ClientFloatingWhatsapp";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Cost Guard",
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
        <PageTransition>{children}</PageTransition>
        <ClientFloatingWhatsapp />
      </body>
    </html>
  );
}
