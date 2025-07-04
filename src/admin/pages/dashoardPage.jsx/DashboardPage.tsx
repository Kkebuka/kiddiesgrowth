import React from "react";
import { Outlet, NavLink } from "react-router-dom";
// import { LayoutDashboard, Package, ShoppingCart, Users } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 hidden lg:block bg-white shadow-md">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">
            KiddiesGrowth Admin
          </h1>
        </div>
        <nav className="p-4 flex flex-col gap-2">
          <NavItem to="." icon={<LayoutDashboard size={20} />}>
            Dashboard
          </NavItem>
          <NavItem to="products" icon={<Package size={20} />}>
            Products
          </NavItem>
          <NavItem to="orders" icon={<ShoppingCart size={20} />}>
            Orders
          </NavItem>
          <NavItem to="users" icon={<Users size={20} />}>
            Users
          </NavItem>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <div className="mb-6 border-b pb-3">
          <h2 className="text-2xl font-semibold text-gray-800">Admin Panel</h2>
          <p className="text-sm text-gray-500">
            Manage your store efficiently.
          </p>
        </div>
        <Outlet />
      </main>
    </div>
  );
}

function NavItem({
  to,
  icon,
  children,
}: {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `flex items-center gap-3 p-3 rounded-md hover:bg-gray-100 transition ${
          isActive ? "bg-gray-200 font-semibold text-primary" : "text-gray-700"
        }`
      }
    >
      {icon}
      {children}
    </NavLink>
  );
}
