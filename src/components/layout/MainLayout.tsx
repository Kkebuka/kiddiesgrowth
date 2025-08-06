import Header from "./Header";
import Footer from "./Footer";
import BottomNavBar from "./BottomNavBar";
import { Outlet, useLocation } from "react-router-dom";

export default function MainLayout() {
  const location = useLocation();

  const hideFooterRoute = ["/register"];
  const shouldHideFooter = hideFooterRoute.includes(location.pathname);
  return (
    <div data-theme="light" className=" scroll-smooth bg-base-200">
      <div className="font-inter pt-20">
        <Header />
        <Outlet />
      </div>

      {!shouldHideFooter && (
        <>
          <Footer /> <BottomNavBar />
        </>
      )}
    </div>
  );
}
