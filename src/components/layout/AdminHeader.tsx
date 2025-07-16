import React from "react";
import { FiUser, FiLogOut } from "react-icons/fi";

export default function AdminHeader() {
  return (
    <header className="w-full flex justify-between items-center px-6 py-6 bg-white shadow-md">
      {/* Left Side: Welcome Message */}
      <h1 className="text-2xl font-semibold text-gray-800">Welcome, Admin</h1>

      {/* Right Side: Icons */}
      <div className="flex items-center space-x-6 text-gray-600 text-xl">
        <button
          className="hover:text-blue-600 cursor-pointer text-2xl transition-colors"
          title="Account"
        >
          <FiUser />
        </button>
        <button
          className="hover:text-red-600 text-2xl cursor-pointer transition-colors"
          title="Logout"
        >
          <FiLogOut />
        </button>
      </div>
    </header>
  );
}
