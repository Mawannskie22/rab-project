import type { Metadata } from "next";
import "./globals.css";

import FloatingWhatsapp from "@/components/FloatingWhatsapp";

export const metadata: Metadata = {
title: "RAB Project Control",
description:
"Hitung RAB, Audit BQ, dan Kontrol Biaya Proyek",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return ( <html lang="id"> <body>
{children} <FloatingWhatsapp /> </body> </html>
);
}
