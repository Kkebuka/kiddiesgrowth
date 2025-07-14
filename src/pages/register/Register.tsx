import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-4">
      <div className="card w-full max-w-md bg-white shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-primary">
          Create an Account
        </h2>

        <form className="flex flex-col gap-4">
          {/* Email Field */}
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="name"
              placeholder="Username"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Password Field with Toggle */}
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="flex w-full input input-bordered ">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className=" pr-10 w-full"
                required
              />
              <span
                className=" cursor-pointer text-gray-500 bg-gray-100 p-1"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button className="btn btn-primary w-full mt-4">Register</button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
