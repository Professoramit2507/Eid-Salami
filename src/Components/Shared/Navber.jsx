import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to={"/"}>
        <div className="text-xl font-bold">SalamiSystem</div>
      </Link>

      {/* Menu */}
      <ul className="flex gap-6 items-center">
        <Link to={"/"}>
          <li className="cursor-pointer hover:text-yellow-300">Home</li>
        </Link>

       <Link to={"/register"}>
         <li className="cursor-pointer hover:text-yellow-300">Give Salami</li>
       </Link>

        <Link to={"/register"}>
          <li className="cursor-pointer hover:text-yellow-300">Requests</li>
        </Link>

        {/* Notification */}
        <li className="relative cursor-pointer">
          🔔
          <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-1 rounded-full">
            3
          </span>
        </li>

        {/* Profile Dropdown */}
        <li className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="cursor-pointer"
          >
            👤
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-3 bg-white text-black rounded shadow-md w-40 z-50">
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Profile
              </div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                My Batch Info
              </div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Settings
              </div>
              <div className="px-4 py-2 hover:bg-red-100 text-red-600 cursor-pointer">
                Logout
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
