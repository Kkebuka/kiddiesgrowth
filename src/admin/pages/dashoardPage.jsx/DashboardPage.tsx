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
import AdminHeader from "../../../components/layout/AdminHeader";

export default function DashboardPage() {
  return (
    <div className="flex h-screen overflow-y-hidden w-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white text-white p-6 shadow-lg overflow-y-hidden">
        <h1 className="text-2xl text-primary font-bold mb-8 text-center">
          KiddiesGrowth
        </h1>
        <nav className="flex flex-col gap-4 text-gray-700">
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
      <main className="flex-1">
        <AdminHeader />
        <div className=" p-8 h-[calc(100vh-4rem)] overflow-y-auto ">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
