import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import EidImg2 from "../../assets/image/Eid2.jpg";


const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === form.email &&
      storedUser.password === form.password
    ) {
      // save login state
      localStorage.setItem("isLoggedIn", true);
      console.log("Login data", form);

      toast.success("Login Successful 🎉");

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      toast.error("Invalid Email or Password ❌");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row mb-4 bg-black">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col rounded-3xl border-2 mr-2 justify-center items-center bg-[#0D4444] text-white text-center p-8">
        <p className="text-yellow-300 border p-2 rounded-2xl md:mb-14">
          Eidul Fitr 2026
        </p>
        <h1 className="text-4xl font-bold md:mb-10">
          ঈদের চাঁদ আকাশে, <br />
          <span className="text-yellow-500">সালামি পাঠান স্মার্টভাবে।</span>
        </h1>

        <img
          src={EidImg2}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
        <p className="text-md text-gray-300 mt-8">
          ঈদ মোবারক ২০২৬! এই ঈদে আমরা ডিজিটাল সালামি ব্যবস্থার মাধ্যমে সবার মাঝে
          ঈদের আনন্দ এবং শুভেচ্ছা পাঠাতে পারব। জয় হোক ঈদের এই নতুন সূচনা!
        </p>
      </div>

      {/* Right Side with Gradient Background */}
      <div className="md:w-1/2 rounded-3xl p-4 md:mt-4 md:mb-2 flex flex-col justify-center px-8 md:px-16 py-12 bg-gradient-to-r from-green-300 to-yellow-600">
        <h2 className="text-3xl font-bold mb-6 text-black">
          Welcome Back!
        </h2>

        <p className="mb-8 text-black">
          Login to your account to send and receive digital salami this Eid.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
            required
          />

          <button
            type="submit"
            className="w-full py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-lg transition-colors shadow-md"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-black">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;