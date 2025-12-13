import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Le problème avec YouTube pour les SaaS aujourd'hui
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              La plupart des entreprises voient YouTube comme un outil de branding vague ou une case à cocher. Elles publient sans stratégie d'acquisition, obtiennent des vues de vanité, et abandonnent faute de ROI.
            </p>
            
            <div className="space-y-6">
              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <div className="flex items-start">
                  <XCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-red-900">L'approche classique (Échec)</h3>
                    <ul className="mt-2 space-y-2 text-red-800/80">
                      <li>• Contenu "corporate" ennuyeux</li>
                      <li>• Pas de lien avec le funnel de vente</li>
                      <li>• Métriques de vanité (likes) vs Business</li>
                      <li>• Production interne coûteuse et lente</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-majorelle/5 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
               <div className="flex items-start">
                  <CheckCircle2 className="h-8 w-8 text-majorelle mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-dark">L'approche Diabolo</h3>
                    <p className="mt-2 text-gray-600">
                      Nous ne sommes pas une agence de création. Nous sommes votre <strong>opérateur de canal</strong>.
                    </p>
                    <div className="mt-6 space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="h-2 w-2 rounded-full bg-majorelle"></div>
                            <span className="text-dark font-medium">YouTube traité comme le SEO ou le Paid</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="h-2 w-2 rounded-full bg-majorelle"></div>
                            <span className="text-dark font-medium">Contenu conçu pour convertir</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="h-2 w-2 rounded-full bg-majorelle"></div>
                            <span className="text-dark font-medium">Système de production industrialisé</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="h-2 w-2 rounded-full bg-majorelle"></div>
                            <span className="text-dark font-medium">Tracking précis des leads générés</span>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Problem;