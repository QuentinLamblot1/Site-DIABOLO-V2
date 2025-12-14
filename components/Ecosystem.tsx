import React from 'react';
import { ArrowDown, FileText, CheckCircle2, Play, Users, Lightbulb, Target, ArrowRight, Video, Download, MonitorPlay } from 'lucide-react';

const Ecosystem: React.FC = () => {
  return (
    <section id="method" className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="bg-brand/10 text-brand border border-brand/20 px-4 py-1.5 rounded-full font-bold tracking-wide uppercase text-xs mb-6 inline-block">
            Notre Solution
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark mb-6 leading-tight">
            Du contenu isolé <span className="text-gray-300 mx-2">→</span> <span className="text-brand">Un Système</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto">
            Un écosystème conçu pour faire avancer vos prospects vers la décision d'achat : les vidéos les guident d'une étape à l'autre, les ressources capturent leurs contacts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left Column: Funnel Cards */}
          <div className="space-y-6">
            
            {/* Step 1: TOFU */}
            <div className="relative bg-white rounded-xl p-6 border-l-4 border-yellow-400 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow group">
              <div className="absolute top-6 right-6 text-yellow-500 opacity-20 group-hover:opacity-40 transition-opacity">
                <Lightbulb className="h-12 w-12" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-black px-2 py-1 rounded uppercase tracking-wider">Top of Funnel</span>
                <span className="text-sm font-bold text-gray-400 tracking-wide uppercase">• Attirer</span>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Orienté Problème</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed pr-8">
                Contenus larges (SEO) pour capter l'attention. L'objectif est d'initier le parcours.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                  <Video className="h-3 w-3" />
                  Format : Vidéos pédagogiques
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-dark bg-yellow-50 p-2 rounded border border-yellow-100 w-fit">
                  <ArrowRight className="h-3 w-3 text-yellow-600" />
                  <span>CTA Interne : Redirection vers vidéo MOFU</span>
                </div>
              </div>
            </div>

            {/* Step 2: MOFU */}
            <div className="relative bg-white rounded-xl p-6 border-l-4 border-orange-500 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow group">
              <div className="absolute top-6 right-6 text-orange-500 opacity-20 group-hover:opacity-40 transition-opacity">
                <Target className="h-12 w-12" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-orange-100 text-orange-800 text-xs font-black px-2 py-1 rounded uppercase tracking-wider">Middle of Funnel</span>
                <span className="text-sm font-bold text-gray-400 tracking-wide uppercase">• Considérer</span>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Orienté Solution</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed pr-8">
                On explique votre solution. Le prospect commence à évaluer et à comprendre votre produit.
              </p>
              
              <div className="space-y-3">
                 <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                  <Video className="h-3 w-3" />
                  Format : Vidéos explicatives, démos, motion design
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-dark bg-orange-50 p-2 rounded border border-orange-100">
                    <Download className="h-3 w-3 text-orange-500" />
                    <span>CTA Externe : Livre blanc, Webinars, Free trial</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-dark bg-gray-50 p-2 rounded border border-gray-200">
                    <ArrowRight className="h-3 w-3 text-gray-500" />
                    <span>CTA Interne : Vers vidéo BOFU</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: BOFU */}
            <div className="relative bg-white rounded-xl p-6 border-l-4 border-brand shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow group">
              <div className="absolute top-6 right-6 text-brand opacity-10 group-hover:opacity-20 transition-opacity">
                <Users className="h-12 w-12" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-red-100 text-brand text-xs font-black px-2 py-1 rounded uppercase tracking-wider">Bottom of Funnel</span>
                <span className="text-sm font-bold text-gray-400 tracking-wide uppercase">• Rassurer</span>
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Orienté Preuve Sociale</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed pr-8">
                Témoignages et résultats chiffrés. On lève les derniers freins à l'achat.
              </p>
              
              <div className="space-y-3">
                 <div className="flex items-center gap-2 text-xs font-medium text-gray-500">
                  <Video className="h-3 w-3" />
                  Format : Témoignage client, Etude de cas, vidéo comparative
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-white bg-brand p-2 rounded shadow-sm">
                    <CheckCircle2 className="h-3 w-3" />
                    <span>CTA Externe : Webinars, Free trial, Appel de Demo</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual System Diagram */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-gray-200 shadow-inner relative overflow-hidden min-h-[600px] flex flex-col justify-center">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="relative z-10 flex flex-col items-center w-full max-w-sm mx-auto">
              
              {/* Box 1: YouTube TOFU */}
              <div className="w-full bg-white p-5 rounded-xl shadow-lg shadow-yellow-500/5 border border-yellow-200 relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-red-600 rounded-lg flex items-center justify-center shadow-sm">
                      <Play className="h-4 w-4 text-white fill-current" />
                    </div>
                    <div>
                        <span className="block text-[10px] uppercase font-bold text-gray-400">Étape 1</span>
                        <span className="text-sm font-bold text-gray-800">Vidéo Pédagogique</span>
                    </div>
                  </div>
                </div>
                {/* Internal CTA Visual */}
                <div className="bg-gray-50 rounded border border-dashed border-gray-300 p-2 text-center mt-2">
                    <span className="text-[10px] font-bold text-gray-500 flex items-center justify-center gap-1">
                        CTA : "Voir la solution" <ArrowDown className="h-3 w-3" />
                    </span>
                </div>
              </div>

              {/* Connector Arrow */}
              <div className="h-8 w-0.5 bg-gray-300 my-1"></div>

              {/* Box 2: MOFU + Asset */}
              <div className="w-full bg-white p-5 rounded-xl shadow-lg shadow-orange-500/5 border border-orange-200 relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 shadow-sm">
                      <Target className="h-4 w-4" />
                    </div>
                     <div>
                        <span className="block text-[10px] uppercase font-bold text-gray-400">Étape 2</span>
                        <span className="text-sm font-bold text-gray-800">Vidéo Explicative</span>
                    </div>
                  </div>
                </div>
                
                {/* External Asset */}
                <div className="mb-2 bg-orange-50 border border-orange-200 p-2 rounded-lg flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2">
                    <FileText className="h-3 w-3 text-orange-600" />
                    <span className="text-[10px] font-bold text-orange-800">Livre Blanc / Trial</span>
                  </div>
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></div>
                </div>

                 {/* Internal CTA Visual */}
                 <div className="bg-gray-50 rounded border border-dashed border-gray-300 p-2 text-center mt-1">
                    <span className="text-[10px] font-bold text-gray-500 flex items-center justify-center gap-1">
                        CTA : "Voir les résultats" <ArrowDown className="h-3 w-3" />
                    </span>
                </div>
              </div>

              {/* Connector Arrow */}
              <div className="h-8 w-0.5 bg-gray-300 my-1"></div>

              {/* Box 3: BOFU / Conversion */}
              <div className="w-full bg-white p-5 rounded-xl shadow-lg shadow-brand/10 border border-brand/30 relative z-10 ring-1 ring-brand/10">
                <div className="flex items-center justify-between mb-3">
                   <div className="flex items-center gap-2">
                    <div className="h-8 w-8 bg-brand rounded-lg flex items-center justify-center text-white shadow-sm">
                      <Users className="h-4 w-4" />
                    </div>
                    <div>
                        <span className="block text-[10px] uppercase font-bold text-brand">Étape 3</span>
                        <span className="text-sm font-bold text-gray-800">Témoignage Client</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-brand text-white text-xs font-bold py-3 rounded-lg shadow-md hover:bg-brandDark transition-colors flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.98]">
                  <MonitorPlay className="h-4 w-4" />
                  DEMO / WEBINAR
                </button>
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
              Réserver un Audit Gratuit
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

export default Ecosystem;