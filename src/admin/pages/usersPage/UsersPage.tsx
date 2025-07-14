import React from "react";
import type { UserType } from "../../../types/types";

export default function UsersPage() {
  const dummyUsers: UserType[] = [
    {
      id: 1,
      username: "mummyGlow",
      email: "glow@example.com",
      createdAt: "2024-06-11T09:30:00Z",
    },
    {
      id: 2,
      username: "superDad123",
      email: "superdad@example.com",
      createdAt: "2024-06-20T14:45:00Z",
    },
    {
      id: 3,
      username: "aishaBabyToys",
      email: "aisha@example.com",
      createdAt: "2024-07-01T10:00:00Z",
    },
  ];
  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6 text-primary">Users</h2>

      <div className="overflow-x-auto shadow rounded-lg border border-gray-200">
        <table className="min-w-full bg-white text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3 text-sm font-medium">#</th>
              <th className="px-4 py-3 text-sm font-medium">Username</th>
              <th className="px-4 py-3 text-sm font-medium">Email</th>
              <th className="px-4 py-3 text-sm font-medium">Joined</th>
            </tr>
          </thead>
          <tbody>
            {dummyUsers.map((user: UserType, idx) => (
              <tr
                key={user.id}
                className={`border-b hover:bg-gray-50 text-primary transition ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="px-4 py-3 ">{idx + 1}</td>
                <td className="px-4 py-3 font-medium">{user.username}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
