import React from "react";
import UserManagement from "./UserManagement";
import BatchManagement from "./BatchManagement";

export default function AdminDashboard() {
  return (
    <div>

      <h1>Admin Panel</h1>

      <UserManagement />
      <BatchManagement />

    </div>
  );
}