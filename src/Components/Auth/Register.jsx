"use client";
import React, { useState } from "react";
import { Link } from "react-router";


const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    batch: "",
    department: "CSE",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register data:", form);
    alert("Registration submitted!");
  };

  const card = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5x6RLX2jbAUG-X3gc9eoI1CrwRX8OTM1cRw&s",
      title: "Eid Mubarak Wishes",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side: Form */}
      <div className="md:w-1/2 flex flex-col  rounded-3xl p-4 justify-center px-8 md:px-16 py-12 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-[#0D4444]">
          Eid Mubarak! Register Now
        </h2>
        <p className="mb-8 text-gray-600">
          Join the Digital Salami System to send blessings and receive Eid joy
          from seniors and juniors.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
            required
          />

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

          <select
            name="batch"
            value={form.batch}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
            required
          >
            <option value="">Select Batch (1-7)</option>
            {[1, 2, 3, 4, 5, 6, 7].map((b) => (
              <option key={b} value={b}>
                Batch {b}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="department"
            value={form.department}
            readOnly
            className="w-full px-4 py-3 border rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
          />

          <button
            type="submit"
            className="w-full py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-lg transition-colors shadow-md"
          >
            Register
          </button>
        </form>

        {/* Login Bio / Link */}
        <p className="mt-4 text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-yellow-400 hover:underline">
            Login here
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

export default Register;