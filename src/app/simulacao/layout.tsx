import React from "react"
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function SimulationLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    )
  }