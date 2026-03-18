import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router"; // Note: Usually it's 'react-router-dom' in modern React apps
import Eid from "../../assets/image/images.jpg";

const Navbar = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const profileRef = useRef(null);

  // Load user from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);

    const handleStorage = () => {
      const updatedUser = JSON.parse(localStorage.getItem("user"));
      setUser(updatedUser);
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // Close profile dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setUser(null);
    setMenuOpen(false);
    setProfileOpen(false);
    navigate("/");
  };

  const handleRequestClick = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) navigate("/register");
    else navigate("/requests");
    setMenuOpen(false);
  };

  const handleSalamiClick = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) navigate("/register");
    else navigate("/salami");
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-fuchsia-600 to-green-500 font-bold text-white px-4 md:px-8 py-3 flex justify-between text-xl  items-center relative shadow-lg z-50">
      {/* Logo */}
      <Link 
        to="/" 
        className="flex gap-3 items-center group hover:scale-105 transition-transform duration-300"
      >
        <img 
          src={Eid} 
          alt="Logo" 
          className="w-11 h-11 rounded-full border-2 border-white/50 shadow-sm group-hover:border-white transition-all" 
        />
        <div className="text-xl md:text-2xl font-extrabold tracking-tight drop-shadow-md">
         <span className="text-green-600">Salami</span>
          <span className="text-yellow-300">System</span>
        </div>
      </Link>

      {/* Hamburger */}
      <button
        className="md:hidden text-2xl p-2 rounded-lg bg-white/10 hover:bg-white/20 focus:outline-none transition-colors"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Menu */}
      <div
        className={`w-full md:w-auto absolute md:static left-0 text-black top-full transition-all duration-300 ease-in-out overflow-hidden md:overflow-visible ${
          menuOpen ? "max-h-[400px] bg-fuchsia-400 md:bg-transparent shadow-xl md:shadow-none" : "max-h-0"
        } md:max-h-full z-40`}
      >
        <ul className="flex flex-col md:flex-row md:items-center p-4 md:p-0 gap-2 md:gap-4 font-medium">
          <Link to="/">
            <li
              className="px-4 py-2 rounded-lg hover:bg-white/20 hover:shadow-sm transition-all duration-300 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </li>
          </Link>

          <Link to="/dashboard">
            <li
              className="px-4 py-2 rounded-lg hover:bg-white/20 hover:shadow-sm transition-all duration-300 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Dashboard
            </li>
          </Link>

          <li
            onClick={handleSalamiClick}
            className="px-4 py-2 rounded-lg hover:bg-white/20 hover:shadow-sm transition-all duration-300 cursor-pointer"
          >
            Give Salami
          </li>

          <li
            onClick={handleRequestClick}
            className="px-4 py-2 rounded-lg hover:bg-white/20 hover:shadow-sm transition-all duration-300 cursor-pointer"
          >
            Requests
          </li>

          {user && user.batch && (
            <li className="bg-yellow-500 backdrop-blur-md border border-blue-600  text-purple-500 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm w-fit my-2 md:my-0 ml-2">
              Batch {user.batch}
            </li>
          )}

          {/* Profile */}
          <li className="relative md:ml-2 mt-2 md:mt-0" ref={profileRef}>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center justify-center w-10 h-10 bg-white/10 border border-white/20 rounded-full hover:bg-white/30 transition-all duration-300 cursor-pointer shadow-sm"
            >
              <span className="text-lg">👤</span>
            </button>

            {/* Dropdown */}
            {profileOpen && (
              <div 
              // className="absolute right-0 md:right-0 left-4 md:left-auto mt-3 bg-white text-gray-800 rounded-xl shadow-2xl w-48 z-50 overflow-hidden border border-gray-100 transform origin-top-right transition-all animate-fade-in-down"
              className="md:absolute md:flex md:flex-col flex flex-row right-0 mt-2 bg-white text-black rounded shadow-md md:w-60 gap-4 z-50"
              >
                <Link to="/myProfile">
                  <div className="md:px-4 md:py-3 hover:bg-violet-50 hover:text-violet-600 font-medium cursor-pointer 
                   transition-colors border-b border-gray-50 flex items-center md:gap-2
                  ">
                    <span>⚙️</span> Profile
                  </div>
                </Link>

                {user && user.batch && (
                  <Link to={`/cse${user.batch}`}>
                    <div className="md:px-4 md:py-3 hover:bg-violet-50 hover:text-violet-600 font-medium cursor-pointer transition-colors border-b border-gray-50 flex items-center md:gap-2">
                      <span>🎓</span> Batch Info
                    </div>
                  </Link>
                )}

                <div
                  onClick={handleLogout}
                  className="md:px-4 md:py-3 hover:bg-red-50 text-red-500 font-medium cursor-pointer transition-colors flex items-center md:gap-2"
                >
                  <span>🚪</span> Logout
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;