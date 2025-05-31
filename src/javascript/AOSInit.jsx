// AOS er et bibliotek, som henter animationer (Animate on scroll) til React-komponenter.
// Når du scroller ned på siden, kan elementer fade in, slide, zoom osv.
// Dette er en .jsx-fil, fordi den bruger React JSX-syntaks.

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Her importeres AOS-biblioteket og tilhørende CSS, så animationerne kan vises korrekt.
// useEffect bruges til at køre noget kode, når komponentet indlæseser.

const AOSInit = () => {
  useEffect(() => {
    // Initialiserer AOS med de ønskede indstillinger
    AOS.init({
      duration: 1000, // Animationens varighed i millisekunder
      once: true, // Animationen kører kun én gang pr. element
      disable: function () {
        // Returnerer true hvis skærmbredden er 800px eller mindre (mobil)
        // Dermed bliver AOS deaktiveret på mobil
        return window.innerWidth <= 800;
      },
    });
  }, []);

  return null; // Komponent returnerer ikke noget visuelt
};

export default AOSInit;
