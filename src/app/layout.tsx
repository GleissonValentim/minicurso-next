import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minicurso de Next.js",
  description: "Aprendendo os Principios de Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
