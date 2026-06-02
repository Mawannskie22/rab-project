import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function HargaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
