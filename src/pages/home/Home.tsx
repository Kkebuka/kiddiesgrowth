import React from "react";
import Carousel from "./components/Carousel";
import TopCategories from "./components/TopCategories";
import TopSelling from "./components/TopSelling";
import BestPicks from "./components/BestPicks";

function Home() {
  return (
    <>
      <Carousel />
      <TopCategories />
      <TopSelling />
      <BestPicks />
    </>
  );
}

export default Home;
