const defaultImg =
  "https://res.cloudinary.com/dxdbrqanq/image/upload/v1745248025/cmwzp0fvevkvc4ypxmpc.png";

export default function Testimonials({ users }) {
  return (
    <>
      <div className="flex flex-col m-0.5  md:flex-row md:m-5  items-center justify-start gap-5 md:overflow-x-auto p-2 md:p-8">
        {users.map((user, index) => (
          <div
            key={user.id}
            className="border-4 border-sky-600 p-5 md:p-10 max-h-auto md:max-h-96 w-96 flex-shrink-0 rounded-3xl "
            data-aos="flip-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-delay={index * 600}
          >
            <div className="flex justify-center items-center mb-4">
              <img
                src={user.imgurl || defaultImg}
                alt={user.fullName || "Anonymous"}
                className="w-24 h-24 md:w-40 md:h-40 rounded-3xl object-cover"
              />
            </div>

            <div className="m-2">
              <h1 className="text-center text-lg md:text-2xl  ">
                {user.fullName}
              </h1>
              <h2 className="text-center text-base text-sky-700 md:text-xl font-serif">
                {user.VisaCountry || "VisaCountry"}
              </h2>
              <h3 className="text-center text-xs md:text-base  max-h-[100px] overflow-y-auto">
                "{user.Feedback || "No FeedBack"}"
              </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
