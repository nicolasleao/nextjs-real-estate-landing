"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import Sidenav from "./Sidenav";
import Loader from "@/app/_components/Loader";
import HamburgerMenuIcon from "@/assets/icons/hamburger-menu.svg";
import { isLoggedIn } from "@/app/utils/auth";
import { useWindowWidth } from "@/app/utils/hooks";

export default function Menus({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [menuActive, setMenuActive] = useState(true);
  const windowWidth = useWindowWidth();

  const toggleMenu = () => setMenuActive(!menuActive);

  useEffect(() => {
    isLoggedIn(() => setLoading(false));
  });

  useEffect(() => {
    if (windowWidth < 640) {
      setMenuActive(false);
    } else {
      setMenuActive(true);
    }
  }, [windowWidth]);

  if (loading)
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Loader />
      </div>
    );

  return (
    <>
      <div className="relative overflow-x-auto">
        <div
          className={`w-full h-[70px] dashboard-header p-5 ${
            menuActive ? "menu-active" : ""
          }`}
        >
          <div className="menu-toggle cursor-pointer" onClick={toggleMenu}>
            <span className="sr-only">Abrir menu lateral</span>
            <Image src={HamburgerMenuIcon} alt="hamburger menu" />
          </div>
        </div>
        <Sidenav active={menuActive} toggleActive={toggleMenu} />
        <div className={`${menuActive ? "menu-active" : ""} content`}>
          {children}
        </div>
      </div>
    </>
  );
}
