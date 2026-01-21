import { HeroSection } from '../components/HeroSection';
import { ProductGrid } from '../components/ProductGrid';
import { Footer } from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <HeroSection />
      <ProductGrid />
      <Footer />
    </div>
  );
};

export default Home;