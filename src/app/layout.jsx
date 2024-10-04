import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";


export const metadata = {
  title: "GYM |UFC",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-sm" >
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
