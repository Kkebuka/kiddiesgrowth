import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-white shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-primary">
          Login
        </h2>

        <form className="flex flex-col gap-4">
          {/* Email Field */}
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
            <div className="flex items-center ">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="input input-bordered pr-10 w-full"
                required
              />
              <span
                className=" cursor-pointer text-gray-500 bg-gray-200 p-3"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <label className="label justify-end">
              <a
                href="#"
                className="label-text-alt text-blue-600 hover:underline"
              >
                Forgot password?
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button className="btn btn-primary w-full mt-4">Login</button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Don’t have an account?
            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
