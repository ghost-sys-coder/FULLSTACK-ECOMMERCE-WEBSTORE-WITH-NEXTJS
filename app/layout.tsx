import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

const jost = Jost({
  variable: "--font-jost-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Shopora",
  description: "Shopora – Your ultimate destination for trendy, high-quality fashion and lifestyle essentials. Explore the latest collections in sneakers, apparel, and accessories with seamless shopping and fast delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.className} antialiased`}
      >
        <main className="max-w-[1600px] mx-auto">
          <Navbar />
          <div className="min-h-screen">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
