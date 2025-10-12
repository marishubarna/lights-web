import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Animation: React.FC<{
  children?: React.ReactNode;
  animation?: string; // тип анімації: fade-in, fade-zoom, Spell, або animate.css fadeInDown
  delay?: number; // затримка для stagger
}> = ({ children, animation = "fade-in", delay = 0 }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Тривалість анімації в мс
      once: false, // Анімація виконується кожного разу при скролі
      offset: 120, // Відстань у пікселях до активації анімації
    });
  }, []);

  return (
    <div
      data-aos={animation}
      data-aos-delay={delay * 1000}
      style={{ zIndex: "auto" }} // Видалено фіксоване значення z-index
    >
      {children}
    </div>
  );
};
