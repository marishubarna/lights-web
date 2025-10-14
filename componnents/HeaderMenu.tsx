import React, { useRef } from "react";
import WhyUs from "./WhyUs";
import { dropDownMenuData, MultiLevelMenuData } from "../lib/Data";

const HeaderMenuItem = [
  {
    id: 1,
    name: "About Us",
    link: "https://skyshinewindowcleaning.ca/about-us/",
  },
  { id: 2, name: "Our work", link: "#pinterest-images" },
  { id: 3, name: "Google reviews", link: "" },
  {
    id: 4,
    name: "Contact Us",
    link: "https://skyshinewindowcleaning.ca/contact/",
  },
  { id: 5, name: "Blog", link: "https://skyshinewindowcleaning.ca/blog/" },
];

export default function HeaderMenu() {
  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with id '${sectionId}' not found.`);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* --- MAIN NAVBAR --- */}
      <div className="navbar bg-white max-w-7xl mx-auto px-4 py-3 relative z-[1010] border-b border-gray-200">
        {/* --- LOGO --- */}
        <div className="flex-1">
          <a href="/" className="flex items-center">
            <img
              src="https://res.cloudinary.com/dlikxo3e2/image/upload/v1758812632/logo_n0knhs.svg"
              alt="Skyshine logo"
              className="h-12 w-auto"
            />
          </a>
        </div>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="menu menu-horizontal items-center text-[15px] font-medium gap-6">
            {HeaderMenuItem.map((item) => (
              <React.Fragment key={item.id}>
                <li className="group relative">
                  <a
                    href="#"
                    onClick={() => {
                      if (item.name === "Our work") {
                        scrollToSection("our-work-section");
                      } else if (item.name === "Google reviews") {
                        scrollToSection("google-reviews-section");
                      }
                    }}
                    className="relative text-gray-800 transition-all duration-300 group-hover:text-blue-600 px-2 py-1"
                  >
                    {item.name}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>

                {/* --- Dropdown About Us --- */}
                {item.name === "About Us" && (
                  <ul className="menu menu-horizontal text-[15px] font-medium px-1 gap-6">
                    {dropDownMenuData.map((dropdownItem) => (
                      <li key={dropdownItem.id} className="group w-fit">
                        <details>
                          <summary className="relative text-gray-800 transition-all duration-300 group-hover:text-blue-600 px-2 py-1">
                            {dropdownItem.submenuTitle}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                          </summary>
                          <ul className="p-2 w-60 bg-white shadow-lg border border-gray-200">
                            {dropdownItem.submenuItems.map((subItem) => (
                              <li key={subItem.id}>
                                <a
                                  href={subItem.link}
                                  className="relative text-gray-800 transition-all duration-300 group-hover:text-blue-600 px-3 py-2 text-sm"
                                >
                                  {subItem.name}
                                  <span className="absolute left-3 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-4/5"></span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </details>
                      </li>
                    ))}
                  </ul>
                )}

                {/* --- Dropdown Google Reviews --- */}
                {item.name === "Google reviews" && (
                  <ul className="menu menu-horizontal px-1 text-[15px] font-medium gap-6">
                    {MultiLevelMenuData.map((multiLevelItem) => (
                      <li key={multiLevelItem.id}>
                        <details>
                          <summary className="relative text-gray-800 transition-all duration-300 group-hover:text-blue-600 px-2 py-1">
                            {multiLevelItem.submenuTitle}
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                          </summary>
                          <ul className="p-2 w-60 bg-white shadow-lg border border-gray-200">
                            {multiLevelItem.submenuItems.map((subItem) => (
                              <li key={subItem.id}>
                                <details>
                                  <summary className="relative text-gray-800 transition-all duration-300 group-hover:text-blue-600 px-3 py-2 text-sm">
                                    {subItem.submenuTitle}
                                    <span className="absolute left-3 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-4/5"></span>
                                  </summary>
                                  <ul className="pl-4">
                                    {subItem.submenuItems.map((nestedItem) => (
                                      <li key={nestedItem.id}>
                                        <a
                                          href={nestedItem.link}
                                          className="relative text-gray-800 transition-all duration-300 group-hover:text-blue-600 px-3 py-2 text-sm"
                                        >
                                          {nestedItem.name}
                                          <span className="absolute left-3 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-4/5"></span>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </details>
                              </li>
                            ))}
                          </ul>
                        </details>
                      </li>
                    ))}
                  </ul>
                )}
              </React.Fragment>
            ))}
          </ul>

          {/* --- PHONE BUTTON (Styled like screenshot) --- */}
          <a
            href="tel:+14168416302"
            className="flex items-center gap-2 px-4 py-2 bg-white text-[#324ef1] border border-[#324ef1] rounded-4xl font-semibold hover:bg-[#324ef1] hover:text-white transition-all shadow-sm text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372a1.125 1.125 0 00-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.38 12.035 12.035 0 01-7.143-7.143 1.125 1.125 0 01.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102A1.125 1.125 0 005.872 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            +1 416 841 6302
          </a>
        </div>

        {/* --- MOBILE DRAWER BUTTON --- */}
        <div className="lg:hidden flex items-center gap-3">
          {/* Mobile Phone Button */}

          <label htmlFor="my-drawer-5" className="btn btn-square btn-ghost">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-700"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
                fill="currentColor"
              ></path>
            </svg>
          </label>
        </div>
      </div>

      {/* --- DRAWER --- */}
      <div className="drawer drawer-end z-[2000]">
        <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label htmlFor="my-drawer-5" className="drawer-overlay"></label>
          <div className="menu bg-white min-h-full w-[400px] p-4 text-base relative">
            {/* Close button */}
            <label
              htmlFor="my-drawer-5"
              className="absolute top-4 right-4 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#374151"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>

            {/* Menu items */}
            <ul className="grid grid-cols-1 mt-10 w-full items-center text-[15px] font-medium gap-6">
              {HeaderMenuItem.map((item) => (
                <React.Fragment key={item.id}>
                  <li className="group relative">
                    <a
                      href={item.link}
                      className="relative text-gray-800 transition-all duration-300 group-hover:text-blue-600 px-2 py-1"
                    >
                      {item.name}
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>

                  {/* --- Dropdown About Us --- */}
                  {item.name === "About Us" && (
                    <ul className="space-y-1">
                      {dropDownMenuData.map((dropdownItem) => (
                        <li key={dropdownItem.id} className="group w-fit">
                          <details>
                            <summary className="relative text-gray-800 transition-all duration-300 group-hover:text-blue-600 px-2 py-1">
                              {dropdownItem.submenuTitle}
                              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                            </summary>
                            <ul className="p-2 w-48 bg-white shadow-lg border border-gray-200">
                              {dropdownItem.submenuItems.map((subItem) => (
                                <li key={subItem.id}>
                                  <a
                                    href={subItem.link}
                                    className="relative text-gray-800 transition-all duration-300 group-hover:text-blue-600 px-3 py-2 text-sm"
                                  >
                                    {subItem.name}
                                    <span className="absolute left-3 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-4/5"></span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </details>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* --- Dropdown Google Reviews --- */}
                  {item.name === "Google reviews" && (
                    <ul className="menu menu-horizontal px-1 text-[15px] font-medium gap-6">
                      {MultiLevelMenuData.map((multiLevelItem) => (
                        <li key={multiLevelItem.id} className="group w-fit">
                          <details>
                            <summary className="relative text-gray-800 transition-all duration-300 group-hover:text-blue-600 px-2 py-1">
                              {multiLevelItem.submenuTitle}
                              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                            </summary>
                            <ul
                              style={{ zIndex: 10 }}
                              className="p-2 w-64 bg-white shadow-lg border  border-gray-200"
                            >
                              {multiLevelItem.submenuItems.map((subItem) => (
                                <li key={subItem.id}>
                                  <details>
                                    <summary className="relative text-gray-800 transition-all duration-300 group-hover:text-blue-600 px-3 py-2 text-sm">
                                      {subItem.submenuTitle}
                                      <span className="absolute left-3 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-4/5"></span>
                                    </summary>
                                    <ul className="pl-4">
                                      {subItem.submenuItems.map(
                                        (nestedItem) => (
                                          <li key={nestedItem.id}>
                                            <a
                                              href={nestedItem.link}
                                              className="relative text-gray-800 transition-all duration-300 group-hover:text-blue-600 px-3 py-2 text-sm"
                                            >
                                              {nestedItem.name}
                                              <span className="absolute left-3 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-4/5"></span>
                                            </a>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </details>
                                </li>
                              ))}
                            </ul>
                          </details>
                        </li>
                      ))}
                    </ul>
                  )}
                </React.Fragment>
              ))}
            </ul>

            {/* Phone Button in Drawer */}
            <a
              href="tel:+14168416302"
              className="flex items-center gap-2 mt-14 px-4 py-2 bg-white text-[#324ef1] border border-[#324ef1] rounded-4xl font-semibold hover:bg-[#324ef1] hover:text-white transition-all shadow-sm text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372a1.125 1.125 0 00-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.38 12.035 12.035 0 01-7.143-7.143 1.125 1.125 0 01.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102A1.125 1.125 0 005.872 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              +1 416 841 6302
            </a>
          </div>
        </div>
      </div>

      {/* --- SECTION --- */}
      <div style={{ zIndex: "unset" }} className="HeaderBackground">
        <WhyUs />
      </div>
    </div>
  );
}
