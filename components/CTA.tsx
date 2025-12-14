import React from 'react';
import { ArrowRight, CheckCircle2, Search, BarChart, FileText } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-dark relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: The Pitch */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-700 rounded-full px-3 py-1 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-xs font-bold text-gray-300 uppercase tracking-wide">Audit Stratégique Offert</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Vérifions le potentiel de <br/> votre marché sur YouTube.
            </h2>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Ne lancez pas une production vidéo à l'aveugle. En 30 minutes, nous analysons la faisabilité technique et économique de ce canal pour votre SaaS.
            </p>

            {/* Value Bullets */}
            <div className="space-y-5 mb-10">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-6 w-6 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                    <Search className="h-3.5 w-3.5 text-brand" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-bold text-sm">Analyse de la demande & Concurrence</h4>
                  <p className="text-gray-500 text-sm mt-1">Vos prospects cherchent-ils déjà des solutions comme la vôtre sur YouTube ?</p>
                </div>
              </div>

              <div className="flex items-start">
                 <div className="flex-shrink-0 mt-1">
                  <div className="h-6 w-6 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                    <BarChart className="h-3.5 w-3.5 text-brand" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-bold text-sm">Diagnostic Funnel Actuel</h4>
                  <p className="text-gray-500 text-sm mt-1">Ce qui manque aujourd'hui dans votre écosystème pour transformer les vues en pipeline.</p>
                </div>
              </div>

              <div className="flex items-start">
                 <div className="flex-shrink-0 mt-1">
                  <div className="h-6 w-6 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                    <FileText className="h-3.5 w-3.5 text-brand" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-bold text-sm">Plan d'action & Vision ROI</h4>
                  <p className="text-gray-500 text-sm mt-1">Une roadmap claire : si le potentiel est là, comment on l'attaque.</p>
                </div>
              </div>
            </div>

            {/* CTA Block */}
            <div className="flex flex-col sm:items-start gap-4">
              <a 
                href="https://calendly.com/qlamblot/15min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand rounded-xl hover:bg-brandDark transition-all shadow-[0_0_20px_-5px_rgba(230,33,23,0.4)] hover:shadow-[0_0_25px_-5px_rgba(230,33,23,0.6)] w-full sm:w-auto overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  👉 Réserver un Audit Gratuit
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out"></div>
              </a>
              
              <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-gray-400" /> 30 minutes
                </span>
                <span className="h-1 w-1 rounded-full bg-gray-700"></span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-gray-400" /> Sans engagement
                </span>
                <span className="h-1 w-1 rounded-full bg-gray-700"></span>
                <span className="flex items-center gap-1.5">
                   Pas de pitch commercial
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Abstract Representation of the Audit */}
          <div className="relative hidden lg:block">
            {/* The Card */}
            <div className="relative z-10 bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 shadow-2xl">
              
              {/* Card Header */}
              <div className="flex justify-between items-center mb-8 border-b border-slate-700/50 pb-6">
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Dossier</div>
                  <div className="text-lg font-bold text-white">Audit d'Opportunité</div>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Analyse en cours
                </div>
              </div>

              {/* Mock Metrics */}
              <div className="space-y-6">
                
                {/* Metric 1 */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400 font-medium">Intention de recherche (Mots-clés)</span>
                    <span className="text-white font-bold">Élevée</span>
                  </div>
                  <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-brand w-[85%] rounded-full shadow-[0_0_10px_rgba(230,33,23,0.5)]"></div>
                  </div>
                </div>

                {/* Metric 2 */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400 font-medium">Saturation Concurrentielle</span>
                    <span className="text-white font-bold">Faible</span>
                  </div>
                  <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[25%] rounded-full"></div>
                  </div>
                </div>

                {/* Metric 3 */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400 font-medium">Potentiel Lead Gen</span>
                    <span className="text-white font-bold">Très Fort</span>
                  </div>
                  <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[92%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  </div>
                </div>

              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-6 border-t border-slate-700/50 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white border border-slate-600">
                  You
                </div>
                <div className="flex-1">
                  <div className="h-2 w-24 bg-slate-700 rounded mb-2"></div>
                  <div className="h-2 w-16 bg-slate-700/50 rounded"></div>
                </div>
                <div className="text-xs text-gray-500 font-mono">ID: #SAAS-AUDIT-01</div>
              </div>

            </div>

            {/* Decorative Elements behind card */}
            <div className="absolute -top-6 -right-6 h-full w-full border border-slate-700 rounded-2xl z-0 opacity-50"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;