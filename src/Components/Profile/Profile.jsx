import React from "react";
import Mine  from "../../assets/image/Mine.JPG"

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        
        {/* Profile Header */}
        <div className="text-center">
          <img
            src={Mine}
            alt="profile"
            className="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800">Amit Mahmud Amil</h2>
          {/* <p className="text-blue-500 font-medium">Dept : CSE</p> */}
        </div>

        {/* Basic Info */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold  text-blue-600 mb-2">
            Basic Information
          </h3>

          <div className="space-y-1 text-gray-600">
            <p><span className="font-semibold">Registration:</span> 202104024</p>
            <p><span className="font-semibold">Department:</span> CSE</p>
            <p><span className="font-semibold">District:</span> Dhaka</p>
            <p><span className="font-semibold">Session:</span> 2021-22</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-blue-600 font-semibold mb-2">
            Contact Information
          </h3>

          <div className="space-y-1 text-gray-600">
            <p><span className="font-semibold">Email:</span> amitmahmud846@gmail.com</p>
            <p><span className="font-semibold">Phone:</span> 01533706729</p>
            <p><span className="font-semibold">GitHub:</span> github.com/yourname</p>
            <p><span className="font-semibold">LinkedIn:</span> linkedin.com/in/yourname</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;