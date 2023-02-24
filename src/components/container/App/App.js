import HeroSection from "../../components/HeroSection/HeroSection";
import Navbar from "../../components/Navbar/Navbar";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import PartnerBanner from "../PartnerBanner/PartnerBanner";
import Footer from "../../components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <PartnerBanner />
      <FeaturedJobs />
      <Footer />
    </div>
  );
}

export default App;
