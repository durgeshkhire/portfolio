import type { Metadata } from "next";
import "./globals.css";
import ParticlesBackground from "@/components/ParticlesBackground";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Modern Portfolio | Creative Developer",
  description: "A premium portfolio showcasing my work, education, and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <ParticlesBackground />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
