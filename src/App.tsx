import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import AboutSection from './components/AboutSection';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Montserrat:wght@500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <div className="bg-gradient-to-r from-gray-dark to-gray relative overflow-hidden">
        <Navbar />
        <HeroSection />
      </div>
      <FeaturesSection />
      <HowItWorksSection />
      <AboutSection />
      <CTABanner />
      <Footer />
    </div>
  );
}

export default App;
