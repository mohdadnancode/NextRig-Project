import HeroSection from '../components/HeroSection';
import ProductHighlights from '../components/ProductHighlights';
import CategoriesSection from '../components/CategoriesSection';
import BrandStrip from '../components/BrandStrip';
import RevealOnScroll from '../components/RevealOnScroll';

const Home = () => {
  return (
    <div className="space-y-20">

      <RevealOnScroll >
      <HeroSection />
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
      <ProductHighlights />
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
      <CategoriesSection />
      </RevealOnScroll>

      <RevealOnScroll delay={0.3}>
      <BrandStrip />
      </RevealOnScroll>
      
    </div>
  );
};

export default Home;