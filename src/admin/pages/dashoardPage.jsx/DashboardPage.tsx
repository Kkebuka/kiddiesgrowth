// src/pages/admin/AdminLayout.tsx
import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  FaBox,
  FaPlus,
  FaUsers,
  FaClipboardList,
  FaThLarge,
  FaChartLine,
} from "react-icons/fa";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white p-6 shadow-lg">
        <h1 className="text-2xl font-bold mb-8 text-center">
          KiddiesGrowth Admin
        </h1>
        <nav className="flex flex-col gap-4">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition hover:bg-primary-focus ${
                isActive ? "bg-primary-focus" : ""
              }`
            }
          >
            <FaChartLine /> Dashboard
          </NavLink>
          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition hover:bg-primary-focus ${
                isActive ? "bg-primary-focus" : ""
              }`
            }
          >
            <FaClipboardList /> Orders
          </NavLink>
          <NavLink
            to="/admin/add-product"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition hover:bg-primary-focus ${
                isActive ? "bg-primary-focus" : ""
              }`
            }
          >
            <FaPlus /> Add Product
          </NavLink>
          <NavLink
            to="/admin/categories"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition hover:bg-primary-focus ${
                isActive ? "bg-primary-focus" : ""
              }`
            }
          >
            <FaThLarge /> Categories
          </NavLink>
          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition hover:bg-primary-focus ${
                isActive ? "bg-primary-focus" : ""
              }`
            }
          >
            <FaBox /> Products
          </NavLink>
          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition hover:bg-primary-focus ${
                isActive ? "bg-primary-focus" : ""
              }`
            }
          >
            <FaUsers /> Users
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
