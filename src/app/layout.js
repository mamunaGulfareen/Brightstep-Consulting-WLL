import { Montserrat  } from "next/font/google";
import "./globals.css";
import "swiper/css";
import 'aos/dist/aos.css';

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"], 
  variable: "--font-montserrat"
});

export const metadata = {
  title: "Brightstep Consulting WLL",

  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
