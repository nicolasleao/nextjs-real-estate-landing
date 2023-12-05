import React, { Fragment, useState } from "react";
import Link from "next/link";
import Submenu from "./Submenu";

const sidebarItems = [
  { href: "/", label: "Dashboard", icon: "la-chart-pie" },
  {
    href: "/imoveis",
    label: "Imoveis",
    icon: "la-home",
    items: [
      { href: "/imoveis?type=aluguel", label: "Aluguel" },
      { href: "/imoveis?type=venda", label: "Venda" },
      { href: "/imoveis?type=todos", label: "Ver todos" },
    ],
  },
  {
    href: "/clientes",
    label: "Clientes",
    icon: "la-user",
    items: [
      { href: "/clientes?type=leads", label: "Leads" },
      { href: "/clientes?type=todos", label: "Simulações" },
    ],
  },
  { href: "/mensagens", label: "Mensagens", icon: "la-envelope", counter: 6 },
  {
    href: "/documentos",
    label: "Documentos",
    icon: "la-file-invoice",
    items: [
      { href: "/documentos?type=contratos", label: "Contratos" },
      { href: "/documentos?type=nf", label: "Notas Fiscais" },
      { href: "/documentos?type=immonova", label: "Immonova" },
    ],
  },
  { href: "/corretor", label: "Minha Página", icon: "la-folder" },
  { href: "/listagens", label: "Listagens", icon: "la-stream" },
];

interface SidenavProps {
  active: any;
  toggleActive: any;
}

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
                      {!!item.counter && (<span className="ml-3 color-primary-red">({item.counter})</span>)}
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
