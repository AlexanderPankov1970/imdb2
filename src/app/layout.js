import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Providers from "./Providers";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB2",
  description: "This is IMDB clone",
  // icon: "./favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* Header */}
          <Header />
          {/* NavBar */}
          <NavBar />
          {/* SearchBox */}
          {/* <SearchBox /> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
