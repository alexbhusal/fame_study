import ContactUs from "@/Components/Animation/Contactus";
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="flex justify-center items-center p-2 md:p-10">
        <h1 className="text-3xl md:text-5xl text-sky-600 ">Contact Us</h1>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-8/12">
          <ContactUs />
        </div>
        <div className="border-r-4 border-sky-600" data-aos="zoom-out"></div>
        <div className="w-full md:w-4/12 mt-12">
          <div className="flex justify-center items-center">
            <form 
              action={process.env.NEXT_PUBLIC_Action_URL}
              method="post"
            >
              <div>
                <input
                  type="hidden"
                  name="access_key"
                  value={process.env.NEXT_PUBLIC_FORM_API_KEY}
                />
              </div>
              
              <div className="input-group py-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="text-lg sm:text-2xl focus:outline-none focus:ring-2 focus:ring-sky-600 w-full sm:w-72 border-2 border-sky-600 p-3 rounded-full"
                  required
                />
              </div>

              <div className="input-group py-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="text-lg sm:text-2xl focus:outline-none focus:ring-2 focus:ring-sky-600 w-full sm:w-72 border-2 border-sky-600 p-3 rounded-full"
                  required
                />
              </div>

              {/* Textarea for message */}
              <div className="input-group py-4">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="text-lg sm:text-2xl focus:outline-none focus:ring-2 focus:ring-sky-600 w-full sm:w-72 border-2 border-sky-600 p-3 rounded-xl"
                  rows="4"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="mx-16 font-semibold py-1 bg-sky-600 text-white px-4 text-lg md:text-2xl rounded-3xl"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
