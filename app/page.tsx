import { Hero } from "@/components/sections/Hero";
import { PainSection } from "@/components/sections/PainSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Solutions } from "@/components/sections/Solutions";
import { FAQ } from "@/components/sections/FAQ";
import { Team } from "@/components/sections/Team";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <PainSection />
      <Solutions />
      <HowItWorks />
      <FAQ />
      <Team />
      <CTA />
    </>
  );
}
