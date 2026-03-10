import React, { useState } from "react";

export default function AnnouncementSystem() {
  const [message, setMessage] = useState("");

  const sendAnnouncement = () => {
    if (message.trim() === "") {
      alert("Please write a message before sending!");
      return;
    }
    alert("Announcement Sent: " + message);
    setMessage("");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center">

      <div className="w-full max-w-xl bg-white p-6 rounded-xl shadow-lg">

        {/* Header */}
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          📢 Announcement System
        </h2>

        {/* Textarea */}
        <textarea
          className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4 resize-none"
          placeholder="Write your announcement..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        {/* Send Button */}
        <button
          onClick={sendAnnouncement}
          className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg shadow transition"
        >
          📤 Send Notification
        </button>

      </div>

    </div>
  );
}