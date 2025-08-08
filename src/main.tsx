import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import DashboardChart from "./pages/cartPage/DashboardChart";
// import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <DashboardChart />
    </BrowserRouter>
  </StrictMode>
);
