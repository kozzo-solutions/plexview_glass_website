import { AnimatedText } from "@/components/ui/animated-text";

export default function Mission() {
  return (
    <section id="mission" className="relative py-24 bg-dark-deeper overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Notre <span className="gradient-text">mission</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Plexio simplifie la gestion immobilière en combinant une interface intuitive, des outils puissants et un réseau de partenaires qualifiés pour créer une expérience sans friction.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Notre objectif est de vous faire gagner du temps et de l'énergie pour vous concentrer sur ce qui compte vraiment : développer votre patrimoine immobilier.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="glass rounded-lg px-4 py-3 flex items-center">
                <i className="fa-solid fa-check text-brand mr-2"></i>
                <span>Simplicité</span>
              </div>
              <div className="glass rounded-lg px-4 py-3 flex items-center">
                <i className="fa-solid fa-check text-brand mr-2"></i>
                <span>Efficacité</span>
              </div>
              <div className="glass rounded-lg px-4 py-3 flex items-center">
                <i className="fa-solid fa-check text-brand mr-2"></i>
                <span>Innovation</span>
              </div>
            </div>
          </div>
          
          <div data-aos="fade-left" className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=800&h=800&q=80" 
              alt="Dashboard Plexio sur tablette" 
              className="rounded-xl shadow-2xl shadow-brand/5 w-full" 
              data-parallax-factor="0.1"
            />
            <div 
              className="absolute -bottom-5 -right-5 glass p-4 rounded-lg shadow-xl max-w-xs hidden md:block transform rotate-3" 
              data-parallax-factor="0.05"
            >
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm">Tous les paiements à jour</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
