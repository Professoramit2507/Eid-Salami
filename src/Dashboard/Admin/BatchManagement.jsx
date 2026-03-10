import React, { useState } from "react";

export default function BatchManagement() {
  const [batches, setBatches] = useState([1, 2, 3, 4, 5, 6, 7]);

  const addBatch = () => {
    const newBatch = batches.length + 1;
    setBatches([...batches, newBatch]);
  };

  const editBatch = (batch) => {
    const newName = prompt(`Edit Batch ${batch}`, batch);
    if (newName) {
      setBatches(batches.map((b) => (b === batch ? Number(newName) : b)));
    }
  };

  const deleteBatch = (batch) => {
    if (window.confirm(`Delete Batch ${batch}?`)) {
      setBatches(batches.filter((b) => b !== batch));
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          📦 Batch Management
        </h2>

        <button
          onClick={addBatch}
          className="mt-4 sm:mt-0 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg shadow"
        >
          + Add Batch
        </button>
      </div>

      {/* Batch List */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {batches.map((batch) => (
          <div
            key={batch}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
          >
            <span className="font-semibold text-lg">Batch {batch}</span>

            <div className="flex gap-2">
              <button
                onClick={() => editBatch(batch)}
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => deleteBatch(batch)}
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