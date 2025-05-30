"use client";
import React, { useEffect, useState } from "react";
import { getDocs, firestore, collection } from "../Utils/Firebase"
import TeamCard from "@/Components/Main/TeamCard";
import DataLoad from "@/Components/Animation/DataLoad";

const OurTeam = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDB = collection(firestore, "admin");
        const sData = await getDocs(userDB);
        const userData = sData.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUsers(userData);
      } catch (e) {
        console.error("Error fetching data:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return loading ? (
    <DataLoad/>
  ) : (
    <>
       <div className="">
        <h1 className="text-center text-sky-600  text-2xl md:text-4xl">Our Team</h1>
      </div>
    <div className="p-2 md:p-4">
        <TeamCard users={users}/> 
    </div>
    </>
  );
};

export default OurTeam;