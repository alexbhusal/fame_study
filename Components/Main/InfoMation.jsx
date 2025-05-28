import React from 'react';
import { CiMail } from "react-icons/ci";
import { GrMapLocation } from "react-icons/gr";

const InfoMation = () => {
  return (
    <div className='hidden  h-10 bg-blue-500 md:flex items-center justify-between px-6'>

      {/* Contact Info */}
      <div className="flex items-center gap-10">
        <a href="mailto:info@famestudyabroad.com.np" className="flex items-center text-sm md:text-base text-white gap-2 hover:underline">
          <CiMail size={20} />
          info@famestudyabroad.com.np
        </a>
        <div className="border-l-2 border-white h-6" />
        <a href="#" className="flex text-sm md:text-base items-center text-white gap-2 hover:underline">
          <GrMapLocation size={20} />
          Butwal-09, Milanchowk, Rupandehi, Nepal
        </a>
      </div>
    </div>
  );
};

export default InfoMation;
