"use client";
import React, { useEffect, useState } from "react";
import { getDocs, firestore, collection } from "../Utils/Firebase";
import DataLoad from "@/Components/Animation/DataLoad";
import Testimonials from "@/Components/Main/TestomonialCard";

const Page = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDB = collection(firestore, "student");
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

  if (loading) return <DataLoad />;
  return (
    <>
      <div className="">
        <h1 className="text-center font-serif text-2xl md:text-4xl">Students FeedBack</h1>
      </div>
      <div className="">
        <Testimonials users={users} />
      </div>
    </>
  );
};

export default Page;
