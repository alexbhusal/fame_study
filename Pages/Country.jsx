import ContryCard from '@/Components/Main/ContryCard';
import React from 'react';


const Country = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-center font-bold text-2xl md:text-4xl  text-green-600">What is your preferred place to study?</h1>
      </div>
      <div className="">
        <ContryCard/>
      </div>
    </div>
  )
}

export default Country
