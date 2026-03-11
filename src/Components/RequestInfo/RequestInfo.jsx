import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const RequestInfo = () => {
  const [userBatch, setUserBatch] = useState(null);
  const [targetBatches, setTargetBatches] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      const batch = Number(storedUser.batch);
      setUserBatch(batch);

      // Generate batches less than user's batch
      const batches = [];
      for (let i = 1; i < batch; i++) {
        batches.push(i);
      }
      setTargetBatches(batches);
    }
  }, []);

  const sendRequestAndNavigate = (batchNumber) => {
    if (!userBatch) return;

    // Save request in localStorage
    const storedRequests = JSON.parse(localStorage.getItem("requests")) || [];
    const newRequest = {
      from: `Batch ${userBatch}`,
      to: `Batch ${batchNumber}`,
      status: "Pending",
      timestamp: new Date().toISOString(),
    };
    storedRequests.push(newRequest);
    localStorage.setItem("requests", JSON.stringify(storedRequests));
   // toast.success(`Request sent to Batch ${batchNumber} ✅`);

    // Navigate to the batch route
    navigate(`/cse${batchNumber}`);
  };

  if (!userBatch) {
    return (
      <div className="p-6">
        <p className="text-red-500">You must login to send requests.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Send Requests to Seniors</h2>

      {targetBatches.length === 0 ? (
        <p className="text-gray-500">No senior batches available.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {targetBatches.map((batch) => (
            <button
              key={batch}
              onClick={() => sendRequestAndNavigate(batch)}
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-lg"
            >
              Send Request to Batch {batch}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default RequestInfo;