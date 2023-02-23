import CandidateSection from '../../components/CandidateSection/CandidateSection';
import HeroSection from '../../components/HeroSection/HeroSection';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import './App.scss';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <FeaturedJobs />
      <CandidateSection />
    </div>
  );
}

export default App;
