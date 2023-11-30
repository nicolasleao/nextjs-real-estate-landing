import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immonova - Painel",
  description: "Financiamento imobiliário na palma da sua mão",
};

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
