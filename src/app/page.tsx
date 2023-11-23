import HeroSection from "./_components/HeroSection";
import BankLogos from "./_components/BankLogos";
import Features from "./_components/Features";
import Steps from "./_components/Steps";
import Contact from "./_components/Contact";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
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
