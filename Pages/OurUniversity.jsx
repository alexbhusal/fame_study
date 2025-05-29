import React from 'react';
const girlPic="https://res.cloudinary.com/dxdbrqanq/image/upload/v1748516100/ix44akp3teku7ipeggad.png";
const imgUrl="https://res.cloudinary.com/dxdbrqanq/image/upload/v1748514878/bdytnzpnrpdhfxlpznis.jpg";
 const img1="https://res.cloudinary.com/dxdbrqanq/image/upload/v1748515169/lp9j0dp3nahgdw1bncdf.png";
 const img2="https://res.cloudinary.com/dxdbrqanq/image/upload/v1748515193/rmyvioay75lbhssnb8jj.png";
 const img3="https://res.cloudinary.com/dxdbrqanq/image/upload/v1748515212/o3133rudzktm7b7pibnv.png";


const OurUniversity = () => {
  return (<>
   <div className="">
        <h1 className="text-center font-serif text-2xl md:text-4xl"> Institutions We Represent </h1>
      </div>
     <div className='p-10 flex '>
      <div className="max-h-[700PX] overflow-y-scroll">
        <img src={img1} alt="uni1" />
        <img src={img2} alt="uni2" />
        <img src={img3} alt="uni3" />
      </div>
      <div className="hidden md:block max-h-[700PX] overflow-hidden">
        <img src={girlPic} className='' alt="" />
      </div>
    </div>
    </>
  )
}

export default OurUniversity;
