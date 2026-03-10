import React from "react";

const users = [
  { name: "Rahim", batch: 2, status: "Active" },
  { name: "Karim", batch: 5, status: "Blocked" },
  { name: "Hasan", batch: 3, status: "Active" },
  { name: "Siam", batch: 1, status: "Active" },
];

export default function UserManagement() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Header */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">

        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          👥 User Management
        </h2>

        <button className="mt-4 sm:mt-0 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg shadow">
          + Add User
        </button>

      </div>


      {/* Table Card */}

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full text-left">

            {/* Table Head */}

            <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Batch</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>


            {/* Table Body */}

            <tbody>

              {users.map((user, index) => (

                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition"
                >

                  <td className="p-4 font-medium">{user.name}</td>

                  <td className="p-4">Batch {user.batch}</td>

                  <td className="p-4">

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold
                      ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>

                  </td>


                  {/* Actions */}

                  <td className="p-4 flex flex-wrap gap-2">

                    <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded">
                      Edit
                    </button>

                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                      Delete
                    </button>

                    <button className="bg-gray-700 hover:bg-gray-800 text-white px-3 py-1 rounded">
                      Block
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}