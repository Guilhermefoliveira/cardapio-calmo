import { HeroSection } from '../components/HeroSection';
import { ProductGrid } from '../components/ProductGrid';
import { Footer } from '../components/Footer';
import { InstagramFeed } from '../components/InstagramFeed';
import { FloatingButton } from '../components/FloatingButton';
import { BackToTop } from '../components/BackToTop';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <main>
        <HeroSection />
        <ProductGrid />
        <InstagramFeed />
      </main>
      <Footer />
      <FloatingButton />
      <BackToTop />
    </div>
  );
};

export default Home;