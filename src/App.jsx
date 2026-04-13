import { CtaFooter } from "./components/CtaFooter";
import { FeaturesChess } from "./components/FeaturesChess";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { StartSection } from "./components/StartSection";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";

export default function App() {
  return (
    <div className="bg-background text-foreground">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div className="bg-background">
          <StartSection />
          <FeaturesChess />
          <FeaturesGrid />
          <Stats />
          <Testimonials />
          <CtaFooter />
        </div>
      </div>
    </div>
  );
}
