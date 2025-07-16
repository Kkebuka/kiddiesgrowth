import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Icon */}
      <div className="lg:hidden">
        <button
          onClick={toggleDrawer}
          className="btn btn-circle text-3xl text-primary hover:bg-primary/10"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Slide-in Drawer */}
      <div
        className={`fixed top-0 left-0 h-screen w-1/2 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6">
          <h2 className="text-xl font-bold text-primary">Menu</h2>
          <ul className="space-y-4 text-lg">
            <li>
              <NavLink to="/" onClick={closeDrawer}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" onClick={closeDrawer}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/category" onClick={closeDrawer}>
                Category
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeDrawer}>
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay (optional) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeDrawer}
        ></div>
      )}
    </>
  );
}

export default MobileMenu;
