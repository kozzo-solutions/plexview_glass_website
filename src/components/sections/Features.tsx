import { useTranslation } from "react-i18next";
import plexViewInterface from "../../assets/interface.png";

export default function Features() {
  const { t } = useTranslation();

  // Get features from translations
  const features = (
    t("features.items", { returnObjects: true }) as {
      icon: string;
      title: string;
      description: string;
    }[]
  ).map((feature, idx) => ({
    ...feature,
    delay: idx * 100,
  }));

  // Get highlight list from translations
  const highlightList = t("features.highlightList", {
    returnObjects: true,
  }) as string[];

  return (
    <section id="features" className="py-24 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span dangerouslySetInnerHTML={{ __html: t("features.title") }} />
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t("features.subtitle")}
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
                <i
                  className={`fa-solid ${feature.icon} text-brand text-xl`}
                ></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Highlight */}
      <div className="container mx-auto px-6 mt-24">
        <div className="grid md:grid-cols-2 items-center">
          <div className="p-8 md:p-12">
            <h3
              className="text-3xl md:text-4xl font-bold mb-6"
              dangerouslySetInnerHTML={{ __html: t("features.highlightTitle") }}
            />
            <p className="text-gray-300 text-lg mb-8">
              {t("features.highlightDescription")}
            </p>
            <ul className="space-y-4 text-lg">
              {highlightList.map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className="fa-solid fa-check text-brand mt-1 mr-3 text-xl"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="h-full">
            <img
              src={plexViewInterface}
              alt={t("features.imageAlt")}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
