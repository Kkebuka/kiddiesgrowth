import React from "react";
import logo from "../../assets/images/kiddies-growth-no_BG.png";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="shadow-sm ">
      <div className="navbar  ">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 p-4 "
          >
            <Link to="/">
              <a>Home</a>
            </Link>
            <Link to="/shop">
              <a>Shop</a>
            </Link>
            <Link to="/category">
              <a>Category</a>
            </Link>
            <Link to="/about">
              <a>About Us</a>
            </Link>
          </ul>
        </div>
        <div className="navbar-start">
          <a className="">
            <img src={logo} alt="" className="w-20" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-6">
            <Link to="/">
              <a>Home</a>
            </Link>
            <Link to="/shop">
              <a>Shop</a>
            </Link>
            <Link to="/category">
              <a>Category</a>
            </Link>
            <Link to="/about">
              <a>About Us</a>
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn lg:hidden">
            <FaUser />
          </a>
          <a className="btn">
            <FaShoppingCart />
          </a>
        </div>
      </div>
      <div className="px-4">
        <label className="input w-full lg:hidden ">
          <input
            type="search"
            className="grow"
            placeholder="Search for products eg blocks"
          />
          <FaSearch
          // className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
        </label>
      </div>
    </div>
  );
}

export default Header;
