import Carousel from "./components/Carousel";
import TopCategories from "./components/TopCategories";
import TopSelling from "./components/TopSelling";
import BestPicks from "./components/BestPicks";
import FloatingWhatsAppButton from "../../components/ui/FloatingWhatsappButtton";

function Home() {
  return (
    <div className="bg-base-100 p-4 space-y-12">
      <Carousel />
      <TopCategories />
      <TopSelling />
      <BestPicks />
      <FloatingWhatsAppButton />
    </div>
  );
}

export default Home;
