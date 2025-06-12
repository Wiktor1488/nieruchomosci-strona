import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sylwester Pawlik - Ekspert Nieruchomości Kielce",
  description:
    "Licencjonowany pośrednik nieruchomości w Kielcach. Ponad 8 lat doświadczenia. Sprzedaż, kupno, wynajem nieruchomości.",
  keywords:
    "pośrednik nieruchomości Kielce, sprzedaż mieszkań Kielce, kupno domu Kielce, wynajem nieruchomości",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
