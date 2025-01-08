import { Geist, Geist_Mono, Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer/footer";
import Navbar from "@/components/navbar/Navbar";
import {Toaster} from "react-hot-toast";
import SoothingScroll from "@/components/shared/SoothingScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ntechzy pvt. ltd.",
  description: "Established in 2021, Ntechzy has grown into a comprehensive technology and marketing solutions provider, dedicated to helping businesses and institutions thrive in the digital age. Our wide-ranging expertise spans across IT services, including website and mobile application development, CRM, HMS, LMS, and custom portal development in industry-demanded coding languages. We also provide integrated branding and promotion, marketing consulting, digital marketing, and online visibility enhancement solutions, all tailored to meet the diverse needs of our clients.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/svg+xml" href="/favicon.png" />
      
      </head>
      <body
        className={`${redHatDisplay.className}  antialiased`}
      >
      {/* <SoothingScroll> */}
        <Navbar />
        {children}
        <Footer />
      {/* </SoothingScroll> */}
        <Toaster/>
      <div id={"modal-root"}></div>
      </body>
    </html>
  );
}
