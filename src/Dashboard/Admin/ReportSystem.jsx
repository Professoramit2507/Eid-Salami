import React from "react";

export default function ReportSystem() {
  const downloadReport = (type) => {
    alert(`Downloading ${type} report...`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center">

      <div className="w-full max-w-xl bg-white p-6 rounded-xl shadow-lg flex flex-col gap-4">

        {/* Header */}
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
          📝 Report System
        </h2>

        {/* Buttons */}
        <button
          onClick={() => downloadReport("User (PDF)")}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow transition"
        >
          📄 Download User Report (PDF)
        </button>

        <button
          onClick={() => downloadReport("Transaction (Excel)")}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow transition"
        >
          💰 Download Transaction Report (Excel)
        </button>

        <button
          onClick={() => downloadReport("Request (PDF)")}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg shadow transition"
        >
          📨 Download Request Report (PDF)
        </button>

      </div>

    </div>
  );
}