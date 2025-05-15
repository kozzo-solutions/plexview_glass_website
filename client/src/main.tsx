import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { useEffect } from "react";

// Initialize AOS on mount
const AOSInit = () => {
  useEffect(() => {
    // @ts-ignore - AOS is loaded from CDN
    if (typeof AOS !== 'undefined') {
      // @ts-ignore
      AOS.init({
        duration: 800,
        once: true,
        offset: 100
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
