import React, { useState, useEffect, useRef } from "react";
import "../app/pin.css";
import { OurWorkImages } from "../lib/Data";

export default function PinterestImages() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    imageRefs.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => observer.disconnect();
  }, []);

  const handleImageClick = (img: string) => setSelectedImage(img);
  const handleClose = () => setSelectedImage(null);

  return (
    <section
      id="pinterest-images"
      className="max-w-fit mx-auto py-16 px-4 bg-gray-50"
    >
      <h2 className="text-4xl sm:text-5xl text-black font-extrabold text-center mb-10">
        OUR<span className="text-amber-400">WORK</span>
      </h2>

      <div className="container">
        {OurWorkImages.map((image, index) => (
          <div
            className="content-wrapper fade-in"
            key={image.id}
            ref={(el) => {
              imageRefs.current[index] = el;
            }}
          >
            <div
              className="image-wrapper"
              onClick={() => handleImageClick(image.img)}
            >
              <div className="overlay"></div>
              <img src={image.img} alt={image.alt || "Image"} />
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={handleClose}>
          <img src={selectedImage} alt="Enlarged" className="enlarged-image" />
        </div>
      )}
    </section>
  );
}
