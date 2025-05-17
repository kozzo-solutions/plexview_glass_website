import BetaSignup from "@/components/sections/BetaSignup";
import FAQ from "@/components/sections/FAQ";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      const parallaxElements = document.querySelectorAll(
        "[data-parallax-factor]"
      );
      parallaxElements.forEach((el) => {
        const factor = parseFloat(
          (el as HTMLElement).dataset.parallaxFactor || "0.1"
        );
        const moveX = (x - 0.5) * 40 * factor;
        const moveY = (y - 0.5) * 40 * factor;
        (
          el as HTMLElement
        ).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const header = document.getElementById("mainHeader");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        header?.classList.add("header-small");
        header?.classList.add("shadow-lg");
      } else {
        header?.classList.remove("header-small");
        header?.classList.remove("shadow-lg");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="overflow-x-hidden bg-noise">
      <Header />
      <Hero />
      <Mission />
      <Features />
      <FAQ />
      <BetaSignup />
      <Footer />
    </div>
  );
}
