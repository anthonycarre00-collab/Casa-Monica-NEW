import type { Metadata } from "next";
import { Fraunces, Inter, Caveat } from "next/font/google";
import "./globals.css";
import "./self-draw.css";
import "./marquee.css";

const fraunces = Fraunces({ subsets: ["latin"], weight: ["300","400","500","600","700"], style: ["normal","italic"], variable: "--font-playfair", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["300","400","500","600"], variable: "--font-inter", display: "swap" });
const caveat = Caveat({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-caveat", display: "swap" });

export const metadata: Metadata = {
  title: "Casa Mónica · Siéntete como en casa · Mompós, Colombia",
  description: "Una posada de familia en el corazón colonial de Mompox. Fredy, Mónica y familia te reciben en su casa.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${inter.variable} ${caveat.variable}`}>
      <body className="bg-background text-foreground antialiased">
        <div className="sunset-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
