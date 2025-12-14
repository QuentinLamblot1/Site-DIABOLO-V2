import React from 'react';
import { ArrowDown } from 'lucide-react';

const Ecosystem: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enlarge header container and text sizes */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-brand font-bold tracking-wider uppercase text-sm">Notre Stratégie</span>
          <h2 className="text-4xl md:text-6xl font-bold text-dark mt-4 mb-6 leading-tight">
            L'écosystème en entonnoir
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
            Nous ne créons pas de vidéos isolées. Nous déployons une architecture de contenu complète (TOFU, MOFU, BOFU) pour guider le prospect de la découverte à la signature.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Explanations */}
          <div className="space-y-12">
            
            {/* TOFU */}
            <div className="relative pl-8 border-l-4 border-yellow-400">
              <div className="absolute -left-3 top-0 h-6 w-6 bg-yellow-400 rounded-full border-4 border-white"></div>
              <h3 className="text-2xl font-bold text-dark mb-2 flex items-center">
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded text-sm mr-3 font-extrabold">TOFU</span>
                Attirer & Éduquer
              </h3>
              <p className="text-gray-600 mb-2">
                <strong>Objectif :</strong> Capter un maximum de trafic qualifié via le SEO YouTube.
              </p>
              <p className="text-gray-500 text-sm">
                Des contenus pédagogiques larges qui répondent aux problèmes que vos prospects cherchent activement.
              </p>
            </div>

            {/* MOFU */}
            <div className="relative pl-8 border-l-4 border-orange-500">
              <div className="absolute -left-3 top-0 h-6 w-6 bg-orange-500 rounded-full border-4 border-white"></div>
              <h3 className="text-2xl font-bold text-dark mb-2 flex items-center">
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded text-sm mr-3 font-extrabold">MOFU</span>
                Rassurer & Crédibiliser
              </h3>
              <p className="text-gray-600 mb-2">
                <strong>Objectif :</strong> Créer de la confiance et engager la relation.
              </p>
              <p className="text-gray-500 text-sm">
                Des vidéos plus techniques, des comparatifs et des études de cas pour prouver votre expertise.
              </p>
            </div>

            {/* BOFU */}
            <div className="relative pl-8 border-l-4 border-brand">
              <div className="absolute -left-3 top-0 h-6 w-6 bg-brand rounded-full border-4 border-white"></div>
              <h3 className="text-2xl font-bold text-dark mb-2 flex items-center">
                <span className="bg-red-100 text-brand px-3 py-1 rounded text-sm mr-3 font-extrabold">BOFU</span>
                Convertir
              </h3>
              <p className="text-gray-600 mb-2">
                <strong>Objectif :</strong> Récupérer le Lead.
              </p>
              <p className="text-gray-500 text-sm">
                Chaque contenu redirige vers des <strong>Lead Magnets</strong> (Audits, Templates, Analyse) pour transformer la vue en email.
              </p>
            </div>

          </div>

          {/* Right Column: Visual Funnel Diagram */}
          <div className="relative bg-slate-50 rounded-3xl p-8 border border-gray-100 flex justify-center items-center shadow-inner">
            
            {/* Big Arrow Indicator */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 h-3/4 w-2 bg-gradient-to-b from-yellow-300 via-orange-400 to-brand rounded-full opacity-30 lg:block hidden"></div>
            <ArrowDown className="absolute left-[9px] bottom-12 text-brand opacity-30 h-8 w-8 lg:block hidden" />

            <div className="flex flex-col items-center space-y-4 w-full max-w-md">
              
              {/* TOFU Layer */}
              <div className="w-full">
                 <div className="flex justify-between items-end gap-2 mb-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="h-16 w-full bg-yellow-400 rounded-md shadow-sm border-b-4 border-yellow-500 hover:translate-y-1 transition-transform cursor-default" title="Vidéo Attract"></div>
                    ))}
                 </div>
                 <div className="text-center text-xs font-bold text-yellow-600 uppercase tracking-widest mb-4">Découverte</div>
              </div>

              {/* Connector Lines */}
              <div className="w-full flex justify-around px-8">
                 <div className="h-8 w-px bg-gray-300"></div>
                 <div className="h-8 w-px bg-gray-300"></div>
                 <div className="h-8 w-px bg-gray-300"></div>
              </div>

              {/* MOFU Layer */}
              <div className="w-3/4">
                 <div className="flex justify-center items-end gap-2 mb-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-20 w-full bg-orange-500 rounded-md shadow-sm border-b-4 border-orange-600 hover:translate-y-1 transition-transform cursor-default" title="Vidéo Nurturing"></div>
                    ))}
                 </div>
                 <div className="text-center text-xs font-bold text-orange-600 uppercase tracking-widest mb-4">Considération</div>
              </div>

              {/* Connector Lines + Lead Magnets */}
              <div className="w-full flex flex-col items-center">
                 <div className="h-8 w-px bg-gray-300 mb-2"></div>
                 <div className="bg-white border border-gray-200 text-gray-600 text-[10px] font-bold px-3 py-1 rounded-full shadow-sm mb-2">
                    LEAD MAGNETS
                 </div>
                 <div className="h-4 w-px bg-gray-300"></div>
              </div>

              {/* BOFU Layer */}
              <div className="w-1/2">
                 <div className="flex justify-center items-end gap-2 mb-2">
                    {[1, 2].map((i) => (
                      <div key={i} className="h-24 w-full bg-brand rounded-md shadow-lg shadow-red-200 border-b-4 border-brandDark hover:translate-y-1 transition-transform cursor-default" title="Vidéo Conversion"></div>
                    ))}
                 </div>
                 <div className="text-center text-xs font-bold text-brand uppercase tracking-widest">Conversion</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Ecosystem;