import React from 'react';
import { CountryData } from '@/Utils/Data';

const ContryCard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10">
        {CountryData.map((country, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <img src={country.imgUrl} alt={country.cName} className="w-full h-48 object-cover rounded-t-lg" />
                <h2 className="text-2xl font-bold mt-4 text-center ">{country.cName}</h2>
                <p className="text-gray-600 mt-2 text-justify">{country.description}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ContryCard
