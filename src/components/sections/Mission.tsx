import { useTranslation } from "react-i18next";

export default function Mission() {
  const { t } = useTranslation();

  const values = t("mission.values", { returnObjects: true }) as string[];

  return (
    <section
      id="mission"
      className="relative py-24 bg-dark-deeper overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span dangerouslySetInnerHTML={{ __html: t("mission.title") }} />
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {t("mission.description1")}
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {t("mission.description2")}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className="glass rounded-lg px-4 py-3 flex items-center"
                >
                  <i className="fa-solid fa-check text-brand mr-2"></i>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div data-aos="fade-left" className="relative">
            <img
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=800&h=800&q=80"
              alt={t("mission.imageAlt")}
              className="rounded-xl shadow-2xl shadow-brand/5 w-full"
              data-parallax-factor="0.1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
