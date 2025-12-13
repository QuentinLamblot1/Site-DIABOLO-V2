import React from 'react';
import { Mail, Calendar } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-majorelle/5 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-majorelle/5 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6 tracking-tight">
          Prêt à activer votre nouveau <br/> canal d'acquisition ?
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Arrêtez de poster du contenu au hasard. Construisons ensemble une stratégie YouTube qui remplit votre pipeline commercial.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a 
            href="https://calendly.com/qlamblot/15min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-majorelle rounded-xl hover:bg-majorelleDark transition-all w-full sm:w-auto shadow-lg shadow-majorelle/30 hover:translate-y-[-2px]"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Réserver un appel découverte
          </a>
          <a 
            href="mailto:qlamblot@gmail.com"
            className="flex items-center justify-center px-8 py-4 text-lg font-bold text-dark bg-white border-2 border-gray-200 rounded-xl hover:border-majorelle hover:text-majorelle transition-all w-full sm:w-auto hover:bg-gray-50"
          >
            <Mail className="mr-2 h-5 w-5" />
            Nous contacter par email
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          Idéal pour les SaaS Mass Market B2B • Réponse sous 24h
        </p>
      </div>
    </section>
  );
};

export default CTA;