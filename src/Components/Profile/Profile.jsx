import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  // Load user data from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 bg-gradient-to-r from-blue-100 to-purple-200">
        <div className="bg-white px-6 py-4 rounded-xl shadow-lg animate-pulse">
          Please login to view your profile.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md transform transition-transform hover:scale-105 duration-300">
        {/* Profile Header */}
        <div className="text-center">
          <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg mb-4">
            <img
              src={user.image || "/default-profile.png"}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-indigo-600 font-semibold mt-1">{user.department} Department</p>
        </div>

        {/* Basic Info */}
        <div className="mt-8 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-100 p-4 rounded-xl shadow-inner">
          <h3 className="text-lg font-bold text-yellow-800 mb-3 border-b pb-2">Basic Information</h3>
          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-semibold">Registration:</span> {user.registration}
            </p>
            <p>
              <span className="font-semibold">District:</span> {user.district}
            </p>
            <p>
              <span className="font-semibold">Batch:</span> {user.batch}
            </p>
            <p>
              <span className="font-semibold">Session:</span> {user.session}
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-6 bg-gradient-to-r from-green-100 via-green-200 to-green-100 p-4 rounded-xl shadow-inner">
          <h3 className="text-lg font-bold text-green-800 mb-3 border-b pb-2">Contact Information</h3>
          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            {user.phone && (
              <p>
                <span className="font-semibold">Phone:</span> {user.phone}
              </p>
            )}
            {user.github && (
              <p>
                <span className="font-semibold">GitHub:</span> <a href={user.github} target="_blank" className="text-blue-600 hover:underline">{user.github}</a>
              </p>
            )}
            {user.linkedin && (
              <p>
                <span className="font-semibold">LinkedIn:</span> <a href={user.linkedin} target="_blank" className="text-blue-600 hover:underline">{user.linkedin}</a>
              </p>
            )}
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default Profile;