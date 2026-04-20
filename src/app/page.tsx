import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Proof } from "@/components/Proof";
import { Approach } from "@/components/Approach";
import { Engagements } from "@/components/Engagements";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Proof />
      <Approach />
      <About />
      <Engagements />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
