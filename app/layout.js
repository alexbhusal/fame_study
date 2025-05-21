import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
