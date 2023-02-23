import HeroSection from "../../components/HeroSection/HeroSection";
import Navbar from "../../components/Navbar/Navbar";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <FeaturedJobs />
    </div>
  );
}

export default App;
