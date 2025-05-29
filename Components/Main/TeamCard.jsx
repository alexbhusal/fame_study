const defaultImg ="https://res.cloudinary.com/dxdbrqanq/image/upload/v1745248025/cmwzp0fvevkvc4ypxmpc.png";

export default function TeamCard({ users }) {
  return (
    <div className="flex flex-wrap gap-4">
      {users.map((user) => (
        <div
          key={user.id}
          className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm p-5"
        >
          <div className="flex flex-col items-center pb-10">
            <img
              className="h-14 w-auto md:w-28 md:h-28 object-cover rounded-3xl"
              src={user.imgurl || defaultImg}
              alt={user.fullName}
              width={96}
              height={96}
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900">
              {user.fullName}
            </h5>
            <span className="text-base text-gray-500">{user.designation}</span>
            <div className="flex flex-col mt-4 md:mt-6">
              <a
                href={`tel:+977${user.mobileNumber || "MobileNumberNotFound"}`}
                className=" items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                +977-{user.mobileNumber || "MobileNumberNotFound"}
              </a>
              <a
                href={`mailto:${user.email || "EmailNotFound"}`}
                className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
              >
                {user.email || "EmailNotFound"}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
