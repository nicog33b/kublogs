// RootLayout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./GUI/navbar";
import Footer from "./GUI/footer";
import BlogLayout from "./layouts/blog";

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
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow mt-3 mb-3">
          <BlogLayout>
            {children}
          </BlogLayout>
        </div>
        <Footer />
      </body>
    </html>
  );
}
