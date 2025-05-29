const defaultImg =
  "https://res.cloudinary.com/dxdbrqanq/image/upload/v1745248025/cmwzp0fvevkvc4ypxmpc.png";

export default function Testimonials({ users }) {
  return (
    <>

        <div className="flex flex-col m-0.5  md:flex-row md:m-5  items-center justify-start gap-5 overflow-x-auto p-10">
          {users.map((user, index) => (
            <div
              className="border-4 border-black p-10 max-h-auto md:max-h-96 w-96 flex-shrink-0 rounded-3xl "  data-aos="fade-in"
              key={index}
            >
              <div className="flex justify-center items-center mb-4">
                <img
                  src={user.imgurl || defaultImg}
                  alt={user.fullName || "Anonymous"}
                  className="w-40 h-40 rounded-3xl object-cover"
                />
              </div>

              <div className="m-2">
                <h1 className="text-center text-2xl  font-bold">{user.fullName}</h1>
                <h2 className="text-center text-xl font-semibold">
                  {user.VisaCountry || "VisaCountry"}
                </h2>
                <h3 className="text-center text-sm  max-h-[100px] overflow-y-auto">"{user.Feedback|| "No FeedBack"}"</h3>
              </div>
            </div>
          ))}
        </div>

    </>
  );
};





{/* {users.map((user) => (
        <figure
          key={user.id}
          className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-lg"
        >
          <figcaption className="flex items-center justify-center">
            <img
               className="h-12 w-auto md:w-32 md:h-32 object-cover rounded-2xl"
              src={user.imgurl || defaultImg}
              alt={user.fullName || "Anonymous"}
            />
            <div className="space-y-0.5 font-medium text-left ms-3">
              <div>{user.fullName || "Anonymous"}</div>
              <div className="text-sm text-gray-500 w-48 overflow-x-hidden">
                {user.email || "EmailNotFound"}
              </div>
            </div>
          </figcaption>
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500">
            <h1 className="text-lg font-semibold text-gray-900">
               {user.VisaCountry || "VisaCountry"}
            </h1>
            <h3 className="text-lg font-semibold text-gray-900">
              Intake {user.VisaGrantDate || "VisaGrantDate"}
            </h3>
            <p className="my-4">{user.Feedback || "No message provided."}</p>
          </blockquote>
        </figure>
      ))}*/}