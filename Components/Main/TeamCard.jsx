const defaultImg =
  "https://res.cloudinary.com/dxdbrqanq/image/upload/v1745248025/cmwzp0fvevkvc4ypxmpc.png";

export default function TeamCard({ users }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 p-4 sm:p-6 md:p-8 w-full">
      {users.map((user, index) => (
        <div
          key={user.id}
          className="w-full bg-white border border-gray-200 rounded-xl shadow-md transition hover:shadow-lg"
          data-aos="flip-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay={index * 500}
        >
          <div className="flex flex-col items-center p-6">
            <img
              className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 object-cover rounded-full shadow-sm mb-4"
              src={user.imgurl || defaultImg}
              alt={user.fullName}
            />
            <h5 className="text-lg md:text-xl font-semibold text-gray-900 text-center">
              {user.fullName}
            </h5>
            <span className="text-sm md:text-base text-gray-500 text-center">
              {user.designation}
            </span>
            <div className="flex flex-col gap-2 mt-4 w-full max-w-96 overflow-x-hidden">
              <a
                href={`tel:+977${user.mobileNumber || ""}`}
                className="block text-center px-4 py-2 text-sm font-medium text-white bg-sky-600 rounded-lg hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-300"
              >
                +977-{user.mobileNumber || "Not Available"}
              </a>
              <a
                href={`mailto:${user.email || ""}`}
                className="block  text-center px-4 py-2 text-sm font-medium text-sky-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-200"
              >
                {user.email || "Email Not Available"}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
