import React from "react";
import { OurServicesCards } from "../lib/Data";

export default function Cards() {
  return (
    <div>
      {/* Перший div із першими двома елементами */}
      <div className="flex flex-wrap justify-center gap-4">
        {OurServicesCards.slice(0, 2).map((card, index) => (
          <div
            key={card.id}
            className="card w-full sm:w-96 bg-base-100 shadow-xl m-4"
            data-aos="fade-up"
            data-aos-delay={index * 200} // Затримка для кожної картки
          >
            <figure className="px-10 pt-10">
              <img src={card.img} alt={card.title} className="rounded-xl" />
            </figure>
            <div className="card-body">
              <h2 className="card-title items-center">{card.title}</h2>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Другий div із рештою трьох елементів */}
      <div className="flex flex-wrap justify-center gap-4">
        {OurServicesCards.slice(2).map((card, index) => (
          <div
            key={card.id}
            className="card w-full sm:w-96 bg-base-100 shadow-xl m-4"
            data-aos="fade-up"
            data-aos-delay={(index + 2) * 200} // Затримка для кожної картки
          >
            <figure className="px-10 pt-10">
              <img src={card.img} alt={card.title} className="rounded-xl" />
            </figure>
            <div className="card-body">
              <h2 className="card-title items-center">{card.title}</h2>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
