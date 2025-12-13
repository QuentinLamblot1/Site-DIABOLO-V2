import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-slate-50 opacity-50 transform skew-x-12 translate-x-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-brand/10 rounded-full px-4 py-1.5 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-brand"></span>
            <span className="text-sm font-medium text-brand tracking-wide uppercase">Pour les SaaS B2B Mass Market</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-dark tracking-tight leading-[1.1] mb-8">
            YouTube n'est pas du contenu. <br className="hidden lg:block"/>
            C'est votre prochain <span className="text-brand">canal d'acquisition</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
            Nous transformons YouTube en une machine à leads qualifiés et récurrents. 
            De la stratégie à l'analyse de la data, nous opérons le canal pour vous.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand rounded-lg hover:bg-brandDark transition-all shadow-lg shadow-brand/25 hover:translate-y-[-2px]"
            >
              Parler à un expert
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#method" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-dark bg-white border-2 border-gray-100 rounded-lg hover:border-brand/30 hover:bg-gray-50 transition-all"
            >
              <PlayCircle className="mr-2 h-5 w-5 text-gray-400" />
              Voir notre approche
            </a>
          </div>
          
          <div className="mt-16 flex items-center space-x-8 text-sm text-gray-400 font-medium">
            <span>Orienté Performance</span>
            <span className="h-1 w-1 rounded-full bg-gray-300"></span>
            <span>Data-Driven</span>
            <span className="h-1 w-1 rounded-full bg-gray-300"></span>
            <span>Scalable</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;