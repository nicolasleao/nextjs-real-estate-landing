import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immonova - Login",
  description: "Financiamento imobiliário na palma da sua mão",
};

export default function LoginLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
