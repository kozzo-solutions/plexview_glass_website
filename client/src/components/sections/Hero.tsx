import { Countdown } from "@/components/ui/countdown";
import { AnimatedText } from "@/components/ui/animated-text";
import plexioLogo from "../../assets/plexio-logo.png";

export default function Hero() {
  // Calculate launch date (7 months from now)
  const launchDate = new Date();
  launchDate.setMonth(launchDate.getMonth() + 7);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed" 
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&h=1080&q=80')"}}
      ></div>
      <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm"></div>
      
      {/* Decorative circle */}
      <div className="circle-bg absolute w-[600px] h-[600px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div data-aos="fade-up" data-aos-delay="100" className="mb-6">
            {/* Plexio Logo */}
            <div className="flex justify-center mb-6">
              <img src={plexioLogo} alt="Plexio Logo" className="w-48 md:w-64 h-auto" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-shadow mb-2">
              La gestion immobilière <span className="gradient-text">réinventée</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mt-4">
              Une plateforme tout-en-un pour la gestion de vos biens immobiliers
            </p>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="200" className="mb-10">
            {/* <div className="text-2xl font-medium mb-2">Lancement dans</div> */}
            
            {/* Countdown Component
            <Countdown targetDate={launchDate} /> */}
          </div>
          
          <div data-aos="fade-up" data-aos-delay="300">
            <a 
              href="#beta" 
              className="inline-block bg-gradient-to-r from-brand to-brand-dark px-8 py-4 rounded-full text-dark font-bold text-lg hover:shadow-lg hover:shadow-brand/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              Rejoindre la liste d'attente
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#mission" className="text-white/60 hover:text-white">
          <i className="fa-solid fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
}
