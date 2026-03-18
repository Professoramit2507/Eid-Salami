import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Salami = () => {
  const [userBatch, setUserBatch] = useState(null);
  const [receivers, setReceivers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      const batch = Number(storedUser.batch);
      setUserBatch(batch);

      const temp = [];
      for (let i = batch + 1; i <= 6; i++) {
        temp.push(i);
      }
      setReceivers(temp);
    }
  }, []);

  const giveSalami = (batchNumber) => {
    const storedSalami = JSON.parse(localStorage.getItem("salami")) || [];

    const newSalami = {
      from: `Batch ${userBatch}`,
      to: `Batch ${batchNumber}`,
      time: new Date().toLocaleString(),
    };

    storedSalami.push(newSalami);
    localStorage.setItem("salami", JSON.stringify(storedSalami));

    // 👉 Navigate to that batch page
    navigate(`/cse${batchNumber}`);
  };

  if (!userBatch) {
    return <p className="text-red-500">Login first</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Give Salami</h2>

      {receivers.length === 0 ? (
        <p className="text-gray-500">
          You are the last batch. No one to give salami 😎
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {receivers.map((batch) => (
            <button
              key={batch}
              onClick={() => giveSalami(batch)}
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-lg"
            >
              Give Salami to Batch {batch}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Salami;