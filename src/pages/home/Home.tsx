import React from "react";
import Carousel from "./components/Carousel";
import TopCategories from "./components/TopCategories";
import TopSelling from "./components/TopSelling";
import BestPicks from "./components/BestPicks";

function Home() {
  return (
    <div className="bg-base-100 p-4">
      <Carousel />
      <TopCategories />
      <TopSelling />
      <BestPicks />
    </div>
  );
}

export default Home;
