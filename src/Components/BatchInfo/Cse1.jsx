import React, { useState } from "react";
import { toast } from "react-toastify";
import Eid from "../../assets/image/eid.jpg";
import ProductCard from "./ProductCard";

const Cse1 = () => {
  const initialStudents = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    name: `Student ${i + 1}`,
    regNo: `CSE1-${1000 + i + 1}`,
    dept: "CSE",
    district: "Dhaka",
  }));

  const [students] = useState(initialStudents);
  const [sentRequests, setSentRequests] = useState([]);

  const handleSendRequest = (student) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      toast.error("Login first ❌");
      return;
    }

    const storedRequests = JSON.parse(localStorage.getItem("requests")) || [];

    const existing = storedRequests.find(
      (r) => r.from === `Batch ${storedUser.batch}` && r.to === student.name
    );

    if (existing) {
      toast.info("Request already sent 🔄");
      return;
    }

    const newRequest = {
      from: `Batch ${storedUser.batch} - ${storedUser.name || "You"}`,
      to: student.name,
      status: "Pending",
      regNo: student.regNo,
      dept: student.dept,
      district: student.district,
      timestamp: new Date().toISOString(),
    };

    storedRequests.push(newRequest);
    localStorage.setItem("requests", JSON.stringify(storedRequests));

    toast.success("Request Sent ✅");

    setSentRequests([...sentRequests, student.id]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#0D4444]">
        🎓 CSE1 Students List
      </h1>

      {/* <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden"
          >
          
            <div className="bg-gradient-to-r from-green-400 to-blue-500 h-24 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 top-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-2xl font-bold text-gray-800 shadow-md">
                  {student.name.charAt(0)}
                </div>
              </div>
            </div>

          
            <div className="pt-16 pb-6 px-6 text-center">
              <h2 className="text-lg font-semibold text-[#0D4444]">{student.name}</h2>
              <p className="text-gray-500 text-sm mb-4">{student.regNo}</p>

              <div className="flex justify-center gap-2 mb-3">
                <span className="text-xs px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full">
                  {student.dept}
                </span>

                <span className="text-xs px-3 py-1 bg-green-100 text-green-600 rounded-full">
                  {student.district}
                </span>
              </div>

              <button
                onClick={() => handleSendRequest(student)}
                className={`w-full mt-3 py-2 rounded-lg font-semibold transition ${
                  sentRequests.includes(student.id)
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-yellow-400 hover:bg-yellow-300 hover:scale-105"
                }`}
              >
                {sentRequests.includes(student.id)
                  ? "✔ Request Sent"
                  : "Send Request"}
              </button>
            </div>
          </div>
        ))}
      </div> */}

      <ProductCard></ProductCard>
    </div>
  );
};

export default Cse1;