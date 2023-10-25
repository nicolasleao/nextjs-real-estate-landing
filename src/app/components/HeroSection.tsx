"use client";

import Simulator from "./Simulator";

export default function HeroSection() {

  return (
    <section
      className="parallax w-full h-[1000px] md:h-[800px] text-gray-600 body-font bg-img_bg_hero bg-no-repeat bg-top bg-cover"
    >
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center h-full">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 text-white">
          <h1 className="title-font font-medium text-4xl md:text-6xl">
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
