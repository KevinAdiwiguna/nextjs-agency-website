import type { Metadata } from "next";
import "./globals.css";

import { hanken_grotesk, inter, montserrat } from '@/styles/fonts'
// Components
import { Navbar } from "@/components/organisms/navbar";
import { Sidebar } from "@/components/organisms/sidebar";
import { SidebarContextProvider } from "@/context/sidebar-context";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hanken_grotesk} ${inter} ${montserrat} overflow-x-hidden w-full`}>
        <SidebarContextProvider>
          <Navbar />
          <Sidebar />
          {children}
        </SidebarContextProvider>
      </body>
    </html>
  );
}
