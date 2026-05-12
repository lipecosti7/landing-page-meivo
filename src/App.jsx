import { ReactLenis } from "lenis/react";
import { BenefitsSection } from "./components/BenefitsSection";
import { CtaFooter } from "./components/CtaFooter";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { StartSection } from "./components/StartSection";
import { Stats } from "./components/Stats";
import { TaxCalculator } from "./components/TaxCalculator";

export default function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2 }}>
      <div className="bg-background text-foreground">
        <Navbar />
        <Hero />
        <main className="bg-background">
          <StartSection />
          <BenefitsSection />
          <TaxCalculator />
          <Stats />
          <CtaFooter />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}
