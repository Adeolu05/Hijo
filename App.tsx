import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Specs from './components/Specs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';

export type Product = {
  id: number;
  name: string;
  image: string;
  category: string;
  description: string;
  details: {
    material: string;
    movement: string;
    resistance: string;
    diameter: string;
  };
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [view, setView] = useState<'home' | 'detail'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setView('detail');
    window.scrollTo(0, 0);
  };

  const handleNavigate = (sectionId: string) => {
    setView('home');
    // Allow React to render Home before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-midnight-900 text-white selection:bg-gold-500 selection:text-black overflow-x-hidden">
      <Navbar scrolled={scrolled} onNavigate={handleNavigate} />
      <main>
        {view === 'home' ? (
          <>
            <Hero onExplore={() => handleNavigate('collection')} />
            <Features />
            <Showcase onProductSelect={handleProductSelect} />
            <Specs />
            <Contact />
          </>
        ) : (
          <ProductDetail 
            product={selectedProduct} 
            onBack={() => handleNavigate('collection')} 
          />
        )}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;