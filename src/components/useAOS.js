"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const useAOS = () => {
  useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 800, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: false, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });

    // Refresh animations when DOM is updated
    AOS.refresh();
  }, []);
};

export default useAOS;
