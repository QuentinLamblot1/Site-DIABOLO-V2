import React from 'react';
import { BrainCircuit, Clapperboard, LineChart, ArrowRight, Check, Users, Video, Settings, FileSearch, PenTool } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0F172A_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-dark mb-6 leading-tight">
            Votre canal, opéré de <span className="text-brand">A à Z</span>.
          </h2>
          <p className="text-xl text-gray-600 font-medium leading-relaxed">
            Nous agissons comme une extension de votre équipe Growth pour transformer YouTube en canal d'acquisition prédictible.
          </p>
        </div>

        {/* Timeline Connector (Desktop only) */}
        <div className="hidden md:block absolute left-0 right-0 top-[380px] h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent z-0"></div>

        {/* The 3 Bricks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative z-10">
          
          {/* Brick 1: Strategy */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
            <div className="mb-6 flex justify-between items-start relative">
              <div className="h-14 w-14 bg-slate-100 rounded-2xl flex items-center justify-center text-dark group-hover:bg-brand group-hover:text-white transition-colors duration-300 shadow-sm border border-slate-200 z-10">
                <BrainCircuit className="h-7 w-7" />
              </div>
              <span className="text-6xl font-black text-slate-100 absolute -right-2 -top-4 select-none group-hover:text-slate-50 transition-colors">01</span>
            </div>
            
            <h3 className="text-xl font-bold text-dark mb-3">Cadrage & Stratégie</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
              On ne filme rien avant d'avoir mappé votre funnel. Nous définissons une stratégie YouTube orientée <strong>acquisition</strong> (et non vues).
            </p>
            
            <div className="space-y-3 mb-8 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="bg-white p-1.5 rounded-md shadow-sm border border-gray-100"><FileSearch className="h-3.5 w-3.5 text-brand" /></div>
                Audit & Analyse concurrentielle
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="bg-white p-1.5 rounded-md shadow-sm border border-gray-100"><Settings className="h-3.5 w-3.5 text-brand" /></div>
                Mapping Funnel (TOF/MOF/BOF)
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="bg-white p-1.5 rounded-md shadow-sm border border-gray-100"><PenTool className="h-3.5 w-3.5 text-brand" /></div>
                Définition CTA & Lead Magnets
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-gray-50">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Livrable</span>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full border border-green-200">
                  Roadmap Stratégique
                </span>
              </div>
            </div>
          </div>

          {/* Brick 2: Production */}
          <div className="bg-white rounded-2xl p-8 border-2 border-brand/5 shadow-xl shadow-brand/5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-brand"></div>
            
            <div className="mb-6 flex justify-between items-start relative">
              <div className="h-14 w-14 bg-brand rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand/30 z-10">
                <Clapperboard className="h-7 w-7" />
              </div>
              <span className="text-6xl font-black text-slate-100 absolute -right-2 -top-4 select-none">02</span>
            </div>
            
            <h3 className="text-xl font-bold text-dark mb-3">Production & Activation</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
              Un modèle flexible. Nous gérons le <strong>Tournage et la Post-production</strong>, en autonomie complète ou en co-production avec vos équipes internes.
            </p>
            
             <div className="space-y-3 mb-8 bg-brand/5 p-4 rounded-xl border border-brand/10">
              <div className="flex items-center gap-3 text-sm text-gray-800 font-medium">
                <div className="bg-white p-1.5 rounded-md shadow-sm border border-gray-100"><Video className="h-3.5 w-3.5 text-brand" /></div>
                Tournage & Post-Production
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="bg-white p-1.5 rounded-md shadow-sm border border-gray-100"><Users className="h-3.5 w-3.5 text-gray-500" /></div>
                Option : Co-production équipes internes
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="bg-white p-1.5 rounded-md shadow-sm border border-gray-100"><Settings className="h-3.5 w-3.5 text-gray-500" /></div>
                Packaging YouTube (SEO, Thumbs)
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-gray-50">
               <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Livrable</span>
                <span className="bg-brand text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
                  Vidéos Publiées
                </span>
              </div>
            </div>
          </div>

          {/* Brick 3: Data */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
            <div className="mb-6 flex justify-between items-start relative">
              <div className="h-14 w-14 bg-slate-100 rounded-2xl flex items-center justify-center text-dark group-hover:bg-brand group-hover:text-white transition-colors duration-300 shadow-sm border border-slate-200 z-10">
                <LineChart className="h-7 w-7" />
              </div>
              <span className="text-6xl font-black text-slate-100 absolute -right-2 -top-4 select-none group-hover:text-slate-50 transition-colors">03</span>
            </div>
            
            <h3 className="text-xl font-bold text-dark mb-3">Conversion & Amélioration</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
              La vue est une vanité, le lead est une réalité. Nous connectons le canal à votre CRM et itérons selon la donnée business.
            </p>
            
             <div className="space-y-3 mb-8 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="bg-white p-1.5 rounded-md shadow-sm border border-gray-100"><Check className="h-3.5 w-3.5 text-brand" /></div>
                Connexion Landing Pages & Magnets
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="bg-white p-1.5 rounded-md shadow-sm border border-gray-100"><Check className="h-3.5 w-3.5 text-brand" /></div>
                Tracking UTM & Remontée CRM
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="bg-white p-1.5 rounded-md shadow-sm border border-gray-100"><Check className="h-3.5 w-3.5 text-brand" /></div>
                Reporting & Itération mensuelle
              </div>
            </div>

             <div className="mt-auto pt-6 border-t border-gray-50">
               <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Livrable</span>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full border border-green-200">
                  Dashboard & Pipeline
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Conclusion / Bridge to CTA */}
        <div className="text-center">
          <p className="text-lg text-gray-500 font-medium mb-8">
            YouTube n’est pas un projet ponctuel. C'est un actif qui prend de la valeur avec le temps.
          </p>
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

      </div>
    </section>
  );
};

export default Process;