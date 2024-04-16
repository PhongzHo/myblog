import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";
import Nav from "@/modules/home/nav";
import Footer from "@/modules/home/footer";

const arimo = Arimo({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "PhongzHo's Blog",
  description: "Explore the world of computer science and technology on my blog. Dive into software development knowledge, simplified concepts, and celebrate innovation. A journey where technology meets creativity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={arimo.className}>
      <Nav />
      {children}
      <Footer />
      </body>
    </html>
  );
}
