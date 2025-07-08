import "./App.css";
import Home from "./pages/home/Home";
import MainLayout from "./components/layout/MainLayout";
import { Routes, Route } from "react-router";
import Categories from "./pages/categories/Categories";
import Shop from "./pages/shop/Shop";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import CartPage from "./pages/cartPage/CartPage";
import AccountPage from "./pages/accountPage/AccountPage";
import AboutUsPage from "./pages/aboutUsPage/AboutUsPage";
import { CartProvider } from "./contexts/CartContext";
// import DashboardPage from "./admin/pages/dashoardPage.jsx/DashboardPage";

function App() {
  console.log(
    "Cloudinary Cloud Name:",
    import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
  );
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index path="" element={<Home />} />
          <Route path="category" element={<Categories />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<ProductDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* <Route path="" element={<DashboardPage />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
        </Route> */}
      </Routes>
    </CartProvider>
  );
}

export default App;
