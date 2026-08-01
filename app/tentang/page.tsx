import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import Advantages from "@/components/Advantages";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tentang Kami — Partner Kontrol Biaya Proyek",
  description:
    "Cost Guard membantu kontraktor, owner, developer, dan konsultan mengendalikan biaya, cashflow, dan schedule proyek agar lebih terukur, efisien, dan minim risiko kerugian.",
  alternates: {
    canonical: "/tentang",
  },
};

export default function TentangPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Stats />
        <Advantages />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
