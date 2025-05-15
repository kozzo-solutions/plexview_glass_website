import { useState } from 'react';
import { AnimatedText } from "@/components/ui/animated-text";

export default function BetaSignup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    properties: '',
    consent: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    // This would normally be an API call
    setTimeout(() => {
      // Simulate successful form submission
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          properties: '',
          consent: false
        });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="beta" className="py-24 bg-dark-deeper relative overflow-hidden">
      <div className="circle-bg absolute w-[500px] h-[500px] -right-20 top-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto glass rounded-2xl p-8 md:p-12 border border-white/10" data-aos="fade-up">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Rejoignez la <span className="gradient-text">BETA</span>
            </h2>
            <p className="text-gray-300">
              Soyez parmi les premiers à découvrir Plexio et bénéficiez d'avantages exclusifs
            </p>
          </div>
          
          {submitSuccess ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">
                <i className="fa-solid fa-circle-check text-green-500"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2">Merci pour votre inscription!</h3>
              <p className="text-gray-300">
                Nous vous contacterons dès qu'une place sera disponible pour la beta.
              </p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    Prénom
                  </label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Nom
                  </label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors" 
                    required 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email professionnel
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="properties" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre de biens gérés
                </label>
                <select 
                  id="properties" 
                  name="properties"
                  value={formData.properties}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors appearance-none" 
                  required
                >
                  <option value="" disabled>Sélectionnez</option>
                  <option value="1-5">1 à 5 biens</option>
                  <option value="6-20">6 à 20 biens</option>
                  <option value="21-50">21 à 50 biens</option>
                  <option value="50+">Plus de 50 biens</option>
                </select>
              </div>
              
              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  id="consent" 
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 text-brand border-gray-300 rounded focus:ring-brand" 
                  required 
                />
                <label htmlFor="consent" className="ml-3 text-sm text-gray-300">
                  J'accepte de recevoir des informations sur Plexio et je comprends que mes données seront traitées conformément à la <a href="#" className="text-brand underline">Politique de confidentialité</a>.
                </label>
              </div>
              
              {errorMessage && (
                <div className="text-red-500 text-sm">{errorMessage}</div>
              )}
              
              <div className="text-center">
                <button 
                  type="submit" 
                  className="inline-block bg-gradient-to-r from-brand to-brand-dark px-8 py-4 rounded-full text-dark font-bold text-lg hover:shadow-lg hover:shadow-brand/30 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                      Traitement...
                    </span>
                  ) : (
                    "Rejoindre la liste d'attente"
                  )}
                </button>
              </div>
            </form>
          )}
          
          <div className="mt-8 text-center text-sm text-gray-400">
            <p>Les places sont limitées. Nous vous contacterons dès qu'une place sera disponible.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
