import React from "react";
import { FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";

const footerLinks = [
  { name: "About Us", href: "https://skyshinewindowcleaning.ca/about-us/" },
  {
    name: "Our work",
    href: "https://skyshinewindowcleaning.ca/service/christmas-light-installation-services-in-canada-skyshine/#section-work",
  },
  {
    name: "Google reviews",
    href: "https://skyshinewindowcleaning.ca/service/christmas-light-installation-services-in-canada-skyshine/#section-reviews",
  },
  {
    name: "Service area",
    href: "https://skyshinewindowcleaning.ca/service/christmas-light-installation-services-in-canada-skyshine/#section-service-area",
  },
  { name: "Blog", href: "https://skyshinewindowcleaning.ca/blog/" },
];

export default function Footer() {
  return (
    <footer
      style={{ padding: "70px 15px" }}
      className="bg-[#2B2B2F] text-white"
    >
      <div className="max-w-4/5 mx-auto  grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Logo + slogan */}
        <div>
          <img
            src="https://res.cloudinary.com/dlikxo3e2/image/upload/v1758812632/logo_n0knhs.svg"
            alt="Skyshine logo"
            className="w-3xs mb-4"
          />
          <p className="text-2xl leading-relaxed">
            Let’s make your windows <br />
            cleaner and brighter
          </p>
        </div>

        {/* Useful links */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h6 className="text-2xl font-semibold mb-4">Useful links</h6>
            <ul className="space-y-3">
              {footerLinks.map((item) => (
                <li key={item.name} className="group w-fit">
                  <a
                    href={item.href}
                    className="relative text-white text-xl transition-all duration-300 group-hover:text-blue-700"
                  >
                    {item.name}
                    {/* Псевдоелемент для лінії */}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h6 className="text-2xl font-semibold mb-4">Contacts</h6>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <button className="bg-[#324ef1] p-1.5  rounded hover:bg-[#ffffff] text-[16px] transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-amber-50 hover:text-[#324ef1] transition-colors"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </button>
                <a
                  href="tel:+14168416302"
                  className="text-white text-[16px] transition-colors"
                >
                  +1 416 841 6302
                </a>
              </li>
              <li className="flex items-center gap-3">
                <button className="bg-[#324ef1] p-1.5  rounded hover:bg-[#ffffff] text-[16px] transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-amber-50 hover:text-[#324ef1] transition-colors"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </button>
                <a
                  href="mailto:info@skyshinepro.ca"
                  className="text-white text-[16px] transition-colors"
                >
                  info@skyshinepro.ca
                </a>
              </li>
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <h6 className="text-2xl font-semibold mb-4">Follow us</h6>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/people/Skyshine-Window-Cleaning/61557175108717/?mibextid=LQQJ4d"
                className="text-white hover:text-[#324ef1] transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={28} />
              </a>
              <a
                href="https://www.instagram.com/skyshinepro/?igsh=cjFudnY5aGNsd3E5&utm_source=qr"
                className="text-white hover:text-[#324ef1] transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* bottom small text / copyright */}
      {/* <div className="border-t border-gray-700 text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} Skyshine Window Cleaning. All rights
        reserved.
      </div> */}
    </footer>
  );
}
