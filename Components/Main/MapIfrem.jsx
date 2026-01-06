import React from "react";

const MapIframe = () => {
  return (
    <div className="relative pb-[56.25%] w-full bg-gray-100">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.80404341216072!2d83.46420709367028!3d27.690576508908055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996878358ffd561%3A0xc930c65fe17e56e2!2sFame%20Education!5e0!3m2!1sne!2snp!4v1767701653882!5m2!1sne!2snp"
        className="absolute top-0 left-0 w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default MapIframe;
