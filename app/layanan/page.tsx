import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function LayananPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Services />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
