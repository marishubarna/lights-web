import React, { useState } from "react";
import Link from "next/link";

export default function Rating() {
  const [filter, setFilter] = useState("all");

  const reviews = [
    {
      id: 1,
      author: "Mithunan Ravendren",
      time: "10 months ago",
      rating: 5,
      text: "Great reasonable prices. And honest service. They were quick and cared about finding the best solutions. Did a clean job installing the permanent Christmas lights. Will definitely hire again next season!",
      service: "Christmas Light Installation",
    },
    {
      id: 2,
      author: "Віталій Москаленко",
      time: "10 months ago",
      rating: 5,
      text: "SkyShine's Christmas lights installation team was friendly and professional, and the lights are stunning! They transformed our home into a winter wonderland. The attention to detail was impressive.",
      service: "Holiday Lighting",
    },
    {
      id: 3,
      author: "Asya Yartim",
      time: "a year ago",
      rating: 5,
      text: "I hired Skyshine for post-construction window cleaning, and I couldn't be happier. They removed all the debris and dust, leaving our windows spotless. Professional and efficient service!",
      service: "Window Cleaning",
    },
    {
      id: 4,
      author: "Yevhenti Kostenko",
      time: "a year ago",
      rating: 5,
      text: "After remodeling, we were in desperate need of window cleaning, and Skyshine did not disappoint. The windows are now as good as new, and the Christmas light installation added the perfect festive touch to our home.",
      service: "Christmas Lights & Cleaning",
    },
    {
      id: 5,
      author: "Sarah Johnson",
      time: "2 months ago",
      rating: 5,
      text: "Excellent Christmas light installation service! The team was punctual, professional, and the results exceeded our expectations. Our house looks magical!",
      service: "Holiday Decor Installation",
    },
    {
      id: 6,
      author: "Michael Chen",
      time: "3 months ago",
      rating: 5,
      text: "Outstanding service for both window cleaning and Christmas lights. They pay attention to every detail and deliver quality work. Highly recommended!",
      service: "Complete Holiday Package",
    },
  ];

  const services = [
    { key: "all", label: "All Reviews" },
    { key: "christmas", label: "Christmas Lights" },
    { key: "window", label: "Window Cleaning" },
    { key: "holiday", label: "Holiday Decor" },
  ];

  const filteredReviews =
    filter === "all"
      ? reviews
      : reviews.filter((review) =>
          review.service.toLowerCase().includes(filter.toLowerCase())
        );

  const renderStars = (rating) => {
    return "★".repeat(rating);
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 lg:py-20">
      <div className="grid grid-cols-1 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say About Us
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            We’re proud to have earned a 5.0-star rating on Google from dozens
            of satisfied customers. Every review is a reflection of our
            dedication to quality, professionalism, and customer care. Feedback
            like this inspires us to keep raising the bar and proves why
            businesses continue to trust us with their window cleaning needs.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 lg:mb-12">
          {services.map((service) => (
            <button
              key={service.key}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === service.key
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-md"
              }`}
              onClick={() => setFilter(service.key)}
            >
              {service.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:p-8 hover:shadow-xl hover:border-gray-300 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">
                    {review.author}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-gray-500 text-sm">{review.time}</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      {review.service}
                    </span>
                  </div>
                </div>
                {/* Google Badge */}
                <div className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  <span>
                    {" "}
                    <Link href="https://search.google.com/local/writereview?placeid=ChIJ91r8h8A3K4gRq8uu83w4WtA">
                      Google
                    </Link>
                  </span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="text-yellow-400 text-lg tracking-wider">
                  {renderStars(review.rating)}
                </div>
                <span className="text-gray-700 font-semibold text-sm">
                  {review.rating}.0
                </span>
              </div>

              {/* Review Text */}
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-gray-600 text-lg mb-4">
            Want to see more reviews?
          </p>
          <Link
            href="https://search.google.com/local/writereview?placeid=ChIJ91r8h8A3K4gRq8uu83w4WtA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16.5v-9l6 4.5-6 4.5z"
              />
            </svg>
            Read all reviews on Google
          </Link>
        </div>
      </div>
    </section>
  );
}

// export default ChristmasLightReviews;
