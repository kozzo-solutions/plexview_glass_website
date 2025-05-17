export default function Testimonials() {
  const testimonials = [
    {
      name: "Thomas L.",
      role: "Propriétaire de 5 appartements",
      rating: 5,
      comment:
        "J'ai enfin trouvé une plateforme qui me fait gagner un temps précieux. L'automatisation des tâches récurrentes est juste incroyable.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
      delay: 0,
    },
    {
      name: "Sophie M.",
      role: "Gestionnaire immobilier",
      rating: 4.5,
      comment:
        "Une gestion intuitive et efficace. Je gagne des heures chaque mois sur les tâches administratives et mes propriétaires sont ravis.",
      image:
        "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?auto=format&fit=crop&w=200&h=200&q=80",
      delay: 100,
    },
    {
      name: "Marc D.",
      role: "Investisseur immobilier",
      rating: 5,
      comment:
        "PlexView m'a permis d'automatiser tout ce que je faisais manuellement. La vision globale sur mes investissements est un vrai plus pour prendre des décisions éclairées.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
      delay: 200,
    },
  ];

  // Helper function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <i key={`full-${i}`} className="fa-solid fa-star text-brand"></i>
      );
    }

    // Add half star if needed
    if (hasHalfStar) {
      stars.push(
        <i key="half" className="fa-solid fa-star-half-alt text-brand"></i>
      );
    }

    // Add empty stars to reach 5
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i key={`empty-${i}`} className="fa-regular fa-star text-brand"></i>
      );
    }

    return stars;
  };

  return (
    <section
      id="testimonials"
      className="py-24 bg-dark-deeper relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ce que disent nos{" "}
            <span className="gradient-text">utilisateurs</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Découvrez l'expérience de nos utilisateurs beta
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-brand/10"
              data-aos="fade-up"
              data-aos-delay={testimonial.delay}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={`Portrait de ${testimonial.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-3">{renderStars(testimonial.rating)}</div>
              <p className="text-gray-300 italic">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
