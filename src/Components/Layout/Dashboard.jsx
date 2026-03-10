import React, { useState } from "react";
import DashboardHome from "../../Dashboard/Admin/DashboardHome";
import UserManagement from "../../Dashboard/Admin/UserManagement";
import BatchManagement from "../../Dashboard/Admin/BatchManagement";
import SalamiTransactions from "../../Dashboard/Admin/SalamiTransactions";
import SalamiRequests from "../../Dashboard/Admin/SalamiRequests";
import AnnouncementSystem from "../../Dashboard/Admin/AnnouncementSystem";
import ReportSystem from "../../Dashboard/Admin/ReportSystem";
import AnalyticsDashboard from "../../Dashboard/Admin/AnalyticsDashboard";
import LeaderboardControl from "../../Dashboard/Admin/LeaderboardControl";
import { Link } from "react-router";

export default function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");

  const pages = {
    Dashboard: <DashboardHome />,
    Users: <UserManagement />,
    Batch: <BatchManagement />,
    Transactions: <SalamiTransactions />,
    Requests: <SalamiRequests />,
    Announcements: <AnnouncementSystem />,
    Reports: <ReportSystem />,
    Analytics: <AnalyticsDashboard />,
    Leaderboard: <LeaderboardControl />,
  };

  const sidebarItems = [
    { name: "Dashboard", icon: "📊" },
    { name: "Users", icon: "👥" },
    { name: "Batch", icon: "🎓" },
    { name: "Transactions", icon: "💰" },
    { name: "Requests", icon: "📨" },
    { name: "Announcements", icon: "📢" },
    { name: "Reports", icon: "📄" },
    { name: "Analytics", icon: "📊" },
    { name: "Leaderboard", icon: "🏆" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white transition-all duration-300 
        ${collapsed ? "w-16" : "w-64"} p-4 flex flex-col`}
      >
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="mb-6 bg-gray-700 px-3 py-2 rounded w-full"
        >
          ☰
        </button>

        <nav className="flex-1 space-y-2">
          {sidebarItems.map((item) => (
            <div
              key={item.name}
              onClick={() => setActivePage(item.name)}
              className={`flex items-center gap-3 p-3 rounded hover:bg-gray-700 cursor-pointer ${
                activePage === item.name ? "bg-gray-700" : ""
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {!collapsed && <span>{item.name}</span>}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <nav className="bg-white shadow px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Home Button */}
           <Link to={"/"}>
                 <button
              className="text-xl bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded transition"
            >
              🏠 Home
            </button>
           </Link>

            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              Admin Dashboard
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
              🔔
              <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="relative">
              <button className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 transition">
                <img
                  src="https://i.pravatar.cc/40"
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="hidden sm:inline font-medium">Admin</span>
                <span>▾</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-6">{pages[activePage]}</div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-4">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} Admin Dashboard. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white">Privacy</a>
              <a href="#" className="text-gray-300 hover:text-white">Terms</a>
              <a href="#" className="text-gray-300 hover:text-white">Contact</a>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}