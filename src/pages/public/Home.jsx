import { lazy, Suspense, useMemo } from "react";
import HeroSection from "../../components/home/HeroSection";
import CategoriesSection from "../../components/home/CategoriesSection";


const RTX5090Showcase = lazy(() => import("../../components/home/RTX5090Showcase"));
const ProductHighlights = lazy(() => import("../../components/home/ProductHighlights"));
const BrandStrip = lazy(() => import("../../components/home/BrandStrip"));
const TopBuildsSection = lazy(() => import("../../components/home/TopBuildsSection"));
const WhyNextRig = lazy(() => import("../../components/home/WhyNextRig"));
const HowItWorks = lazy(() => import("../../components/home/HowItWorks"));
const TestimonialsSection = lazy(() => import("../../components/home/TestimonialsSection"));
const FinalCTASection = lazy(() => import("../../components/home/FinalCTASection"));

import RevealOnScroll from "../../components/ui/RevealOnScroll";

const Home = () => {
  const isMobile = useMemo(() => window.innerWidth < 768, []);

  return (
    <div className="space-y-20">
      <HeroSection />

      {isMobile && (
        <>
          <CategoriesSection />
        </>
      )}

      {!isMobile && (
        <Suspense fallback={null}>
          <RevealOnScroll delay={0.05}>
            <RTX5090Showcase />
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <TopBuildsSection />
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <ProductHighlights />
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <CategoriesSection />
          </RevealOnScroll>

          <RevealOnScroll delay={0.35}>
            <BrandStrip />
          </RevealOnScroll>

          <RevealOnScroll delay={0.4}>
            <WhyNextRig />
          </RevealOnScroll>

          <RevealOnScroll delay={0.45}>
            <HowItWorks />
          </RevealOnScroll>

          <RevealOnScroll delay={0.5}>
            <TestimonialsSection />
          </RevealOnScroll>

          <RevealOnScroll delay={0.55}>
            <FinalCTASection />
          </RevealOnScroll>
        </Suspense>
      )}
    </div>
  );
};

export default Home;