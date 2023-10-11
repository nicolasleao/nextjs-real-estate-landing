"use client";

import { useLayoutEffect, useRef } from "react";
import Simulator from "./Simulator";

export default function HeroSection() {
  const parallaxRef = useRef(null);

  const parallax = () => {
    var yPos = window.scrollY * 0.36;
    var coords = "0% " + yPos + "px";
    if (parallaxRef.current && parallaxRef.current.style) {
      parallaxRef.current.style.backgroundPosition = coords;
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", function () {
      parallax();
    });
  }, []);

  return (
    <section
      ref={parallaxRef}
      className="parallax w-full h-[800px] text-gray-600 body-font bg-img_bg_hero bg-no-repeat bg-top bg-cover"
    >
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center h-full">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 text-white">
          <h1 className="title-font font-medium text-6xl">
            Financiamento imobiliário na palma da sua mão
          </h1>
          <p className="leading-relaxed text-xl mt-4">
            Simule, compare e contrate o financiamento imobiliário ideal para
            você.
          </p>
        </div>
        <Simulator />
      </div>
    </section>
  );
}
