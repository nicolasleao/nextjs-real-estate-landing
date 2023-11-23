import React from "react";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

export default function SignUpLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
