import React from "react";
// const ImgPic="https://res.cloudinary.com/dxdbrqanq/image/upload/v1748612279/oxv4svtm0yn5ocfjam54.png";
const ImgPic="https://res.cloudinary.com/dxdbrqanq/image/upload/v1748611676/uob3jixogigzgnpg15lj.png";
const About = () => {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-center text-2xl md:text-4xl text-sky-600 font-bold mb-6">
        About Fame
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 max-h-auto md:max-h-600px overflow-hidden">
        <div className="hidden md:block md:w-5/12">
          <img
            
            src={ImgPic}
            alt="Girl pointing to text"
            className="w-auto  max-h-[600px] overflow-hidden object-cover"
          />
        </div>

        <div className="w-full md:w-7/12 max-h-[700px] overflow-hidden" data-aos="zoom-out-up" data-aos-delay="200">
          <div className=" p-4 md:p-14 rounded ">
            <p className="text-justify text-sm md:text-xl leading-relaxed">
              <strong>Fame Study Abroad</strong> is a trusted global education consultancy dedicated
              to empowering students to achieve their dreams of studying abroad.
              With a commitment to excellence and personalized service, we guide
              aspiring scholars through every step of their international education
              journey — from selecting the right course and university to visa
              processing and pre-departure support.
              <br />
              <br />
              Our experienced team stays up-to-date with the latest international
              education trends and maintains strong partnerships with leading
              universities and institutions across countries such as the UK, USA,
              Canada, Australia, Europe, and beyond. Whether you're looking to
              pursue undergraduate, postgraduate, or professional qualifications,
              Fame Study Abroad is here to help you make informed decisions that
              align with your goals and aspirations.
              <br />
              <br />
              At Fame, we believe education opens doors to global opportunities.
              Let us help you take the first step toward a brighter future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
