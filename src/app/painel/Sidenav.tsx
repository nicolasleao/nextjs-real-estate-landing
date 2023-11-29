import React, { Fragment } from "react";
import Image from "next/image";
import HamburgerMenuIcon from "@/assets/icons/hamburger-menu.svg";
import { Menu } from "@headlessui/react";
import Link from "next/link";
import Submenu from "./Submenu";

const sidebarItems = [
  { href: "/dashboard", label: "Dashboard", icon: "la-chart-pie" },
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
    href: "/agendamento",
    label: "Agendamento",
    icon: "la-calendar",
    items: [
      { href: "/imoveis?type=todos", label: "Disponibilidade" },
      { href: "/imoveis?type=aluguel", label: "Solicitações" },
      { href: "/imoveis?type=venda", label: "Visitas Marcadas" },
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
  { href: "/listagens", label: "Listagens", icon: "la-stream" },
];

export default function Sidenav() {
  return (
    <Menu>
      <Menu.Button className="ml-4">
        <span className="sr-only">Abrir menu lateral</span>
        <Image src={HamburgerMenuIcon} alt="hamburger menu" />
      </Menu.Button>
      <Menu.Items>
        <aside
          id="default-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen"
          aria-label="Sidenav"
        >
          <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <ul className="space-y-2">
              {sidebarItems.map((item) => (
                <Menu.Item key={item.href} as={Fragment}>
                  <li>
                    {!!item.items ? (
                      <Submenu
                        icon={item.icon}
                        label={item.label}
                        items={item.items}
                      />
                    ) : (
                      <Link
                        href="#"
                        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <i className={`las ${item.icon}`}></i>
                        <span className="ml-3">{item.label}</span>
                      </Link>
                    )}
                  </li>
                </Menu.Item>
              ))}
            </ul>
          </div>
        </aside>
      </Menu.Items>
    </Menu>
  );
}
