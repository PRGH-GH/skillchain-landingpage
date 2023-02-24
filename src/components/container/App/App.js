import React, { useState } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Navbar from "../../components/Navbar/Navbar";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import PartnerBanner from "../PartnerBanner/PartnerBanner";
import Footer from "../../components/Footer/Footer";
import ReinforcementSection from "../../components/ReinforcementStatement/ReinforcementStatement";
import "./App.scss";
import MobileNavigation from "../../components/MobileNavigation/MobileNavigation";
import NavbarMobileLogoBar from "../../components/NavbarMobileLogoBar/NavbarMobileLogoBar";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="App">
      <>
        <NavbarMobileLogoBar handleClick={handleClick} isClicked={isClicked} />
        {isClicked && <MobileNavigation />}
      </>
      <Navbar />
      <HeroSection />
      <PartnerBanner />
      <ReinforcementSection />
      <FeaturedJobs />
      <Footer />
    </div>
  );
}

export default App;