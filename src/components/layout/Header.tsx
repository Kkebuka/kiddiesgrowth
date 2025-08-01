import React, { useState, useEffect } from "react";
import logo from "../../assets/images/kiddies-growth-no_BG.png";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import MobileMenu from "./MobieMenu";

function Header() {
  const { cart } = useCart();

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
    <div
      className={`bg-base-200 shadow-md pb-3 left-0  fixed top-0 w-full z-50 transform transition-transform duration-700 ease-in-out ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className={`navbar px-4 lg:px-12`}>
        <MobileMenu />
        <div className="navbar-start">
          <NavLink to="/" className="">
            <img src={logo} alt="" className="w-16" />
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <div className="px-12  w-[500px]">
            <label className="input w-full rounded hidden lg:block ">
              <input
                type="search"
                className="grow"
                placeholder="Search for products eg blocks"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </label>
          </div>
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
        <div className="navbar-end space-x-3 ">
          <NavLink
            to={isAuthenticated ? "/account" : "/login"}
            className="btn p-3 relative"
          >
            <FaUser className="text-sm lg:text-xl" />
          </NavLink>
          <NavLink to="/cart" className="btn p-3 relative">
            <FaShoppingCart className="text-lg lg:text-xl" />
            {cart.length > 0 && (
              <span className="badge badge-xs bg-blue-500 rounded-full  text-white absolute -top-1 -right-1">
                {cart.length}
              </span>
            )}
          </NavLink>
        </div>
      </div>
      <div className="px-4 ">
        <label className="input w-full rounded block lg:hidden ">
          <input
            type="search"
            className="grow"
            placeholder="Search toys, books, STEM kits..."
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </label>
      </div>
    </div>
  );
}

export default Header;
