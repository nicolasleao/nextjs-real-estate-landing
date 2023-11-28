import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { ReduxProvider } from "@/redux/provider";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Immonova - Financiamento imobiliário na palma da sua mão",
  description: "Financiamento imobiliário na palma da sua mão",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        />
      </head>
      <body className={lato.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
