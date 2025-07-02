import "./App.css";
import Home from "./pages/home/Home";
import Header from "./components/layout/Header";
import BottomNavBar from "./components/layout/BottomNavBar";
import Footer from "./components/layout/Footer";
import { Routes, Route } from "react-router";
import Categories from "./pages/categories/Categories";
import Shop from "./pages/shop/Shop";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import CartPage from "./pages/cartPage/CartPage";
import AccountPage from "./pages/accountPage/AccountPage";
import AboutUsPage from "./pages/aboutUsPage/AboutUsPage";

function App() {
  return (
    <div data-theme="light">
      <div className="lg:px-16">
        <Header />
        <Routes>
          <Route index path="" element={<Home />} />
          <Route path="category" element={<Categories />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<ProductDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>

      <div className=""></div>
      <Footer />
      <BottomNavBar />
    </div>
  );
}

export default App;
