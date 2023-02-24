import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import MobileNavbar from "../../components/MobileNavbar/MobileNavbar";
import MobileNavbarLinks from "../../components/MobileNavbarLinks/MobileNavbarLinks";
import Navbar from "../../components/Navbar/Navbar";
import ReinforcementSection from "../../components/ReinforcementStatement/ReinforcementStatement";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import PartnerBanner from "../PartnerBanner/PartnerBanner";
import ReasonsSection from "../ReasonsSection/ReasonsSection";
import "./App.scss";
import CandidateSection from "../../components/CandidateSection/CandidateSection";

function App() {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const handleClick = () => {
    setIsMobileMenuOpened(!isMobileMenuOpened);
  };

  return (
    <div className="App">
      <>
        <MobileNavbar
          handleClick={handleClick}
          isMobileMenuOpened={isMobileMenuOpened}
        />
        {isMobileMenuOpened && <MobileNavbarLinks />}
      </>
      <Navbar />
      <HeroSection />
      <PartnerBanner />
      <ReasonsSection />
      <FeaturedJobs />
      <ReinforcementSection />
      <CandidateSection />
      <FeaturedJobs />
      <Footer />
    </div>
  );
}

export default App;
