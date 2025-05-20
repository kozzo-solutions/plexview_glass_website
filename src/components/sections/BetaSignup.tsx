import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function BetaSignup() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    role: "",
    firstName: "",
    lastName: "",
    email: "",
    properties: "",
    phoneNumber: "",
    businessName: "",
    domain: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedRole, setSelectedRole] = useState<
    "owner" | "entrepreneur" | null
  >(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const dataToSend = {
        ...formData,
        role: selectedRole || "",
      };

      const response = await fetch("https://sheetdb.io/api/v1/onr98ja1m8dab", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: dataToSend }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      setIsSubmitting(false);
      setSubmitSuccess(true);

      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          role: "",
          firstName: "",
          lastName: "",
          email: "",
          properties: "",
          phoneNumber: "",
          businessName: "",
          domain: "",
          consent: false,
        });
        setSelectedRole(null);
      }, 5000);
    } catch (err) {
      setIsSubmitting(false);
      setErrorMessage(
        t("betaSignup.error") || "Submission failed. Please try again."
      );
    }
  };

  return (
    <section id="beta" className="py-24 bg-dark relative overflow-hidden">
      <div className="circle-bg absolute w-[500px] h-[500px] -right-20 top-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative">
        <div
          className="max-w-4xl mx-auto glass rounded-2xl p-8 md:p-12 border border-white/10"
          data-aos="fade-up"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span
                dangerouslySetInnerHTML={{ __html: t("betaSignup.title") }}
              />
            </h2>
            <p className="text-gray-300">{t("betaSignup.subtitle")}</p>
          </div>

          {submitSuccess ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">
                <i className="fa-solid fa-circle-check text-green-500"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {t("betaSignup.successTitle")}
              </h3>
              <p className="text-gray-300">{t("betaSignup.successText")}</p>
            </div>
          ) : selectedRole ? (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div
                className="text-end md:absolute md:top-4 md:right-6 pb-4 text-base text-brand hover:underline cursor-pointer transition-all"
                onClick={() =>
                  setSelectedRole(
                    selectedRole === "owner" ? "entrepreneur" : "owner"
                  )
                }
              >
                {t("betaSignup.switchRole", {
                  role: t(
                    selectedRole === "owner"
                      ? "betaSignup.entrepreneur"
                      : "betaSignup.owner"
                  ),
                })}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                {t("betaSignup.formTitle", {
                  role: t(
                    selectedRole === "owner"
                      ? "betaSignup.owner"
                      : "betaSignup.entrepreneur"
                  ),
                })}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    {t("betaSignup.firstName")}
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
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    {t("betaSignup.lastName")}
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
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  {t("betaSignup.email")}
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
              {selectedRole === "owner" && (
                <div>
                  <label
                    htmlFor="properties"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    {t("betaSignup.units")}
                  </label>
                  <select
                    id="properties"
                    name="properties"
                    value={formData.properties}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors appearance-none"
                    required
                  >
                    <option value="" disabled>
                      {t("betaSignup.select")}
                    </option>
                    <option value="1-5">{t("betaSignup.units_1_5")}</option>
                    <option value="6-20">{t("betaSignup.units_6_20")}</option>
                    <option value="21-50">{t("betaSignup.units_21_50")}</option>
                    <option value="50+">{t("betaSignup.units_50_plus")}</option>
                  </select>
                </div>
              )}
              {selectedRole === "entrepreneur" && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="businessName"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      {t("betaSignup.businessName")}
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      {t("betaSignup.phoneNumber")}
                    </label>
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label
                      htmlFor="domain"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      {t("betaSignup.domain")}
                    </label>
                    <input
                      type="text"
                      id="domain"
                      name="domain"
                      value={formData.domain}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-colors"
                      required
                    />
                  </div>
                </div>
              )}
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
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t("betaSignup.consent"),
                    }}
                  />
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
                      {t("betaSignup.processing")}
                    </span>
                  ) : (
                    t("betaSignup.submit")
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8">
              <h3 className="text-2xl font-bold pb-6">
                {t("betaSignup.rolePrompt")}
              </h3>
              <div className="gap-7 flex justify-center mt-4">
                <button
                  onClick={() => {
                    setSelectedRole("owner");
                  }}
                  className="bg-gradient-to-r from-brand to-brand-dark px-8 py-4 rounded-full text-dark font-bold text-lg hover:shadow-lg hover:shadow-brand/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  {t("betaSignup.owner")}
                </button>
                <button
                  onClick={() => {
                    setSelectedRole("entrepreneur");
                  }}
                  className="bg-gradient-to-r from-brand to-brand-dark px-8 py-4 rounded-full text-dark font-bold text-lg hover:shadow-lg hover:shadow-brand/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  {t("betaSignup.entrepreneur")}
                </button>
              </div>
            </div>
          )}

          <div className="mt-8 text-center text-sm text-gray-400">
            <p>{t("betaSignup.limited")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
