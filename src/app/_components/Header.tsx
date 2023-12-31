"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => setIsMenuActive(!isMenuActive);

  return (
    <>
      <header className="flex container mx-auto items-center justify-between py-4 px-4 md:py-8">
        <a
          href="/"
          className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
          aria-label="logo"
        >
          <Image
            src="/img/logo-immonova-alt.png"
            alt="Immonova logo"
            height="50"
            width="150"
          />
        </a>

        <nav className="hidden gap-12 lg:flex">
          <a
            href="#"
            className="text-lg font-semibold text-dark transition duration-100 hover:text-primary-green py-4 w-full"
          >
            Financiamento
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-dark transition duration-100 hover:text-primary-green py-4 w-full"
          >
            Empréstimo
          </a>
          <Link
            href="parcerias"
            className="text-lg font-semibold text-dark transition duration-100 hover:text-primary-green py-4 w-full"
          >
            Parcerias
          </Link>
          <a
            href="#contact"
            className="text-lg font-semibold text-dark transition duration-100 hover:text-primary-green py-4 w-full"
          >
            Contato
          </a>
        </nav>

        {/* <a
          href="#"
          className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
        >
          Simule
        </a> */}

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Menu
        </button>
      </header>
      <div
        className={`${
          isMenuActive ? "" : "hidden"
        } mobile-menu w-full text-center lg:hidden`}
      >
        <nav className="gap-2 flex flex-col items-center justify-center">
          <a
            href="#"
            className="text-lg font-semibold text-dark transition duration-100 hover:text-primary-green py-4 w-full"
          >
            Financiamento
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-dark transition duration-100 hover:text-primary-green py-4 w-full"
          >
            Empréstimo
          </a>
          <Link
            href="parcerias"
            className="text-lg font-semibold text-dark transition duration-100 hover:text-primary-green py-4 w-full"
          >
            Parcerias
          </Link>
          <a
            href="#contact"
            className="text-lg font-semibold text-dark transition duration-100 hover:text-primary-green py-4 w-full"
          >
            Contato
          </a>
        </nav>
      </div>
    </>
  );
}
