import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// export const metadata: Metadata = {
//   title: "Immonova - Financiamento imobiliário na palma da sua mão",
//   description: "Financiamento imobiliário na palma da sua mão",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
