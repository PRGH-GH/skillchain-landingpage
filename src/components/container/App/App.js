import HeroSection from "../../components/HeroSection/HeroSection";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import PartnerBanner from "../PartnerBanner/PartnerBanner";
import CallToActionStepCard from "../../components/CallToActionStepCard/CallToActionStepCard";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <PartnerBanner />
      <FeaturedJobs />
      <CallToActionStepCard />
      
    </div>
  );
}

export default App;
