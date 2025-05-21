"use client";
import Load from "@/Components/Animation/Load";
import Under from "@/Components/Animation/UnderDevlop";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

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
          <div className="flex justify-center items-center h-screen">
            <Under />
          </div>
        </>
      )}
    </>
  );
}
