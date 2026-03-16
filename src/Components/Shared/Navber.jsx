import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import Eid from "../../assets/image/images.jpg"

const Navbar = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  // Watch localStorage changes
  useEffect(() => {
    const checkUser = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
    };

    checkUser();
    window.addEventListener("storage", checkUser);
    return () => window.removeEventListener("storage", checkUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const handleRequestClick = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/register");
    } else {
      navigate("/requests");
    }
  };

  return (
    <nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/">
      
        <div className="flex gap-1">
            <img src={Eid} alt=""
        className="w-10 h-10"
      />
        <div className="text-xl font-bold mt-2">SalamiSystem
        </div>
        </div>
      </Link>

      {/* Menu */}
      <ul className="flex gap-6 items-center">
        <Link to="/">
          <li className="cursor-pointer hover:text-yellow-300">Home</li>
        </Link>

        <Link to="/dashboard">
          <li className="cursor-pointer hover:text-yellow-300">Admin Dashboard</li>
        </Link>

        <Link to="/register">
          <li className="cursor-pointer hover:text-yellow-300">Give Salami</li>
        </Link>

        {/* Requests */}
        <li
          onClick={handleRequestClick}
          className="cursor-pointer hover:text-yellow-300"
        >
          Requests
        </li>

        {/* Batch Show */}
        {user && user.batch && (
          <li className="bg-yellow-400 text-black px-3 py-1 rounded font-semibold">
            Batch {user.batch}
          </li>
        )}

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
              
              <Link to="/myProfile">
                <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </div>
              </Link>

              {/* Dynamic My Batch Info */}
              {user && user.batch && (
                <Link to={`/cse${user.batch}`}>
                  <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    My Batch Info
                  </div>
                </Link>
              )}

              <div
                onClick={handleLogout}
                className="px-4 py-2 hover:bg-red-100 text-red-600 cursor-pointer"
              >
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