import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { DM_Sans } from "@next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "400"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={`bg-black w-screen h-auto min-h-screen flex flex-col overflow-x-hidden ${dmSans.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
