import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./GUI/navbar";

export const metadata: Metadata = {
  title: "Kublogs",
  description: "Blogs de kubera.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Navbar></Navbar>
        {children}
        </body>
    </html>
  );
}
