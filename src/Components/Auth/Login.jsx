"use client";
import React, { useState } from "react";
import { Link } from "react-router";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", form);
    alert("Login submitted!");
  };

  const card = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=600&q=80",
      title: "Eid Celebration",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black">
      {/* Left Side: Login Form */}
      <div className="md:w-1/2 rounded-3xl p-4  md:mt-4 md:mb-2 flex flex-col justify-center px-8 md:px-16 py-12 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-[#0D4444]">
          Welcome Back!
        </h2>
        <p className="mb-8 text-gray-600">
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

        {/* Register Bio / Link */}
        <p className="mt-4 text-sm text-gray-500">
          Don't have an account?{" "}
          <Link to="/register" className="text-yellow-400 hover:underline">
            Register here
          </Link>
        </p>
      </div>

      {/* Right Side: Image */}
      <div className="md:w-1/2">
        <img
          src={card[0].image}
          alt="Eid Celebration"
          className="w-full h-full object-cover p-4 rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Login;