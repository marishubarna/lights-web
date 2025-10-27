import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLightbulb } from "react-icons/fa";
import { FAQ } from "../lib/Data";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4/5 mx-auto py-16 px-4 ">
      <h2 className="text-4xl sm:text-5xl text-black font-extrabold text-left mb-10">
        FREQUENTLY ASKED <span className="text-amber-400">QUESTIONS</span>
      </h2>

      <div className="space-y-4">
        {FAQ.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`rounded-lg overflow-hidden shadow-sm border transition-all duration-300 ${
                isOpen ? "bg-white border-transparent" : "bg-white/70"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className={`flex items-center w-full justify-between p-5 text-left font-bold text-xl transition ${
                  isOpen ? "text-amber-400" : "text-gray-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <FaLightbulb
                    className={`text-2xl transition-all duration-300 ${
                      isOpen
                        ? "text-amber-400 drop-shadow-[0_0_8px_#ff4d4d]"
                        : "text-gray-400"
                    }`}
                  />
                  {faq.question}
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-12 pb-5 text-gray-700 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
