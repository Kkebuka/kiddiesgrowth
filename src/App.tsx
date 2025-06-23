import "./App.css";
import Home from "./pages/home/Home";
import Header from "./components/layout/Header";
import BottomNavBar from "./components/layout/BottomNavBar";
import Footer from "./components/layout/Footer";
import { Routes, Route } from "react-router";
import Categories from "./pages/categories/Categories";
import Shop from "./pages/shop/Shop";
import ProductDetails from "./pages/productDetails/ProductDetails";

function App() {
  return (
    <div data-theme="light">
      <Header />
      <Routes>
        <Route index path="" element={<Home />} />
        <Route path="category" element={<Categories />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:id" element={<ProductDetails />} />
      </Routes>

      <div className=""></div>
      <Footer />
      <BottomNavBar />
    </div>
  );
}

export default App;
