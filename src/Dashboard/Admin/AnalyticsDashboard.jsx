import React from "react";

const stats = [
  { title: "Total Users", value: 350, icon: "👥", color: "from-blue-500 to-cyan-400" },
  { title: "Total Salami", value: "50,000 Tk", icon: "💰", color: "from-green-400 to-emerald-500" },
  { title: "Most Generous Student", value: "Rahim", icon: "🏆", color: "from-pink-500 to-yellow-400" },
  { title: "Most Received Salami", value: "Karim", icon: "🎁", color: "from-purple-500 to-indigo-500" },
];

export default function AnalyticsDashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Header */}
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
        📊 Analytics Dashboard
      </h2>

      {/* Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${stat.color} text-white p-6 rounded-xl shadow-lg flex flex-col items-start`}
          >
            <span className="text-2xl">{stat.icon}</span>
            <h3 className="mt-2 text-lg font-semibold">{stat.title}</h3>
            <p className="text-2xl font-bold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

    </div>
  );
}