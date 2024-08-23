import { useParams } from "react-router-dom";

const ClubProfileCard = () => {
  const { username } = useParams();
  const displayedUserName = username || "Devendra";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Background Image */}
      <div
        className="relative h-48 md:h-64 bg-cover bg-center rounded-t-lg"
        style={{
          backgroundImage:
            "url(https://vbithyd.ac.in/wp-content/uploads/2022/12/IETE.jpg)",
        }}
      >
        {/* Profile Image Section */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <img
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover border-4 border-white shadow-lg"
            src="https://www.sia-india.com/wp-content/uploads/2022/06/IETE.jpg"
            alt="Profile"
          />
        </div>
      </div>

      {/* Profile Information Section */}
      <div className="bg-white text-gray-900 w-full md:w-4/5 lg:w-3/5 border border-gray-300 rounded-lg shadow-md mt-4 mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 py-3 border-b border-gray-200">
          <h1 className="text-xl font-semibold">{displayedUserName}</h1>
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors mt-4 md:mt-0">
            Edit Profile
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-around px-4 py-2 border-b border-gray-200">
          <p className="text-center">No Posts</p>
          <p className="text-center">Following</p>
          <p className="text-center">Followers</p>
        </div>
        <div className="px-4 py-5">
          <p>Club Gurinchi Telusuko......</p>
        </div>
      </div>

      {/* Additional Content to Ensure Scrolling */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 bg-gray-200 mt-4">
        <div className="flex w-full justify-evenly md:w-full border-b">
          <button className="font-semibold flex-1 bg-gray-500 text-black px-4 py-2 mx-1 rounded-lg hover:bg-gray-900 hover:text-white transition-colors">
            Core Committee
          </button>
          <button className="font-semibold flex-1 bg-gray-500 text-black px-4 py-2 mx-1 rounded-lg hover:bg-gray-900 hover:text-white transition-colors">
            Coordinators
          </button>
          <button className="font-semibold flex-1 bg-gray-500 text-black px-4 py-2 mx-1 rounded-lg hover:bg-gray-900 hover:text-white transition-colors">
            Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClubProfileCard;
