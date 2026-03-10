import { Link } from "react-router";

const stats = {
  users: 350,
  salami: 50000,
  transactions: 220,
  pendingRequests: 12,
};

const leaderboard = [
  { name: "Rahim", amount: 1200 },
  { name: "Hasan", amount: 900 },
  { name: "Karim", amount: 700 },
];

const recentTransactions = [
  { from: "Rahim", to: "Karim", amount: 200 },
  { from: "Hasan", to: "Rakib", amount: 150 },
  { from: "Nabil", to: "Siam", amount: 100 },
];

export default function DashboardHome() {

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}

     

      {/* Main Content */}

      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">📊 Admin Dashboard</h1>

        {/* Stats Cards */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg">Total Users 👥</h3>
            <p className="text-2xl font-bold mt-2">{stats.users}</p>
          </div>

          <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg">Total Salami 💰</h3>
            <p className="text-2xl font-bold mt-2">{stats.salami} Tk</p>
          </div>

          <div className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg">Transactions 🔄</h3>
            <p className="text-2xl font-bold mt-2">{stats.transactions}</p>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg">Pending Requests ⏳</h3>
            <p className="text-2xl font-bold mt-2">{stats.pendingRequests}</p>
          </div>
        </div>

        {/* Leaderboard + Transactions */}

        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          {/* Leaderboard */}

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">🏆 Top Salami Givers</h2>

            <ol className="space-y-3">
              {leaderboard.map((user, index) => (
                <li
                  key={index}
                  className="flex justify-between bg-gray-50 p-3 rounded"
                >
                  <span>
                    {index + 1}. {user.name}
                  </span>

                  <span className="font-semibold text-green-600">
                    {user.amount} Tk
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Recent Transactions */}

          <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
            <h2 className="text-xl font-semibold mb-4">
              📜 Recent Transactions
            </h2>

            <table className="w-full text-left">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="p-3">Sender</th>
                  <th className="p-3">Receiver</th>
                  <th className="p-3">Amount</th>
                </tr>
              </thead>

              <tbody>
                {recentTransactions.map((tx, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3">{tx.from}</td>
                    <td className="p-3">{tx.to}</td>

                    <td className="p-3 font-semibold text-green-600">
                      {tx.amount} Tk
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon, text, collapsed }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded hover:bg-gray-700 cursor-pointer">
      <span className="text-xl">{icon}</span>

      {!collapsed && <span>{text}</span>}
    </div>
  );
}
