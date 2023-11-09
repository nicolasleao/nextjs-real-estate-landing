import HeroSection from "./components/HeroSection";
import BankLogos from "./components/BankLogos";
import Features from "./components/Features";
import Steps from "./components/Steps";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Immonova - Financiamento imobiliário na palma da sua mão</title>
      </Head>
      <Header />
      <HeroSection />
      <BankLogos />
      <Features />
      <Steps />
      <Contact />
      <Footer />
    </>
  );
}
