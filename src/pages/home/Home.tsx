import TopCategories from "./components/TopCategories";
import TopSelling from "./components/TopSelling";
import BestPicks from "./components/BestPicks";
import FloatingWhatsAppButton from "../../components/ui/FloatingWhatsappButtton";
import { HeroSection } from "./components/HeroSection";
import { TrustSection } from "./components/TrustSection";

function Home() {
  return (
    <div className="  space-y-8">
      {/* <Carousel /> */}
      <HeroSection />
      <div className="lg:px-12 space-y-8">
        <TopCategories />
        <TopSelling />
        <BestPicks />
        <FloatingWhatsAppButton />
        <TrustSection />
      </div>
    </div>
  );
}

export default Home;
