import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#problem" className="text-sm font-medium text-gray-600 hover:text-brand transition-colors">Pourquoi YouTube</a>
            <a href="#method" className="text-sm font-medium text-gray-600 hover:text-brand transition-colors">Notre Méthode</a>
            <a href="#process" className="text-sm font-medium text-gray-600 hover:text-brand transition-colors">Process</a>
            <a 
              href="#contact" 
              className="px-5 py-2.5 bg-dark text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-all hover:translate-y-[-1px]"
            >
              Audit Gratuit
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-brand"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-4 flex flex-col space-y-4">
            <a href="#problem" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-gray-600">Pourquoi YouTube</a>
            <a href="#method" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-gray-600">Notre Méthode</a>
            <a href="#process" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-gray-600">Process</a>
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-5 py-3 bg-brand text-white font-semibold rounded-lg"
            >
              Audit Gratuit
            </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;