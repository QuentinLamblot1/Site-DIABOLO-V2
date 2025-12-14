import React, { useState } from 'react';
import { Layout, BarChart3, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

const WhyUs: React.FC = () => {
  // Gestion intelligente de l'image : on commence par .jpg, mais on essaiera les autres si besoin
  const [imgSrc, setImgSrc] = useState('videac-team.jpg');
  
  const handleImageError = () => {
    // Si videac-team.jpg ne marche pas, on essaie les variantes courantes automatiquement
    if (imgSrc === 'videac-team.jpg') {
      setImgSrc('videac-team.jpeg');
    } else if (imgSrc === 'videac-team.jpeg') {
      setImgSrc('videac-team.png');
    } else if (imgSrc === 'videac-team.png') {
      setImgSrc('videac-team.JPG'); // Cas majuscule
    }
    // Si rien ne marche après ça, l'image sera brisée, confirmant que le fichier est absent du dossier public
  };

  return (
    <section className="py-24 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          
          {/* Left Column: Copywriting */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-brand/5 border border-brand/10 rounded-full px-3 py-1 mb-6">
              <span className="flex h-1.5 w-1.5 rounded-full bg-brand"></span>
              <span className="text-xs font-bold text-brand uppercase tracking-wide">Notre Différence</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-6 leading-tight">
              Nous ne sommes pas <br/> une <span className="text-brand">agence vidéo</span>.
            </h2>
            
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Les agences vendent des jours-hommes et des livrables. <br/>
              <strong>Videac est un opérateur de canal.</strong> <br/>
              Nous construisons un actif marketing durable qui valorise votre marque et nourrit votre pipeline commercial.
            </p>

            <div className="space-y-6">
              
              {/* Point 1 - Interactive Card */}
              <div className="group flex items-start gap-5 p-4 -mx-4 rounded-2xl transition-all duration-300 hover:bg-slate-50 border border-transparent hover:border-slate-100">
                <div className="flex-shrink-0 h-14 w-14 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300 shadow-sm group-hover:shadow-blue-200">
                  <Layout className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-blue-600 transition-colors duration-300">ADN 100% SaaS B2B</h3>
                  <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700">
                    Nous ne faisons pas de clips musicaux. Nous connaissons les métriques qui comptent pour vous : MRR, Churn, LTV. Nos contenus sont calibrés pour la vente.
                  </p>
                </div>
              </div>

              {/* Point 2 - Interactive Card */}
              <div className="group flex items-start gap-5 p-4 -mx-4 rounded-2xl transition-all duration-300 hover:bg-slate-50 border border-transparent hover:border-slate-100">
                <div className="flex-shrink-0 h-14 w-14 bg-purple-50 rounded-2xl flex items-center justify-center border border-purple-100 group-hover:bg-purple-600 group-hover:border-purple-600 transition-all duration-300 shadow-sm group-hover:shadow-purple-200">
                  <ShieldCheck className="h-7 w-7 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-purple-600 transition-colors duration-300">L'Excellence Visuelle</h3>
                  <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700">
                    La crédibilité se joue en 3 secondes. Nous garantissons une qualité "Broadcast" (Image, Son, Lumière, Set Design) pour refléter le sérieux de votre solution.
                  </p>
                </div>
              </div>

               {/* Point 3 - Interactive Card */}
               <div className="group flex items-start gap-5 p-4 -mx-4 rounded-2xl transition-all duration-300 hover:bg-slate-50 border border-transparent hover:border-slate-100">
                <div className="flex-shrink-0 h-14 w-14 bg-emerald-50 rounded-2xl flex items-center justify-center border border-emerald-100 group-hover:bg-emerald-600 group-hover:border-emerald-600 transition-all duration-300 shadow-sm group-hover:shadow-emerald-200">
                  <BarChart3 className="h-7 w-7 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-emerald-600 transition-colors duration-300">Obsédés par le ROI</h3>
                  <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700">
                    Nous ne célébrons pas les vues, nous célébrons les leads. Chaque euro investi dans la production est traqué pour mesurer son impact sur votre pipeline.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Visual / Team Photo (Small Version) */}
          <div className="relative flex justify-center lg:justify-end py-10 lg:py-0">
            
            {/* Background Blob for depth */}
            <div className="absolute top-1/2 left-1/2 lg:left-2/3 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-slate-100 to-brand/5 rounded-full blur-3xl -z-10 opacity-70"></div>

            {/* Photo Container - Smaller "Snapshot" Style */}
            <div className="relative w-72 md:w-80 aspect-[4/5] bg-white p-2 rounded-2xl shadow-2xl border border-gray-100 rotate-3 hover:rotate-0 transition-transform duration-500 ease-out group">
              
              {/* Image Mask/Crop */}
              <div className="relative w-full h-full overflow-hidden rounded-xl bg-slate-100">
                <img 
                  src={imgSrc}
                  onError={handleImageError}
                  alt="L'équipe Videac" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay gradient for text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>

              {/* Floating Badge 1: Expertise */}
              <div className="absolute -bottom-5 -left-8 z-20 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl border border-gray-100 shadow-xl flex items-center gap-3 animate-bounce-slow">
                <div className="h-8 w-8 rounded-full bg-brand flex items-center justify-center text-white shrink-0">
                  <Zap className="h-4 w-4 fill-current" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 leading-none mb-1">Expertise</p>
                  <p className="text-xs font-bold text-dark whitespace-nowrap">Studio & Growth</p>
                </div>
              </div>

              {/* Floating Badge 2: Stats */}
              <div className="absolute -top-5 -right-6 z-20 bg-dark text-white px-4 py-3 rounded-xl border border-gray-700 shadow-xl">
                 <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Impact Pipeline</p>
                 <p className="text-xl font-bold">+145% <span className="text-[10px] font-normal text-green-400">/ an</span></p>
              </div>

            </div>

          </div>

        </div>

        <div className="flex flex-col items-center">
            <a 
              href="https://calendly.com/qlamblot/15min" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand rounded-lg hover:bg-brandDark transition-all shadow-lg hover:translate-y-[-2px]"
            >
              Echanger avec un expert
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <p className="mt-4 text-sm font-medium text-gray-500">
              Objectif : Voir si YouTube peut devenir un canal d’acquisition pour vous
            </p>
          </div>
      </div>
    </section>
  );
};

export default WhyUs;