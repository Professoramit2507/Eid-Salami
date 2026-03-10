import React, { useState } from "react";

const initialLeaderboard = ["Rahim", "Hasan", "Karim"];

export default function LeaderboardControl() {
  const [leaderboard, setLeaderboard] = useState(initialLeaderboard);

  const resetLeaderboard = () => {
    if (window.confirm("Are you sure you want to reset the leaderboard?")) {
      setLeaderboard([]);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center">

      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">

        {/* Header */}
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
          🏆 Leaderboard
        </h2>

        {/* Leaderboard List */}
        <ol className="list-decimal list-inside space-y-2 mb-6">
          {leaderboard.length === 0 ? (
            <p className="text-gray-500">No entries yet.</p>
          ) : (
            leaderboard.map((user, index) => (
              <li
                key={index}
                className="bg-gray-100 px-4 py-2 rounded shadow flex justify-between items-center hover:bg-gray-200 transition"
              >
                {user}
                <span className="text-gray-500 text-sm">#{index + 1}</span>
              </li>
            ))
          )}
        </ol>

        {/* Reset Button */}
        <button
          onClick={resetLeaderboard}
          className="w-full bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg shadow transition"
        >
          🔄 Reset Leaderboard
        </button>

      </div>

    </div>
  );
}