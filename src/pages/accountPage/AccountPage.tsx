import React from "react";
import accountImg from "../../assets/images/Login.jpg";

type User = {
  username: string;
  email: string;
};

const dummyUser: User = {
  username: "kiddiesgrowth_mum",
  email: "mum@kiddiesgrowth.com",
};

export default function AccountPage() {
  return (
    <div className="h-[calc(100vh-4rem)] flex lg:-mt-16   ">
      <div className="bg-white  w-full lg:py-24 max-w-md p-6 space-y-6">
        {/* Avatar & Username */}
        <div className="flex flex-col items-center text-center">
          <div className="avatar mb-3">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://via.placeholder.com/150" alt="user avatar" />
            </div>
          </div>
          <h2 className="text-xl font-bold">{dummyUser.username}</h2>
          <p className="text-sm text-gray-500">{dummyUser.email}</p>
        </div>

        {/* Account Info */}
        <div className="space-y-3">
          <div className="form-control flex justify-between">
            <label className="label text-sm text-gray-600">Username</label>
            <input
              type="text"
              value={dummyUser.username}
              className="input input-bordered"
              readOnly
            />
          </div>

          <div className="form-control flex justify-between">
            <label className="label text-sm text-gray-600">Email</label>
            <input
              type="email"
              value={dummyUser.email}
              className="input input-bordered"
              readOnly
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between mt-4">
          <button className="btn btn-outline btn-sm">Edit Profile</button>
          <button className="btn btn-error btn-sm text-white">Logout</button>
        </div>
      </div>
      <div className=" hidden lg:block">
        <img src={accountImg} alt="account-img" />
      </div>
    </div>
  );
}
