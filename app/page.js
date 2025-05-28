"use client";
import Load from "@/Components/Animation/Load";
import Footer from "@/Components/Main/Footer";
import InfoMation from "@/Components/Main/InfoMation";
import Navbar from "@/Components/Main/NavBar";
import Hero from "@/Pages/Hero";
import OurTeam from "@/Pages/OurTeam";
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
    useEffect(() => {
    setTimeout(() => {
      router.push("/notready");
    }, 12000);
  }, []);

  return (
    <>
      {loading ? (
        <div className=" flex justify-center items-center h-screen">
          <Load />
        </div>
      ) : (
        <>
          {/* <div className="flex justify-center items-center h-screen"> */}
            {/* <Under /> */}
          {/* </div> */}
          <InfoMation />
            <Navbar />
            <Hero />
            <OurTeam />
            <Testomonial/>
            <Footer />
            
        </>
      )}
    </>
  );
}
