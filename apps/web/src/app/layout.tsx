import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Sidebar from "../components/layout/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cobucket",
  description: "Connect via Interest Pools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Changed bg to #FDFBF7 (Warm Cream) and text to warm grey */}
      <body className={`${inter.className} bg-[#FDFBF7] text-[#1c1917] overflow-hidden`}>
        <div className="flex h-screen w-full">
          
          <Sidebar />

          <main className="flex-1 overflow-y-auto h-full p-8 relative scroll-smooth">
            {children}
          </main>
          
        </div>
      </body>
    </html>
  );
}