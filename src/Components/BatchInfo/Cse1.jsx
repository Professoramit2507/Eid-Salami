import React, { useState } from "react";
import { toast } from "react-toastify";

const Cse1 = () => {
  // 25 sample students
  const initialStudents = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    name: `Student ${i + 1}`,
    regNo: `CSE1-${1000 + i + 1}`,
    dept: "CSE",
    district: "Dhaka",
  }));

  const [students] = useState(initialStudents);

  // Track which students have request sent
  const [sentRequests, setSentRequests] = useState([]);

  const handleSendRequest = (student) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      toast.error("You must login to send requests ❌");
      return;
    }

    // Save request in localStorage
    const storedRequests = JSON.parse(localStorage.getItem("requests")) || [];

    // Check if request already exists
    const existingRequestIndex = storedRequests.findIndex(
      (r) => r.from === `Batch ${storedUser.batch}` && r.to === student.name
    );

    if (existingRequestIndex !== -1) {
      toast.info(`Request already sent to ${student.name} 🔄`);
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

    toast.success(`Request sent to ${student.name} ✅`);

    // Update local state to change button text
    setSentRequests([...sentRequests, student.id]);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">📝 CSE1 Students List</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-white p-4 rounded-xl shadow flex flex-col gap-2"
          >
            <p>
              <span className="font-semibold">Name:</span> {student.name}
            </p>
            <p>
              <span className="font-semibold">Reg No:</span> {student.regNo}
            </p>
            <p>
              <span className="font-semibold">Dept:</span> {student.dept}
            </p>
            <p>
              <span className="font-semibold">District:</span> {student.district}
            </p>

            <button
              onClick={() => handleSendRequest(student)}
              className={`${
                sentRequests.includes(student.id)
                  ? "bg-gray-400 hover:bg-gray-400"
                  : "bg-yellow-400 hover:bg-yellow-300"
              } text-black font-bold py-2 rounded mt-2`}
            >
              {sentRequests.includes(student.id) ? "Request Sent" : "Send Request"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cse1;