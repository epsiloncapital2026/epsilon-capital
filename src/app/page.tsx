import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Sectors } from "@/components/Sectors";
import { Approach } from "@/components/Approach";
import { ValueProps } from "@/components/ValueProps";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Sectors />
        <Approach />
        <ValueProps />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
