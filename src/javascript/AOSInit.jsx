import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animationens varighed
      once: true, // Kør animationen kun én gang
    });
  }, []);

  return null; // Komponent returnerer ikke noget visuelt
};

export default AOSInit;
