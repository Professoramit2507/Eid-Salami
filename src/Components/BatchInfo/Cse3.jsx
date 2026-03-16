import React, { useState } from "react";
import { toast } from "react-toastify";

// Sample student data with image URL
const students = [
  { id: 1, name: "Student 1", reg: "2023001", district: "Dhaka", dept: "CSE", 
    imageUrl: "https://img.icons8.com/?size=100&id=42349&format=png&color=000000" },
  { id: 2, name: "Student 2", reg: "2023002", district: "Khulna", dept: "CSE",  imageUrl: "https://img.icons8.com/?size=100&id=42349&format=png&color=000000" },
  { id: 3, name: "Student 3", reg: "2023003", district: "Rajshahi", dept: "CSE",  imageUrl: "https://img.icons8.com/?size=100&id=42349&format=png&color=000000" },
  { id: 4, name: "Student 4", reg: "2023004", district: "Barisal", dept: "CSE",  imageUrl: "https://img.icons8.com/?size=100&id=42349&format=png&color=000000" },
  { id: 5, name: "Student 5", reg: "2023005", district: "Sylhet", dept: "CSE",  imageUrl: "https://img.icons8.com/?size=100&id=42349&format=png&color=000000" },
  { id: 6, name: "Student 6", reg: "2023006", district: "Rangpur", dept: "CSE",  imageUrl: "https://img.icons8.com/?size=100&id=42349&format=png&color=000000" },
  { id: 7, name: "Student 7", reg: "2023007", district: "Dhaka", dept: "CSE",  imageUrl: "https://img.icons8.com/?size=100&id=42349&format=png&color=000000" },
  { id: 8, name: "Student 8", reg: "2023008", district: "Khulna", dept: "CSE",  imageUrl: "https://img.icons8.com/?size=100&id=42349&format=png&color=000000" },
  { id: 9, name: "Student 9", reg: "2023009", district: "Rajshahi", dept: "CSE",  imageUrl: "https://img.icons8.com/?size=100&id=42349&format=png&color=000000" },
  { id: 10, name: "Student 10", reg: "2023010", district: "Barisal", dept: "CSE",  imageUrl: "https://img.icons8.com/?size=100&id=42349&format=png&color=000000" },
  { id: 11, name: "Student 11", reg: "2023011", district: "Sylhet", dept: "CSE",  imageUrl: "https://img.icons8.com/?size=100&id=42349&format=png&color=000000" },
  { id: 12, name: "Student 12", reg: "2023012", district: "Rangpur", dept: "CSE",  imageUrl: "https://img.icons8.com/?size=100&id=42349&format=png&color=000000" },
  { id: 13, name: "Student 13", reg: "2023013", district: "Dhaka", dept: "CSE",  imageUrl: "https://img.icons8.com/?size=100&id=42349&format=png&color=000000" },
  { id: 14, name: "Student 14", reg: "2023014", district: "Khulna", dept: "CSE",  imageUrl: "https://img.icons8.com/?size=100&id=42349&format=png&color=000000" },
  { id: 15, name: "Student 15", reg: "2023015", district: "Rajshahi", dept: "CSE",  imageUrl: "https://img.icons8.com/?size=100&id=42349&format=png&color=000000" },
  { id: 16, name: "Student 16", reg: "2023016", district: "Barisal", dept: "CSE",  imageUrl: "https://img.icons8.com/?size=100&id=42349&format=png&color=000000" },
  { id: 17, name: "Student 17", reg: "2023017", district: "Sylhet", dept: "CSE",  imageUrl: "https://img.icons8.com/?size=100&id=42349&format=png&color=000000" },
  { id: 18, name: "Student 18", reg: "2023018", district: "Rangpur", dept: "CSE",  imageUrl: "https://img.icons8.com/?size=100&id=42349&format=png&color=000000" },
  { id: 19, name: "Student 19", reg: "2023019", district: "Dhaka", dept: "CSE",  imageUrl: "https://img.icons8.com/?size=100&id=42349&format=png&color=000000" },
  { id: 20, name: "Student 20", reg: "2023020", district: "Khulna", dept: "CSE",  imageUrl: "https://img.icons8.com/?size=100&id=42349&format=png&color=000000" },
  { id: 21, name: "Student 21", reg: "2023021", district: "Rajshahi", dept: "CSE",  imageUrl: "https://img.icons8.com/?size=100&id=42349&format=png&color=000000" },
  { id: 22, name: "Student 22", reg: "2023022", district: "Barisal", dept: "CSE",  imageUrl: "https://img.icons8.com/?size=100&id=42349&format=png&color=000000" },
  { id: 23, name: "Student 23", reg: "2023023", district: "Sylhet", dept: "CSE",  imageUrl: "https://img.icons8.com/?size=100&id=42349&format=png&color=000000" },
  { id: 24, name: "Student 24", reg: "2023024", district: "Rangpur", dept: "CSE",  imageUrl: "https://img.icons8.com/?size=100&id=42349&format=png&color=000000" },
  { id: 25, name: "Student 25", reg: "2023025", district: "Dhaka", dept: "CSE",  imageUrl: "https://img.icons8.com/?size=100&id=42349&format=png&color=000000" },
  { id: 26, name: "Student 26", reg: "2023026", district: "Khulna", dept: "CSE",  imageUrl: "https://img.icons8.com/?size=100&id=42349&format=png&color=000000" },
];

const Cse3 = () => {
  const [sentRequests, setSentRequests] = useState([]);

  const handleRequestClick = (studentId) => {
    if (sentRequests.includes(studentId)) {
      toast.info("Request already sent 🔄");
      return;
    }

    // Show toast when the request is sent
    toast.success("Request Sent ✅");

    // Update state to reflect that the request has been sent
    setSentRequests([...sentRequests, studentId]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          CSE 03 Student List
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

export default Cse3;