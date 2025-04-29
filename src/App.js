import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import Testimonials from './components/Testimonials';
import Integrations from './components/Integrations';
import CTASection from './components/CTASection';
import UseCasesSection from './components/UseCasesSection';
import MobilePromoSection from './components/MobilePromoSection';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800 bg-white overflow-x-hidden">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main>
        <Hero />
        <Features />
        <Dashboard />
        <Testimonials />
        <Integrations />
        <CTASection/>
        <UseCasesSection/>
        <MobilePromoSection/>
       
      </main>
      
    </div>
  );
};

export default App;