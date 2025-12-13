import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Pillars from './components/Pillars';
import Process from './components/Process';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Pillars />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;