import React, { Fragment, useState } from "react";
import Link from "next/link";
import Submenu from "./Submenu";

interface SidenavProps {
  active: any;
  toggleActive: any;
}

interface SidebarItem {
  href: string;
  label: string;
  icon: string;
  items?: any[];
  counter?: number;
}

const sidebarItems: SidebarItem[] = [
  { href: "/", label: "Dashboard", icon: "la-chart-pie" },
  { href: "/imoveis", label: "Imoveis", icon: "la-home" },
  { href: "/clientes", label: "Clientes", icon: "la-user" },
  { href: "/mensagens", label: "Mensagens", icon: "la-envelope", counter: 6 },
  { href: "/documentos", label: "Documentos", icon: "la-file-invoice" },
  { href: "/corretor", label: "Minha Página", icon: "la-folder" },
];

export default function Sidenav(props: SidenavProps) {
  return (
    <div>
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full ${
          props.active ? "translate-x-0" : ""
        }`}
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <div key={item.href}>
                <li>
                  {!!item.items ? (
                    <Submenu
                      icon={item.icon}
                      label={item.label}
                      items={item.items}
                    />
                  ) : (
                    <Link
                      href={`/painel${item.href}`}
                      className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <i className={`las ${item.icon}`}></i>
                      <span className="ml-3">{item.label}</span>
                      {!!item.counter && (
                        <span className="ml-3 color-primary-red">
                          ({item.counter})
                        </span>
                      )}
                    </Link>
                  )}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
