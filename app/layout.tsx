import type { Metadata } from "next";
import "./globals.css";
import ClientFloatingWhatsapp from "@/components/ClientFloatingWhatsapp";
import PageTransition from "@/components/PageTransition";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  title: {
    default: "Cost Guard | Cost Control Partner",
    template: "%s | Cost Guard",
  },
  description:
    "Cost Guard membantu kontraktor, owner, dan developer mengendalikan biaya proyek melalui RAB, audit BQ, schedule, dan cost control.",
  keywords: [
    "RAB",
    "audit BQ",
    "cost control",
    "schedule proyek",
    "kontrol biaya proyek",
  ],
  metadataBase: new URL("https://costguard.id"),
  openGraph: {
    title: "Cost Guard | Cost Control Partner",
    description:
      "Solusi praktis untuk menghitung RAB, audit BQ, dan mengendalikan biaya proyek secara terukur.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cost Guard | Cost Control Partner",
    description:
      "Bantu kontraktor dan developer mengontrol biaya proyek dengan sistem yang lebih akurat.",
  },
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
        <Analytics />
      </body>
    </html>
  );
}
