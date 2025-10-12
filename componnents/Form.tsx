"use client";
import React, { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  streetAddress: string;
  unit: string;
  province: string;
  postCode: string;
  city: string;
  agreement: boolean;
  originConfirm: boolean;
  services: string[];
  description: string;
};

type ImagePreview = {
  file: File;
  url: string;
};

export default function ContactForm() {
  const { register, handleSubmit, reset, watch } = useForm<FormValues>();
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<ImagePreview[]>([]);
  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading && formRef.current) {
      const items = gsap.utils.toArray<HTMLElement>(".fade-in-item");
      gsap.from(items, {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }
  }, [loading]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Додаємо зображення до даних форми
    const formDataWithImages = {
      ...data,
      images: images.map((img) => img.url), // Зберігаємо лише URL зображень
    };

    // Збереження даних у localStorage
    localStorage.setItem("formData", JSON.stringify(formDataWithImages));

    console.log("Form data saved to localStorage:", formDataWithImages);

    reset();
    setImages([]);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const fileArray = Array.from(files);
    if (fileArray.length + images.length > 10) {
      alert("You can upload a maximum of 10 images.");
      return;
    }
    const newImages = fileArray.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...newImages]);
  };

  const removeImage = (url: string) => {
    setImages((prev) => prev.filter((img) => img.url !== url));
  };

  return (
    <section
      id="form"
      style={{ padding: "40px" }}
      ref={formRef}
      className="min-h-screen text-black px-4"
    >
      <div className="w-full p-8 rounded-2xl shadow-xl bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center fade-in-item">
          Please fill the form above or call on the number to Instantly Schedule
          a Free Consultation with One of Our Experts
        </h2>

        <p className="fade-in-item text-sm text-gray-500 mb-6">
          Thanks for considering Skyshine Cleaning Company! You may fill out
          this quick request form and a representative from our company will
          reach out to you within one business day to either send a quote or set
          a time and date for an in-person estimate. Let us know what we can do
          for you!
        </p>

        {loading ? (
          <div className="space-y-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-12 w-full animate-pulse rounded bg-gray-100"
              ></div>
            ))}
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <h2>Contact details</h2>

            <div className="grid grid-cols-2 gap-4">
              <input
                {...register("firstName", { required: true })}
                placeholder="First Name"
                className="input input-bordered w-full fade-in-item"
              />
              <input
                {...register("lastName", { required: true })}
                placeholder="Last Name"
                className="input input-bordered w-full fade-in-item"
              />
            </div>

            <input
              {...register("email", { required: true })}
              placeholder="Email"
              className="input input-bordered w-full fade-in-item"
            />
            <input
              {...register("company")}
              placeholder="Company"
              className="input input-bordered w-full fade-in-item"
            />

            <input
              {...register("phone")}
              placeholder="Phone"
              className="input input-bordered w-full fade-in-item"
            />
            <input
              {...register("streetAddress")}
              placeholder="Street Address"
              className="input input-bordered w-full fade-in-item"
            />
            <input
              {...register("unit")}
              placeholder="Unit, Suite, Apt (optional)"
              className="input input-bordered w-full fade-in-item"
            />

            <div className="grid grid-cols-3 gap-4">
              <input
                {...register("city")}
                placeholder="City"
                className="input input-bordered w-full fade-in-item"
              />
              <select
                {...register("province")}
                defaultValue="Province"
                className="select select-md fade-in-item"
              >
                <option disabled>Select</option>
                <option>Alberta</option>
                <option>British Columbia</option>
                <option>Ontario</option>
                <option>Quebec</option>
                <option>Manitoba</option>
                <option>Saskatchewan</option>
              </select>
              <input
                {...register("postCode")}
                placeholder="Post Code"
                className="input input-bordered w-full fade-in-item"
              />
            </div>

            {/* === Service Details Section === */}
            <div className="fade-in-item mt-8">
              <h3 className="text-xl font-semibold mb-4">Service Details</h3>
              <p className="mb-2">What services are you looking for?</p>

              <div className="flex flex-col gap-2 mb-4">
                {[
                  "Interior Window Cleaning",
                  "Exterior Window Cleaning",
                  "Gutter Cleaning",
                  "Gutter/Roof repair",
                  "Gutter/Soffit Brightening",
                  "Power Wash",
                  "Christmas Lights",
                ].map((service) => (
                  <label key={service} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      {...register("services")}
                      value={service}
                      className="checkbox"
                    />
                    <span>{service}</span>
                  </label>
                ))}
              </div>

              <label className="block mb-2 text-sm">
                Please provide as much information as you can
              </label>
              <textarea
                {...register("description")}
                placeholder="Describe the work to be done..."
                className="textarea textarea-bordered w-full h-24"
              ></textarea>
            </div>

            {/* === Upload Images Section === */}
            <div className="fade-in-item w-full mt-6">
              <h3 className="text-lg font-semibold mb-1">Upload images</h3>
              <div className="flex justify-between items-center">
                <p className="text-sm mb-3">
                  Share images of the work to be done
                </p>
                <p className="text-sm bg-gray-200 p-1 w-fit rounded-3xl text-gray-500 text-right mt-1">
                  {images.length}/10
                </p>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium text-gray-900"
              >
                Cover photo
              </label>
              <div className="mt-2 fade-in-item flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <div className="mt-4 flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-600 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-600 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageChange}
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>

              {/* Preview of uploaded images */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                {images.map((img, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={img.url}
                      alt="preview"
                      className="rounded-xl object-cover w-full h-32"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(img.url)}
                      className="absolute top-1 right-1 bg-red-600 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* === Footer === */}
            <div className="text-xs text-blue-400 mt-6">
              This site is protected by reCAPTCHA and the Google{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Terms of Service
              </a>{" "}
              apply.
            </div>

            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                {/* <img
                  src="https://cdn.jobberstatic.com/images/logos/jobber-logo.svg"
                  alt="Jobber logo"
                  className="h-4"
                /> */}
                <span>Powered by Jobber</span>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
