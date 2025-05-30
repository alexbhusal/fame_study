// import ContryCard from '@/Components/Main/ContryCard';
// import React from 'react';


// const Country = () => {
//   return (
//     <div>
//       <div className="">
//         <h1 className="text-center font-bold text-2xl md:text-4xl  text-green-600">What is your preferred place to study?</h1>
//       </div>
//       <div className="">
//         <ContryCard/>
//       </div>
//     </div>
//   )
// }

// export default Country;


"use client";
import React, { useEffect, useState } from "react";
import { getDocs, firestore, collection } from "../Utils/Firebase"
import DataLoad from "@/Components/Animation/DataLoad";
import ContryCard from "@/Components/Main/ContryCard";

const Country = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDB = collection(firestore, "country");
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
    <div  className="p-4 md:p-10">
       <div >
        <h1 className="text-center  text-2xl md:text-4xl  text-sky-600">What is your preferred place to study?</h1>
       </div>
    <div>
        <ContryCard CountryData={users}/> 
    </div>
    </div>
  );
};

export default Country;

