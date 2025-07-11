import React, { useState } from "react";
import { FiEye } from "react-icons/fi";

const dummyOrders = [
  {
    id: "ORD001",
    customer: "Ada Johnson",
    total: 15000,
    date: "2025-07-09",
    status: "pending",
  },
  {
    id: "ORD002",
    customer: "Emeka Chukwu",
    total: 7200,
    date: "2025-07-08",
    status: "shipped",
  },
  {
    id: "ORD003",
    customer: "Fatima Bello",
    total: 20350,
    date: "2025-07-06",
    status: "delivered",
  },
  {
    id: "ORD004",
    customer: "Daniel Adebayo",
    total: 12999,
    date: "2025-07-04",
    status: "cancelled",
  },
];

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-700",
  shipped: "bg-blue-100 text-blue-700",
  delivered: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
};

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrders = dummyOrders.filter(
    (order) =>
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Orders</h2>
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by customer or order ID"
          className="w-full sm:w-1/2 border border-gray-300 bg-gray-50 text-gray-800 px-4 py-2 rounded text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded shadow-md">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-200 text-gray-700 uppercase text-xs">
            <tr>
              <th className="py-3 px-4">Order ID</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Total (₦)</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-6 text-gray-500">
                  No orders found.
                </td>
              </tr>
            ) : (
              filteredOrders.map((order) => (
                <tr key={order.id} className="border-t hover:bg-gray-50">
                  <td className="py-2 px-4 font-medium text-gray-800">
                    {order.id}
                  </td>
                  <td className="py-2 px-4 text-gray-600">{order.customer}</td>
                  <td className="py-2 px-4 text-gray-800 font-semibold">
                    {order.total.toLocaleString()}
                  </td>
                  <td className="py-2 px-4 text-gray-600">{order.date}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        statusColors[order.status]
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 text-center">
                    <button className="text-blue-600 hover:text-blue-800">
                      <FiEye />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
