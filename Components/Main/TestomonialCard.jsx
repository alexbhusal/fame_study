const defaultImg =
  "https://res.cloudinary.com/dxdbrqanq/image/upload/v1745248025/cmwzp0fvevkvc4ypxmpc.png";

export default function Testimonials({ users }) {
  return (
    <div className="grid gap-6 mb-8 border border-gray-200 rounded-lg shadow-xs md:mb-12 md:grid-cols-2 bg-white p-4">
      {users.map((user) => (
        <figure
          key={user.id}
          className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-lg"
        >
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500">
            <h1 className="text-lg font-semibold text-gray-900">
              {user.VisaCountry || "VisaCountry"}
            </h1>
            <h3 className="text-lg font-semibold text-gray-900">
              {user.VisaGrantDate || "VisaGrantDate"}
            </h3>
            <p className="my-4">{user.Feedback || "No message provided."}</p>
          </blockquote>
          <figcaption className="flex items-center justify-center">
            <img
               className="h-10 w-auto md:w-32 md:h-32 object-cover rounded-2xl"
              src={user.imgurl || defaultImg}
              alt={user.fullName || "Anonymous"}
            />
            <div className="space-y-0.5 font-medium text-left ms-3">
              <div>{user.fullName || "Anonymous"}</div>
              <div className="text-sm text-gray-500 w-32 overflow-x-hidden">
                {user.email || "EmailNotFound"}
              </div>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
