import { useState } from 'react';
import { AnimatedText } from "@/components/ui/animated-text";

interface FAQItem {
  question: string;
  answer: string;
  delay: number;
}

export default function FAQ() {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  
  // const toggleFAQ = (index: number) => {
  //   setOpenIndex(openIndex === index ? null : index);
  // };

  const toggleFAQ = (index: number) => {
  setOpenIndices((prev) =>
    prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
  );
};

  
  const faqItems: FAQItem[] = [
    {
      question: "À qui s'adresse Plexio ?",
      answer: "Plexio s'adresse à tous les acteurs de l'immobilier : propriétaires individuels, gestionnaires de biens, syndics de copropriété et agences immobilières. Notre plateforme s'adapte à la taille de votre portefeuille, que vous possédiez un studio ou gériez des centaines de biens.",
      delay: 0
    },
    {
      question: "Comment mes données sont-elles protégées ?",
      answer: "La sécurité est notre priorité. Toutes vos données sont chiffrées de bout en bout et nous utilisons des serveurs sécurisés conformes aux normes RGPD. Nous effectuons des sauvegardes régulières et nos systèmes sont audités par des experts en cybersécurité.",
      delay: 100
    },
    {
      question: "Qu'est-ce qui différencie Plexio des autres solutions ?",
      answer: "Plexio se distingue par son interface moderne et intuitive, son approche proactive de la gestion (alertes anticipées, suggestions d'optimisation) et son écosystème connecté de partenaires qualifiés. Notre solution est pensée pour vous faire gagner du temps tout en optimisant la rentabilité de votre patrimoine.",
      delay: 200
    },
    {
      question: "Quels sont les tarifs de Plexio ?",
      answer: "Nous proposons plusieurs formules adaptées à différents besoins, de l'offre Essentielle pour les petits propriétaires à l'offre Entreprise pour les gestionnaires professionnels. Les tarifs définitifs seront annoncés lors du lancement officiel, mais les participants à la beta bénéficieront de conditions préférentielles à vie.",
      delay: 300
    },
    {
      question: "Comment rejoindre la beta ?",
      answer: "Pour rejoindre notre programme beta, il vous suffit de remplir le formulaire d'inscription en bas de page. Notre équipe vous contactera pour vous présenter la plateforme et vous accompagner dans la prise en main de Plexio.",
      delay: 400
    }
  ];

  return (
    <section id="faq" className="py-24 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Questions <span className="gradient-text">fréquentes</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur Plexio
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="mb-6" 
              data-aos="fade-up" 
              data-aos-delay={item.delay}
            >
              <div className="glass rounded-xl overflow-hidden">
                <button 
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-lg">{item.question}</span>
                  <i 
                      className={`fa-solid fa-chevron-down text-brand transition-transform duration-300 ${
                        openIndices.includes(index) ? 'rotate-180' : ''
                      }`}
                    />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                    openIndices.includes(index) ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-300 pb-6">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
