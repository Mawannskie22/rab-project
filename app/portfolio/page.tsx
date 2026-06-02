import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Portfolio />
      </main>

      <Footer />
    </>
  );
}