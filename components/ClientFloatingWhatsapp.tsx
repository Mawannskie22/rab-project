"use client";

import dynamic from "next/dynamic";

const FloatingWhatsapp = dynamic(
  () => import("./FloatingWhatsapp"),
  { ssr: false }
);

export default function ClientFloatingWhatsapp() {
  return <FloatingWhatsapp />;
}
