import type { Metadata } from "next";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

export const metadata: Metadata = {
  title: "MusicDOT",
  description: "Onde o mundo e a música se encontram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={` antialiased`}
      >
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
