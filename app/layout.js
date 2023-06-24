import { NextAuthProvider } from "@/auth/Provider";
import "./globals.css";
import { Inter, Pathway_Extreme } from "next/font/google";

const pathway = Pathway_Extreme({ subsets: ["latin"] });

export const metadata = {
  title: "Fastmove Admin",
  description: "fastmove",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pathway.className}>
        <NextAuthProvider>
          <main>{children}</main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
