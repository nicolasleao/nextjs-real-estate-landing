import "./globals.css";
// import type { Metadata } from "next";
import { Lato } from "next/font/google";

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
      <head>
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        />
      </head>
      <body className={lato.className}>
        {children}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/flowbite.min.js"></script>
      </body>
    </html>
  );
}
