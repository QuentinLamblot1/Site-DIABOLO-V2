import React from 'react';
import { XCircle, Trash2, TrendingDown, Ban, ArrowRight } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-dark relative overflow-hidden">
      {/* Background Ambience - Red Tint for Urgency */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand/5 via-transparent to-transparent opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Container widened to max-w-5xl to prevent unwanted wrapping on large screens */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-sm font-bold text-red-400 tracking-wide uppercase">Le constat est brutal</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Arrêtez de traiter YouTube comme <br/>
            <span className="text-red-500">un placard à balais.</span>
          </h2>
          
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-medium">
              La majorité des SaaS B2B n’investissent pas dans YouTube.<br className="hidden md:block" />
              Ils investissent dans de la vidéo… qu’ils uploadent sur YouTube.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Warehouse */}
          <div className="group bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-red-900/30 hover:border-red-500/50 transition-all duration-300 hover:bg-slate-800/60">
            <div className="flex justify-between items-start mb-6">
              <div className="h-12 w-12 bg-red-500/10 rounded-lg flex items-center justify-center border border-red-500/20 group-hover:bg-red-500/20 transition-colors">
                <Trash2 className="h-6 w-6 text-red-500" />
              </div>
              <XCircle className="h-6 w-6 text-red-600 opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Le "Vide-Grenier" à Webinars</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Vous confondez YouTube et Google Drive. Uploader des replays Zoom de 60min sans montage tue votre rétention. <strong className="text-red-400">L'algo vous déteste, vos prospects vous ignorent.</strong>
            </p>
          </div>

          {/* Card 2: Free Content Trap */}
          <div className="group bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-red-900/30 hover:border-red-500/50 transition-all duration-300 hover:bg-slate-800/60">
             <div className="flex justify-between items-start mb-6">
              <div className="h-12 w-12 bg-red-500/10 rounded-lg flex items-center justify-center border border-red-500/20 group-hover:bg-red-500/20 transition-colors">
                <Ban className="h-6 w-6 text-red-500" />
              </div>
              <XCircle className="h-6 w-6 text-red-600 opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Du Bénévolat, pas du Business</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Vous éduquez le marché gratuitement. Le prospect consomme, apprend, et va acheter chez le concurrent qui a un vrai funnel. <strong className="text-red-400">Vous chauffez les leads pour les autres.</strong>
            </p>
          </div>

          {/* Card 3: Blind Pilot */}
          <div className="group bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-red-900/30 hover:border-red-500/50 transition-all duration-300 hover:bg-slate-800/60">
             <div className="flex justify-between items-start mb-6">
              <div className="h-12 w-12 bg-red-500/10 rounded-lg flex items-center justify-center border border-red-500/20 group-hover:bg-red-500/20 transition-colors">
                <TrendingDown className="h-6 w-6 text-red-500" />
              </div>
              <XCircle className="h-6 w-6 text-red-600 opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Le Pilotage à l'Aveugle</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Sans tracking précis (Click-to-Lead), impossible de prouver votre ROI. Vous ne savez pas quelle vidéo convertit. <strong className="text-red-400">Sans data, impossible d'itérer et de scaler votre acquisition.</strong>
            </p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-10">
            Le problème n’est pas YouTube. <br />
            <span className="text-gray-500 mt-2 block">C’est l’absence de système.</span>
          </h3>
          
          <div className="flex flex-col items-center">
            <a 
              href="https://calendly.com/qlamblot/15min" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand rounded-lg hover:bg-brandDark transition-all shadow-lg shadow-red-900/20 hover:translate-y-[-2px]"
            >
              Réserver un Audit Gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <p className="mt-4 text-sm font-medium text-gray-500">
              Objectif : Voir si YouTube peut devenir un canal d’acquisition pour vous
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;