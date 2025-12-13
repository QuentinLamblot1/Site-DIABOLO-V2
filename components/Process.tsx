import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Onboarding & Audit",
      desc: "Nous plongeons dans votre produit et votre marché pour définir les angles d'attaque."
    },
    {
      num: "02",
      title: "Setup du Canal",
      desc: "Mise en place technique, charte graphique YouTube, templates et workflow de production."
    },
    {
      num: "03",
      title: "Sprint de Contenu",
      desc: "Production et publication des premières vidéos 'piliers' pour nourrir l'algorithme."
    },
    {
      num: "04",
      title: "Optimisation ROI",
      desc: "Analyse des retours, affinage des CTA et scaling des formats gagnants."
    }
  ];

  return (
    <section id="process" className="py-24 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comment nous opérons votre canal
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Diabolo fonctionne comme une extension de votre équipe Growth. Pas de micro-management, juste une roadmap claire et de l'exécution.
            </p>
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-white text-dark font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Démarrer maintenant
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-majorelle/50 transition-colors">
                <span className="text-5xl font-bold text-majorelle/20 mb-4 block">{step.num}</span>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;