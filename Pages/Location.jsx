import MapIframe from "@/Components/Main/MapIfrem";

const Location = () => {
  return (
    <>
      <div className="text-center text-3xl font-bold m-10" id="contact"></div>
      <div className="flex flex-col md:flex-row justify-center items-center m-10">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <div className="flex flex-col justify-center items-center md:items-center">
            <h2 className="text-xl md:text-3xl font-semibold mb-4 text-sky-600">
              Our Address
            </h2>
            <p className="mb-2 text-base md:text-2xl  ">
              Address: Fame Study Abroad
            </p>
            <p className="mb-2 text-base md:text-2xl">
              Location: Butwal-09, Milanchowk, Rupandehi, Nepal
            </p>
            <p className="mb-2 text-base md:text-2xl">
              <a href="tel:+97777420585">Phone: +977-9857072308</a>
            </p>
            <p className="text-base md:text-2xl">
              <a href="mailto:info@famestudyabroad.com.np">
                Email: info@famestudyabroad.com.np
              </a>
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <MapIframe />
        </div>
      </div>
    </>
  );
};

export default Location;
