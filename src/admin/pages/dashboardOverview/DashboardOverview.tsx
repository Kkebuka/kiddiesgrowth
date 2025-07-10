import React from "react";
import {
  HiOutlineViewGrid,
  HiOutlineShoppingCart,
  HiOutlinePlusCircle,
  HiOutlineTag,
  HiOutlineCube,
  HiOutlineUserGroup,
} from "react-icons/hi";

const navItems = [
  { label: "Dashboard", icon: <HiOutlineViewGrid />, href: "#" },
  { label: "Orders", icon: <HiOutlineShoppingCart />, href: "#" },
  { label: "Add Product", icon: <HiOutlinePlusCircle />, href: "#" },
  { label: "Category", icon: <HiOutlineTag />, href: "#" },
  { label: "Products", icon: <HiOutlineCube />, href: "#" },
  { label: "Users", icon: <HiOutlineUserGroup />, href: "#" },
];

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg hidden md:block">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-blue-500">KiddiesGrowth</h1>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center space-x-3 text-gray-700 hover:bg-blue-100 hover:text-blue-600 px-3 py-2 rounded transition"
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        {/* Top navbar */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
          <div className="text-sm text-gray-500">Welcome, Admin</div>
        </div>

        {/* Dashboard grid content */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Total Orders", value: "1,245" },
            { title: "Total Products", value: "180" },
            { title: "Users", value: "560" },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white shadow rounded-lg p-4 border border-gray-100"
            >
              <p className="text-gray-500 text-sm">{card.title}</p>
              <p className="text-2xl font-bold text-gray-800">{card.value}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
