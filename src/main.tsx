import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./i18n/i18n";
import "./index.css";

const AOSInit = () => {
  useEffect(() => {
    // @ts-ignore - AOS is loaded from CDN
    if (typeof AOS !== "undefined") {
      // @ts-ignore
      AOS.init({
        duration: 800,
        once: true,
        offset: 100,
      });
    }
  }, []);

  return null;
};

createRoot(document.getElementById("root")!).render(
  <>
    <AOSInit />
    <App />
  </>
);


