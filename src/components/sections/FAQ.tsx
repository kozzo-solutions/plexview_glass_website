import { useState } from "react";
import { useTranslation } from "react-i18next";

interface FAQItem {
  question: string;
  answer: string;
  delay: number;
}

export default function FAQ() {
  const { t } = useTranslation();

  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqItems = (
    t("faq.items", { returnObjects: true }) as {
      question: string;
      answer: string;
    }[]
  ).map((item, idx) => ({
    ...item,
    delay: idx * 100,
  }));

  return (
    <section id="faq" className="py-24 bg-dark-deeper relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            dangerouslySetInnerHTML={{ __html: t("faq.title") }}
          />
          <p className="text-gray-300 max-w-2xl mx-auto">{t("faq.subtitle")}</p>
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
                      openIndices.includes(index) ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                    openIndices.includes(index) ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                    className="text-gray-300 pb-6"
                  ></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
