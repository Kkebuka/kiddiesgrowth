import "./App.css";
import Home from "./pages/home/Home";
import Header from "./components/layout/Header";
import BottomNavBar from "./components/layout/BottomNavBar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div data-theme="light">
      <Header />
      <div className="bg-base-100 p-4">
        <Home />
      </div>
      <Footer />
      <BottomNavBar />
    </div>
  );
}

export default App;
