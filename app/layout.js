import "./globals.css";
import { AOSInit } from "@/Utils/AnimationOS";
import { Poppins } from 'next/font/google';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'], 
  display: 'swap',
})

export const metadata = {
  title: "Fame Study",
  description: "Fame Study Abroad - Expert guidance for international education, student visas, and overseas university admissions.",
  keywords: [
    "Fame Study Abroad",
    "Study Abroad Programs",
    "Overseas Education",
    "International Education Consultancy",
    "Study Abroad Services",
    "Abroad Education Consultants",
    "Global Study Opportunities",
    "Student Visa Assistance",
    "Foreign University Admission",
    "Study in USA",
    "Study in UK",
    "Study in Canada",
    "Affordable Study Abroad",
    "Best Study Abroad Consultants",
    "International Study Guidance"
  ]
};


export default function RootLayout({ children }) {
  return (
    <html lang="en"
    className="hydrated">
      <AOSInit />
      <body
      className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
}
