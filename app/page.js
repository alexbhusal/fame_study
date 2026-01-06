"use client";
import Load from "@/Components/Animation/Load";
import Footer from "@/Components/Main/Footer";
import InfoMation from "@/Components/Main/InfoMation";
import Navbar from "@/Components/Main/NavBar";
import About from "@/Pages/About";
import Contact from "@/Pages/Contact";
import Country from "@/Pages/Country";
import Hero from "@/Pages/Hero";
import Location from "@/Pages/Location";
import OurTeam from "@/Pages/OurTeam";
import OurUniversity from "@/Pages/OurUniversity";
import Testomonial from "@/Pages/Testomonial";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className=" flex justify-center items-center h-screen">
          <Load />
        </div>
      ) : (
        <>
          <InfoMation />
            <Navbar />
            <Hero />
            <About />
            <Country />
            <OurTeam />
            <Testomonial/>
            <OurUniversity />
            <Contact />
            <Location/>
            <Footer />
        </>
      )}
    </>
  );
}
