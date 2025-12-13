import React from 'react';
import { Target, Video, BarChart3 } from 'lucide-react';
import { PillarProps } from '../types';

const PillarCard: React.FC<PillarProps> = ({ icon: Icon, title, description, points }) => (
  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
    <div className="h-14 w-14 rounded-xl bg-majorelle/10 flex items-center justify-center mb-6 group-hover:bg-majorelle transition-colors">
      <Icon className="h-7 w-7 text-majorelle group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold text-dark mb-4">{title}</h3>
    <p className="text-gray-600 mb-6 min-h-[80px]">{description}</p>
    <ul className="space-y-3">
      {points.map((point, idx) => (
        <li key={idx} className="flex items-start text-sm text-gray-500">
          <span className="mr-2 text-majorelle font-bold">•</span>
          {point}
        </li>
      ))}
    </ul>
  </div>
);

const Pillars: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: "1. Stratégie d'Acquisition",
      description: "Nous ne cherchons pas le buzz, nous cherchons le business. Chaque sujet est validé par son potentiel de conversion.",
      points: [
        "Analyse profonde de votre funnel",
        "Mapping des sujets à intention d'achat",
        "Structure des scripts pour convertir"
      ]
    },
    {
      icon: Video,
      title: "2. Production Scalable",
      description: "Un process fluide pour produire régulièrement sans épuiser vos équipes internes.",
      points: [
        "Formats optimisés pour la rétention",
        "Industrialisation du tournage/montage",
        "Thumbnails à fort taux de clic (CTR)"
      ]
    },
    {
      icon: BarChart3,
      title: "3. Data & Optimisation",
      description: "On ne pilote pas à vue. Nous connectons la performance vidéo à votre CRM.",
      points: [
        "Suivi des leads et attributions",
        "Analyse de la qualité des signaux",
        "Optimisation continue du coût/lead"
      ]
    }
  ];

  return (
    <section id="method" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Trois briques indissociables pour la performance
          </h2>
          <p className="text-lg text-gray-600">
            Une vidéo seule ne sert à rien. C'est le système complet qui génère du résultat.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <PillarCard key={index} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;