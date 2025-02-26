import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  weight: ['400', '500', '700'], 
  subsets: ['latin'], 
  variable: '--font-outfit', 
});

export const metadata: Metadata = {
  title: "Ozzy Fitness",
  description: "Ozzy Fitness is a gym that offers a variety of classes to suit different goals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
