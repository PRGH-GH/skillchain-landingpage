import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../../components/HeroSection/HeroSection";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import PartnerBanner from "../PartnerBanner/PartnerBanner";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <PartnerBanner />
      <FeaturedJobs />
    </div>
  );
}

export default App;
