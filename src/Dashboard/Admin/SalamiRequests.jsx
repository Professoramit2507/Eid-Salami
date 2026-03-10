import React, { useState } from "react";

const initialRequests = [
  { from: "Rakib", to: "Rahim", status: "Pending" },
  { from: "Karim", to: "Hasan", status: "Pending" },
];

export default function SalamiRequests() {
  const [requests, setRequests] = useState(initialRequests);

  const approveRequest = (index) => {
    const updated = [...requests];
    updated[index].status = "Approved";
    setRequests(updated);
  };

  const deleteRequest = (index) => {
    if (window.confirm("Are you sure you want to delete this request?")) {
      const updated = [...requests];
      updated.splice(index, 1);
      setRequests(updated);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Header */}
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
        📨 Salami Requests
      </h2>

      {/* Requests List */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {requests.map((req, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow flex flex-col gap-2"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">{req.from} → {req.to}</span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold
                  ${
                    req.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
              >
                {req.status}
              </span>
            </div>

            <div className="flex gap-2 mt-2">
              {req.status === "Pending" && (
                <button
                  onClick={() => approveRequest(index)}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                >
                  Approve
                </button>
              )}

              <button
                onClick={() => deleteRequest(index)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}