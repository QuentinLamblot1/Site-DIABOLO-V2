import React from 'react';
import { X, Check } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-dark relative overflow-hidden">
      {/* Background noise/grain could be added here */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand/5 blur-3xl rounded-full transform translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Pourquoi vos vidéos <br/> <span className="text-brand">ne convertissent pas</span> ?
          </h2>
          <p className="text-lg text-gray-400">
            YouTube est le deuxième moteur de recherche au monde. Pourtant, la plupart des SaaS l'utilisent comme une simple vitrine d'archivage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* The Old Way */}
          <div className="group relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-red-900/50 transition-all duration-300">
             <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="p-8">
               <div className="flex items-center justify-between mb-8">
                 <h3 className="text-2xl font-bold text-gray-200">L'approche Classique</h3>
                 <div className="h-10 w-10 rounded-full bg-red-500/10 flex items-center justify-center">
                    <X className="h-6 w-6 text-red-500" />
                 </div>
               </div>
               
               <div className="space-y-4 mb-8">
                 <div className="flex items-start text-gray-400">
                   <div className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-500/50 flex-shrink-0"></div>
                   <p>Contenu "Corporate" ennuyeux que personne ne cherche.</p>
                 </div>
                 <div className="flex items-start text-gray-400">
                    <div className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-500/50 flex-shrink-0"></div>
                   <p>Métriques de vanité (Vues, Likes) sans impact revenu.</p>
                 </div>
                 <div className="flex items-start text-gray-400">
                    <div className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-500/50 flex-shrink-0"></div>
                   <p>Production sporadique et coûteuse en interne.</p>
                 </div>
               </div>

               <div className="h-48 w-full rounded-xl overflow-hidden relative opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=1000" 
                    alt="Graphique en baisse" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gray-900/60 flex items-center justify-center">
                    <span className="px-4 py-2 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg text-sm font-bold uppercase tracking-wider">
                      Pas de ROI
                    </span>
                  </div>
               </div>
             </div>
          </div>

          {/* The Videac Way */}
          <div className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-2xl transform md:-translate-y-4">
             <div className="p-8">
               <div className="flex items-center justify-between mb-8">
                 <h3 className="text-2xl font-bold text-dark">L'approche Videac</h3>
                 <div className="h-10 w-10 rounded-full bg-brand/10 flex items-center justify-center">
                    <Check className="h-6 w-6 text-brand" />
                 </div>
               </div>
               
               <div className="space-y-4 mb-8">
                 <div className="flex items-start text-gray-600">
                   <div className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0"></div>
                   <p className="font-medium">Sujets basés sur l'intention d'achat (SEO).</p>
                 </div>
                 <div className="flex items-start text-gray-600">
                    <div className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0"></div>
                   <p className="font-medium">Tracking précis des MQLs & SQLs.</p>
                 </div>
                 <div className="flex items-start text-gray-600">
                    <div className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0"></div>
                   <p className="font-medium">Machine de production industrielle.</p>
                 </div>
               </div>

               <div className="h-48 w-full rounded-xl overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                    alt="Graphique en hausse" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-brand/10 group-hover:bg-transparent transition-colors duration-300"></div>
                  <div className="absolute bottom-4 right-4">
                     <span className="px-4 py-2 bg-white text-brand border border-gray-100 rounded-lg text-sm font-bold shadow-lg">
                      + Leads Qualifiés
                    </span>
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