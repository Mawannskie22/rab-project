import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import Advantages from "@/components/Advantages";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

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
