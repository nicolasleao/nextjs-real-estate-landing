'use client'

import { useLayoutEffect, useRef } from "react";

export default function HeroSection() {
  const parallaxRef = useRef(null);
  
  const parallax = () => {
    var yPos = window.scrollY * 0.36;
    var coords = '0% '+ yPos + 'px';
    if (parallaxRef.current && parallaxRef.current.style) {
      parallaxRef.current.style.backgroundPosition = coords;
    }
  }
  
  useLayoutEffect(() => {
    window.addEventListener("scroll", function(){
      parallax();	
    });
  }, []);

  return (
    <section ref={parallaxRef} className="parallax w-full h-[800px] text-gray-600 body-font bg-img_bg_hero bg-no-repeat bg-top bg-cover">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center h-full">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 text-white">
          <h1 className="title-font font-medium text-6xl">Financiamento imobiliário na palma da sua mão</h1>
          <p className="leading-relaxed text-xl mt-4">Simule, compare e contrate o financiamento imobiliário ideal para você.</p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-center text-2xl font-bold title-font mb-5">Faça uma simulação</h2>
          <div className="relative mb-4">
            <label htmlFor="price" className="leading-7 text-sm text-gray-600">Valor do Imóvel</label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">R$&ensp;</span>
              </div>
              <input type="text" name="price" id="price" className="w-full bg-white rounded border border-gray-300 focus:border-primary-green focus:ring-2 focus:ring-primary-green text-base outline-none text-gray-700 py-1.5 pl-8 pr-20 leading-8 transition-colors duration-200 ease-in-out" placeholder="0.00" />
            </div>
          </div>
          <button className="text-white bg-primary-green border-0 py-2 px-8 focus:outline-none hover:bg-primary-green rounded text-lg">Proximo</button>
          <p className="text-xs text-gray-500 mt-3">Literally you probably haven&apos;t heard of them jean shorts.</p>
        </div>
      </div>
    </section>
  )
}