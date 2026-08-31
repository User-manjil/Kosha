import type { Metadata } from "next";
import { Asap_Condensed, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/navbar/page";
import Footer from "@/Components/Footer/page";


const asapSharp = Asap_Condensed({
  variable: "--font-asap-sharp",
  subsets: ["latin"],
  weight: "400"
})

const greatVibes =  Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400"
}
)

export const metadata: Metadata = {
  title: "Kosha",
  description: "Gift your friends and family with Kosha, a web app that allows you to create and send personalized gifts.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col px-3 ${greatVibes.variable} ${asapSharp.variable}`}>
        <Navbar/>
        {children}
        <Footer/>
        

        </body>
    </html>
  );
}
