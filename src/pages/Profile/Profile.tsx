import { useParams } from "react-router-dom";

const ProfileCard = () => {
  const { username } = useParams();
  const displayedUserName = username || "Devendra";
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 p-4 md:p-10 bg-gray-100">
        {/* Profile Image Section */}
        <div className="flex-shrink-0">
          <img
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Profile"
          />
        </div>

        {/* Profile Information Section */}
        <div className="bg-white text-gray-900 w-full md:w-3/5 border border-gray-300 rounded-lg shadow-md">
          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
            <h1 className="text-xl font-semibold">{displayedUserName}</h1>
            <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
              Edit Profile
            </button>
          </div>
          <div className="flex justify-around px-4 py-2 border-b border-gray-200">
            <p className="text-center">No Posts</p>
            <p className="text-center">Following</p>
            <p className="text-center">Followers</p>
          </div>
          <div className="px-4 py-5">
            <p>Club Gurinchi Telusuko......</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start gap-8  bg-grey-200">
        <div className="flex  w-full justify-evenly md:w-full border-b  ">
          <button className=" font-semibold flex-1 bg-black-500 text-black px-4 py-2 mx-1 rounded-lg hover:bg-gray-900 hover:text-white transition-colors">
            Core Committee
          </button>
          <button className=" font-semibold flex-1 bg-black-500 text-black px-4 py-2 mx-1 rounded-lg hover:bg-gray-900 hover:text-white transition-colors">
            Coordinators
          </button>
          <button className="font-semibold flex-1 bg-black-500 text-black px-4 py-2 mx-1 rounded-lg hover:bg-gray-900 hover:text-white transition-colors">
            Events
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
