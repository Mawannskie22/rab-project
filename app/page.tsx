import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Problems from "@/components/Problem";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Advantages from "@/components/Advantages";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Problems />
      <Services />
      <Portfolio />
      <Advantages />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}