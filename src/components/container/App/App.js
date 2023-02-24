import HeroSection from "../../components/HeroSection/HeroSection";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import PartnerBanner from "../PartnerBanner/PartnerBanner";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <PartnerBanner />
      <FeaturedJobs />
    </div>
  );
}

export default App;
