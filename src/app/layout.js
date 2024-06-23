import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard-Quizrr",
  description: "This is a home page of Quizrr",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <Navbar />
          <div className="ml-20 md:ml-32 w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
