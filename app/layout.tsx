import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // optional, customize as needed
});

const loosWide = localFont({
  src: [
    // Thin (100)
    {
      path: "../public/fonts/loos-wide-thin.otf",
      weight: "100",
      style: "normal",
    },
    // Extra Light (200)
    {
      path: "../public/fonts/loos-wide-extra-light.otf",
      weight: "200",
      style: "normal",
    },
    // Light (300)
    {
      path: "../public/fonts/loos-wide-light.otf",
      weight: "300",
      style: "normal",
    },
    // Regular (400)
    {
      path: "../public/fonts/loos-wide-regular.otf",
      weight: "400",
      style: "normal",
    },
    // Medium (500)
    {
      path: "../public/fonts/loos-wide-medium.otf",
      weight: "500",
      style: "normal",
    },
    // Bold (700)
    {
      path: "../public/fonts/loos-wide-bold.otf",
      weight: "700",
      style: "normal",
    },
    // Black (900)
    {
      path: "../public/fonts/loos-wide-black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-loos-wide",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Superdao",
  description: "The easiest way to start a DAO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${loosWide.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
