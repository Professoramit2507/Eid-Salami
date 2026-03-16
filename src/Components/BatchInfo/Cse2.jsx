import React, { useState } from "react";
import { toast } from "react-toastify";
import Img from "../../assets/image/esma-qAiVTOBRUHU-unsplash.jpg"

// Sample data for students
const studentData = Array.from({ length: 26 }, (_, i) => ({
  id: i + 1,
  name: `Student ${i + 1}`,
  description: "A passionate student from CSE2, eager to learn and contribute.",
  regNo: `CSE2-${1000 + i + 1}`,
  imageUrl: "https://img.icons8.com/?size=100&id=23309&format=png&color=000000"
}));

const Cse2 = () => {
  const [sentRequests, setSentRequests] = useState([]); // Track which requests are sent

  const handleRequestClick = (studentId) => {
    if (sentRequests.includes(studentId)) {
      toast.info("Request already sent 🔄");
      return;
    }

    // Simulate sending a request and show a toast message
    toast.success("Request Sent ✅");

    // Update the state to reflect that the request has been sent
    setSentRequests([...sentRequests, studentId]);
  };

  return (
    <div className="p-10 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#0D4444]">🎓 CSE2 Students List</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {studentData.map((student) => (
          <div
            key={student.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden"
          >
            {/* Image */}
            <img
              src={student.imageUrl}
              alt={student.name}
              className="w-full h-56 object-cover"
            />

            {/* Card Content */}
            <div className="p-4">
              {/* Student Name and Registration Number */}
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">{student.name}</h2>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-2">{student.description}</p>

              {/* Registration Number */}
              <p className="text-gray-500 text-xs mt-2">{student.regNo}</p>

              {/* Request Sent Button */}
              <button
                onClick={() => handleRequestClick(student.id)}
                className={`w-full mt-3 py-2 rounded-lg font-semibold transition ${
                  sentRequests.includes(student.id)
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-yellow-400 hover:bg-yellow-300"
                }`}
              >
                {sentRequests.includes(student.id)
                  ? "✔ Request Sent"
                  : "Send Request"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cse2;