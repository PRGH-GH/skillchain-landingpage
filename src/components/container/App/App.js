import HeroSection from "../../components/HeroSection/HeroSection";
import Navbar from "../../components/Navbar/Navbar";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import PartnerBanner from "../PartnerBanner/PartnerBanner";
import ReasonsSection from "../ReasonsSection/ReasonsSection";
import Footer from "../../components/Footer/Footer";
import ReinforcementSection from "../../components/ReinforcementStatement/ReinforcementStatement";
import "./App.scss";
import CandidateSection from "../../components/CandidateSection/CandidateSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <PartnerBanner />
      <ReasonsSection />
      <ReinforcementSection />
      <CandidateSection />
      <FeaturedJobs />
      <Footer />
    </div>
  );
}

export default App;