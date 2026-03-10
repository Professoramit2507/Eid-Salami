import React, { useState } from "react";

const initialTransactions = [
  { from: "Rahim", to: "Karim", amount: 200 },
  { from: "Hasan", to: "Rakib", amount: 150 },
  { from: "Nabil", to: "Siam", amount: 100 },
];

export default function SalamiTransactions() {
  const [transactions, setTransactions] = useState(initialTransactions);

  const deleteTransaction = (index) => {
    if (window.confirm("Are you sure you want to delete this transaction?")) {
      const updated = [...transactions];
      updated.splice(index, 1);
      setTransactions(updated);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-teal-500 text-transparent bg-clip-text">
          💰 Salami Transactions
        </h2>

        <button className="mt-4 sm:mt-0 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg shadow">
          + Add Transaction
        </button>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">

        <table className="w-full text-left">

          {/* Table Head */}
          <thead className="bg-gradient-to-r from-green-400 to-teal-500 text-white">
            <tr>
              <th className="p-4">Sender</th>
              <th className="p-4">Receiver</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition">

                <td className="p-4 font-medium">{tx.from}</td>
                <td className="p-4">{tx.to}</td>

                <td className="p-4 font-semibold text-green-600">{tx.amount} Tk</td>

                <td className="p-4">
                  <button
                    onClick={() => deleteTransaction(index)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
}