import React, { useState, useEffect } from "react";
import logo from "../../assets/images/kiddies-growth-no_BG.png";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

function Header() {
  const { cart } = useCart();

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false); // Scrolling down
    } else {
      setShow(true); // Scrolling up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <div className=" ">
      <div
        className={`navbar bg-base-100 px-12 left-0 shadow-md fixed top-0 w-full z-50 transform transition-transform duration-700 ease-in-out ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
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
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/category">Category</NavLink>
            <NavLink to="/about">About Us</NavLink>
          </ul>
        </div>
        <div className="navbar-start">
          <NavLink to="/" className="">
            <img src={logo} alt="" className="w-16" />
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold  border-b-2 border-blue-600"
                  : "text-gray-500"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold  border-b-2 border-blue-600"
                  : "text-gray-500"
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/category"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold  border-b-2 border-blue-600"
                  : "text-gray-500"
              }
            >
              Category
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold  border-b-2 border-blue-600"
                  : "text-gray-500"
              }
            >
              About Us
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn lg:hidden">
            <FaUser />
          </a>
          <NavLink to="/cart" className="btn relative">
            <FaShoppingCart className="text-xl" />
            {cart.length > 0 && (
              <span className="badge badge-xs bg-blue-500  text-white absolute -top-1 -right-1">
                {cart.length}
              </span>
            )}
          </NavLink>
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
