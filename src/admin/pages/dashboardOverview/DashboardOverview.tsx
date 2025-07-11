import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import { Line, Bar } from "react-chartjs-2";

const DashboardOverview = () => {
  const topProducts = [
    { name: "Wooden Toy Set", sold: 120 },
    { name: "Learning Board", sold: 95 },
    { name: "Baby Puzzle", sold: 87 },
  ];

  const recentOrders = [
    {
      id: "#ORD001",
      customer: "Jane Doe",
      total: "₦8,000",
      status: "Delivered",
    },
    {
      id: "#ORD002",
      customer: "Mary Smith",
      total: "₦15,000",
      status: "Pending",
    },
    {
      id: "#ORD003",
      customer: "Chioma Bello",
      total: "₦10,500",
      status: "Shipped",
    },
  ];

  const salesByMonthData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales (₦)",
        data: [50000, 75000, 60000, 95000, 120000, 100000],
        backgroundColor: "#3498db",
      },
    ],
  };

  const ordersTrendData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Orders",
        data: [45, 60, 52, 75],
        borderColor: "#2ecc71",
        backgroundColor: "#2ecc7144",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  return (
    <div className="space-y-8">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Users", value: "560" },
          { label: "Total Orders", value: "1,245" },
          { label: "Products", value: "180" },
          { label: "Revenue", value: "₦2,150,000" },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-white shadow-md rounded-lg p-5 border border-gray-100"
          >
            <p className="text-sm text-gray-500">{item.label}</p>
            <p className="text-2xl font-bold text-gray-800 mt-2">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-4 shadow border">
          <p className="text-lg font-semibold text-orange-500 mb-2">
            Sales by Month
          </p>
          <div className="w-full h-56 bg-gray-100 rounded flex items-center justify-center text-gray-400">
            <Bar data={salesByMonthData} />
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow border">
          <p className="text-lg font-semibold text-orange-500 mb-2">
            Orders Trend
          </p>
          <div className="w-full h-56 bg-gray-100 rounded flex items-center justify-center text-gray-400">
            <Line data={ordersTrendData} />
          </div>
        </div>
      </div>

      {/* Top Products + Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-4 shadow border">
          <p className="text-lg font-semibold text-orange-500 mb-4">
            Top Selling Products
          </p>
          <ul className="space-y-3">
            {topProducts.map((product, i) => (
              <li
                key={i}
                className="flex justify-between text-sm text-gray-700"
              >
                <span>{product.name}</span>
                <span className="font-semibold">{product.sold} sold</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-lg p-4 shadow border">
          <p className="text-lg font-semibold text-orange-500 mb-4">
            Recent Orders
          </p>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="pb-2">Order ID</th>
                <th className="pb-2">Customer</th>
                <th className="pb-2">Total</th>
                <th className="pb-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, i) => (
                <tr key={i} className="border-b last:border-none">
                  <td className="py-2">{order.id}</td>
                  <td className="py-2">{order.customer}</td>
                  <td className="py-2">{order.total}</td>
                  <td className="py-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
