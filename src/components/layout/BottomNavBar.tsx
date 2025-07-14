// BottomNavBar.tsx
import {
  FaHome,
  FaCaretSquareLeft,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
// import { Link } from "react-router-dom";

const BottomNavBar = () => {
  // const location = useLocation();

  const navItems = [
    { name: "Home", icon: <FaHome size={20} />, to: "/" },
    {
      name: "Categories",
      icon: <FaCaretSquareLeft size={20} />,
      to: "/category",
    },
    { name: "Cart", icon: <FaShoppingCart size={20} />, to: "/cart" },
    { name: "Account", icon: <FaUser size={20} />, to: "/account" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-base-100 shadow-md border-t border-base-300 md:hidden">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <a
              key={item.name}
              href={item.to}
              className={`flex flex-col items-center text-sm
                 ${isActive ? "text-primary" : "text-base-content"}
                `}
            >
              {item.icon}
              <span className="text-xs">{item.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavBar;
