import { AnimatedText } from "@/components/ui/animated-text";

export default function Features() {
  const features = [
    {
      icon: "fa-chart-line",
      title: "Tableau de bord intelligent",
      description: "Visualisez toutes vos opérations avec des données en temps réel et des indicateurs personnalisables.",
      delay: 0
    },
    {
      icon: "fa-tools",
      title: "Maintenance automatisée",
      description: "Gérez facilement les demandes d'intervention et collaborez avec des professionnels qualifiés.",
      delay: 100
    },
    {
      icon: "fa-file-contract",
      title: "Gestion des baux",
      description: "Création, signature et suivi de vos contrats de location en quelques clics.",
      delay: 200
    },
    {
      icon: "fa-credit-card",
      title: "Paiements simplifiés",
      description: "Percevez vos loyers automatiquement et suivez vos revenus locatifs sans effort.",
      delay: 300
    },
    {
      icon: "fa-comments",
      title: "Communication centralisée",
      description: "Échangez facilement avec vos locataires et prestataires depuis une interface unique.",
      delay: 400
    },
    {
      icon: "fa-file-invoice-dollar",
      title: "Comptabilité intégrée",
      description: "Suivez vos finances et générez des rapports détaillés pour optimiser votre rentabilité.",
      delay: 500
    }
  ];

  return (
    <section id="features" className="py-24 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fonctionnalités <span className="gradient-text">puissantes</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Des outils conçus pour simplifier chaque aspect de la gestion immobilière
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-brand/10 hover:-translate-y-1" 
              data-aos="fade-up" 
              data-aos-delay={feature.delay}
            >
              <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center mb-4">
                <i className={`fa-solid ${feature.icon} text-brand text-xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Feature Highlight */}
      <div className="container mx-auto px-6 mt-24">
        <div className="glass rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Une interface pensée pour <span className="gradient-text">vous</span>
              </h3>
              <p className="text-gray-300 mb-6">
                Notre interface intuitive vous permet de gérer l'ensemble de votre portefeuille immobilier depuis un seul endroit, sur tous vos appareils.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-brand mt-1 mr-3"></i>
                  <span>Personnalisable selon vos besoins</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-brand mt-1 mr-3"></i>
                  <span>Compatible mobile, tablette et ordinateur</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-check text-brand mt-1 mr-3"></i>
                  <span>Mise à jour en temps réel</span>
                </li>
              </ul>
            </div>
            <div className="h-full">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600&q=80" 
                alt="Interface Plexio sur plusieurs appareils" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
