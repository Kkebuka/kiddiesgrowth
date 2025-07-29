import Carousel from "./components/Carousel";
import TopCategories from "./components/TopCategories";
import TopSelling from "./components/TopSelling";
import BestPicks from "./components/BestPicks";
import FloatingWhatsAppButton from "../../components/ui/FloatingWhatsappButtton";
import { HeroSection } from "./components/HeroSection";

function Home() {
  return (
    <div className="  space-y-12">
      {/* <Carousel /> */}
      <HeroSection />
      <div className="lg:px-12">
        <TopCategories />
        <TopSelling />
        <BestPicks />
        <FloatingWhatsAppButton />
      </div>
    </div>
  );
}

export default Home;
