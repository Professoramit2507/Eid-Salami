import React, { useState } from "react";
import { toast } from "react-toastify";

// Sample student data
const students = Array.from({ length: 31 }, (_, i) => ({
  id: i + 1,
  name: `Student ${i + 1}`,
  reg: `2023${(i + 1).toString().padStart(3, "0")}`,
  district: ["Dhaka", "Khulna", "Rajshahi", "Barisal", "Sylhet", "Rangpur"][i % 6],
  dept: "CSE",
  imageUrl: "https://img.icons8.com/?size=100&id=40dXvO4Lch3s&format=png&color=000000", // Placeholder image URL
}));

const Cse4 = () => {
  const [sentRequests, setSentRequests] = useState([]); // Track requests sent

  const handleRequestClick = (studentId) => {
    if (sentRequests.includes(studentId)) {
      toast.info("Request already sent 🔄");
      return;
    }

    // Show toast and mark request as sent
    toast.success("Request Sent ✅");
    setSentRequests([...sentRequests, studentId]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          CSE 04 Student List
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {students.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden"
            >
              {/* Student Image */}
              <img
                src={student.imageUrl}
                alt={student.name}
                className="w-full h-56 object-cover"
              />

              {/* Student Info */}
              <div className="p-6 text-center">
                <h2 className="text-lg font-semibold text-[#0D4444]">{student.name}</h2>
                <p className="text-gray-500 text-sm mb-4">{student.reg}</p>

                {/* Department and District */}
                <div className="flex justify-center gap-2 mb-3">
                  <span className="text-xs px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full">
                    {student.dept}
                  </span>

                  <span className="text-xs px-3 py-1 bg-green-100 text-green-600 rounded-full">
                    {student.district}
                  </span>
                </div>

                {/* Button to Send Request */}
                <button
                  onClick={() => handleRequestClick(student.id)}
                  className={`w-full mt-3 py-2 rounded-lg font-semibold transition ${
                    sentRequests.includes(student.id)
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-yellow-400 hover:bg-yellow-300"
                  }`}
                >
                  {sentRequests.includes(student.id) ? "✔ Request Sent" : "Send Request"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cse4;