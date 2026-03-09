import React from "react";

const students = [
  { id: 1, name: "Student 1", reg: "2023001", district: "Dhaka", dept: "CSE" },
  { id: 2, name: "Student 2", reg: "2023002", district: "Khulna", dept: "CSE" },
  { id: 3, name: "Student 3", reg: "2023003", district: "Rajshahi", dept: "CSE" },
  { id: 4, name: "Student 4", reg: "2023004", district: "Barisal", dept: "CSE" },
  { id: 5, name: "Student 5", reg: "2023005", district: "Sylhet", dept: "CSE" },
  { id: 6, name: "Student 6", reg: "2023006", district: "Rangpur", dept: "CSE" },
  { id: 7, name: "Student 7", reg: "2023007", district: "Dhaka", dept: "CSE" },
  { id: 8, name: "Student 8", reg: "2023008", district: "Khulna", dept: "CSE" },
  { id: 9, name: "Student 9", reg: "2023009", district: "Rajshahi", dept: "CSE" },
  { id: 10, name: "Student 10", reg: "2023010", district: "Barisal", dept: "CSE" },
  { id: 11, name: "Student 11", reg: "2023011", district: "Sylhet", dept: "CSE" },
  { id: 12, name: "Student 12", reg: "2023012", district: "Rangpur", dept: "CSE" },
  { id: 13, name: "Student 13", reg: "2023013", district: "Dhaka", dept: "CSE" },
  { id: 14, name: "Student 14", reg: "2023014", district: "Khulna", dept: "CSE" },
  { id: 15, name: "Student 15", reg: "2023015", district: "Rajshahi", dept: "CSE" },
  { id: 16, name: "Student 16", reg: "2023016", district: "Barisal", dept: "CSE" },
  { id: 17, name: "Student 17", reg: "2023017", district: "Sylhet", dept: "CSE" },
  { id: 18, name: "Student 18", reg: "2023018", district: "Rangpur", dept: "CSE" },
  { id: 19, name: "Student 19", reg: "2023019", district: "Dhaka", dept: "CSE" },
  { id: 20, name: "Student 20", reg: "2023020", district: "Khulna", dept: "CSE" },
  { id: 21, name: "Student 21", reg: "2023021", district: "Rajshahi", dept: "CSE" },
  { id: 22, name: "Student 22", reg: "2023022", district: "Barisal", dept: "CSE" },
  { id: 23, name: "Student 23", reg: "2023023", district: "Sylhet", dept: "CSE" },
  { id: 24, name: "Student 24", reg: "2023024", district: "Rangpur", dept: "CSE" },
  { id: 25, name: "Student 25", reg: "2023025", district: "Dhaka", dept: "CSE" },
  { id: 26, name: "Student 26", reg: "2023026", district: "Khulna", dept: "CSE" },
];

const Cse3 = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6">
        
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          CSE 03 Student List
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="p-3">No</th>
                <th className="p-3">Name</th>
                <th className="p-3">Registration</th>
                <th className="p-3">District</th>
                <th className="p-3">Department</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="border-b hover:bg-blue-50 transition"
                >
                  <td className="p-3">{student.id}</td>
                  <td className="p-3 font-medium">{student.name}</td>
                  <td className="p-3">{student.reg}</td>
                  <td className="p-3">{student.district}</td>
                  <td className="p-3 text-blue-600 font-semibold">
                    {student.dept}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
};

export default Cse3;