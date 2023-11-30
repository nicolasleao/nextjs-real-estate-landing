import React, { useState } from "react";
import Image from "next/image";
import ArrowDownIcon from "@/assets/icons/arrow-down-icon.svg";
import Link from "next/link";

export default function Submenu({ icon, label, items }: any) {
  const [active, setActive] = useState(false);

  const toggleActive = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setActive(!active);
  };

  return (
    <>
      <div
        className="cursor-pointer select-none flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        onClick={(e) => toggleActive(e)}
      >
        <i className={`las ${icon}`}></i>
        <span className="ml-3">{label}</span>
        <Image src={ArrowDownIcon} alt="arrow down" />
      </div>

      <div className={`${active ? "" : "hidden"}`}>
        {items.map((subItem: any) => (
          <div key={subItem.href}>
            <Link
              href={`/painel/${subItem.href}`}
              className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              {subItem.label}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
