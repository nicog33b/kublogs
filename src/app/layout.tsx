import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./GUI/navbar";
import Footer from "./GUI/footer";

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
      <Navbar />
      <main className="flex-grow mt-3 mb-3">
        {children}
      </main>
      <Footer />
        </body>
    </html>
  );
}
