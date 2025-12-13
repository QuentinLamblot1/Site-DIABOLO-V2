import React from 'react';
import { Target, Video, BarChart3 } from 'lucide-react';
import { PillarProps } from '../types';

const PillarCard: React.FC<PillarProps & { image: string, index: number }> = ({ icon: Icon, title, description, points, image, index }) => (
  <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-brand/10 transition-all duration-500">
    <div className="absolute top-0 w-full h-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90 z-10"></div>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
    </div>
    
    <div className="relative z-20 p-8 pt-32">
      <div className="h-14 w-14 rounded-xl bg-white shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-7 w-7 text-brand" />
      </div>
      
      <h3 className="text-2xl font-bold text-dark mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      
      <div className="border-t border-gray-100 pt-6">
        <ul className="space-y-3">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-start text-sm text-gray-500 font-medium">
              <span className="mr-2 text-brand font-bold">✓</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Pillars: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: "1. Stratégie d'Acquisition",
      description: "Nous identifions les mots-clés à haute intention d'achat sur lesquels vos concurrents sont absents.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000",
      points: [
        "Audit concurrentiel approfondi",
        "Mapping des sujets \"Pain-Point\"",
        "Scripts optimisés psychologie de vente"
      ]
    },
    {
      icon: Video,
      title: "2. Studio & Production",
      description: "Des vidéos haute fidélité qui renforcent votre image de marque, produites à la chaîne.",
      image: "https://images.unsplash.com/photo-1585561085350-4849659b8543?auto=format&fit=crop&q=80&w=1000",
      points: [
        "Setup charte graphique YouTube",
        "Tournage & Montage dynamique",
        "Thumbnails à CTR élevé (>6%)"
      ]
    },
    {
      icon: BarChart3,
      title: "3. Data & Conversion",
      description: "On ne pilote pas à vue. Nous transformons les vues en métriques business tangibles.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      points: [
        "Dashboard de suivi des leads",
        "Optimisation continue du coût/lead",
        "Attribution et retargeting"
      ]
    }
  ];

  return (
    <section id="method" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand font-bold tracking-wider uppercase text-sm">Notre Méthodologie</span>
          <h2 className="text-3xl md:text-5xl font-bold text-dark mt-2 mb-4">
            Trois briques pour dominer YouTube
          </h2>
          <p className="text-lg text-gray-600">
            Une vidéo seule ne sert à rien. C'est le système complet qui génère du résultat.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <PillarCard key={index} {...pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;