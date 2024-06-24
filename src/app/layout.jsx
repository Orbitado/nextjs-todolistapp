import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const popp = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Task Manager",
  description: "My first CRUD application with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`max-w-4xl mx-auto ${popp.className}`}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
