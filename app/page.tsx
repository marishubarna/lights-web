"use client";
import React from "react";
import { Animation } from "../componnents/animation/Animation";
// import CookieConsent from "react-cookie-consent";
import HeaderMenu from "../componnents/HeaderMenu";
import Footer from "../componnents/Footer";
import Form from "../componnents/Form";
import Cards from "../componnents/Cards";
import GoogleMap from "../componnents/GoogleMap";
import Accordion from "../componnents/Accordion";
import Rating from "../componnents/Rating";
import PinterestImages from "../componnents/PinterestImages";
import ChristmasLayout from "../componnents/animation/ChristmasLayout"; // Імпорт ChristmasLayout

export default function Home() {
  return (
    <div className="relative ">
      <Animation animation="fade-down" delay={0.3}>
        <div className="StickyHeader" style={{ position: "sticky", top: 0 }}>
          <HeaderMenu />
        </div>
      </Animation>
      <div className="">
        <Cards />
      </div>
      <div id="our-work-section">
        <PinterestImages />
      </div>
      <div className="">
        <Animation animation="fade-right" delay={0.3}>
          <GoogleMap />
        </Animation>
      </div>

      {/* Christmas Layout */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch">
        <div className="w-full py-12 lg:py-0">
          <Animation animation="fade-down" delay={0.3}>
            <ChristmasLayout />
          </Animation>
        </div>
        <div id="form">
          <Animation animation="fade-left" delay={0.3}>
            <Form />
          </Animation>
        </div>
      </div>
      <div id="google-reviews-section">
        <Rating />
      </div>
      {/* Main Content */}
      <div className="relative z-0">
        {/* <CookieConsent
          location="bottom"
          buttonText="I understand"
          cookieName="myWebsiteCookieConsent"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
        >
          This website uses cookies to enhance your browsing experience.
        </CookieConsent> */}
        <Animation animation="fade-right" delay={0.3}>
          <Accordion />
        </Animation>
        <Animation animation="fade-in" delay={0.3}>
          <Footer />
        </Animation>
      </div>
    </div>
  );
}
