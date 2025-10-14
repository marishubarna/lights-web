import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function WhyUs() {
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    // Плавна поява заголовку зверху
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: -40 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    // Плавна поява кнопки після тексту
    tl.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.4" // трохи перекриває попередню анімацію
    );
  }, []);

  const scrollToForm = () => {
    console.log("Button clicked");
    const formElement = document.getElementById("form");
    if (formElement) {
      console.log("Form element found");
      formElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Element with id 'form' not found.");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="flex flex-col items-center text-center px-4">
        <h1
          ref={titleRef}
          className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white w-full max-w-7xl"
        >
          Christmas Light Installation Services in Toronto Skyshine
        </h1>
        <button
          ref={buttonRef}
          type="button"
          onClick={scrollToForm}
          className="mt-6 px-6 py-3 text-lg sm:text-xl md:text-2xl bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Get a FastQuote
        </button>
      </div>
    </div>
  );
}
