import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold tracking-tight text-brand">
              videac<span className="text-dark">.</span>
            </a>
          </div>
          
          <div className="flex items-center">
            <a 
              href="https://calendly.com/qlamblot/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-dark text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-all hover:translate-y-[-1px] shadow-md"
            >
              Audit Gratuit
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;