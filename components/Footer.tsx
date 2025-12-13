import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-2xl font-bold tracking-tight text-majorelle">
            diabolo<span className="text-dark">.</span>
          </span>
          <p className="text-sm text-gray-500 mt-2">
            YouTube Acquisition pour SaaS.
          </p>
        </div>
        
        <div className="flex space-x-8 text-sm text-gray-600">
          <a href="#" className="hover:text-majorelle transition-colors">Mentions Légales</a>
          <a href="#" className="hover:text-majorelle transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-majorelle transition-colors">YouTube</a>
        </div>
        
        <div className="mt-8 md:mt-0 text-sm text-gray-400">
          © {new Date().getFullYear()} Diabolo. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;