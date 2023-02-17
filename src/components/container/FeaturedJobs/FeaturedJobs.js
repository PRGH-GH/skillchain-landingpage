import { staticFeaturedJobs } from '../../../state/models/staticFeaturedJobs';
import viewMoreIcon from './assets/icons/viewMore.svg';
import amazonLogo from './assets/logos/amazon.png';
import quantumLogo from './assets/logos/quantum.png';
import './FeaturedJobs.scss';


function FeaturedJobs() {
    const logoNameToPath = {
        'Amazon': amazonLogo,
        'Quantum': quantumLogo,
    }

    return (
        <section className="FeaturedJobs">
            <div className="FeaturedJobs__heading">
                <h2>Featured Jobs</h2>
                <a className="FeaturedJobs__viewMoreLink" href="#">
                    <span className="FeaturedJobs__viewMoreLink__text">View More</span>
                    <span className="FeaturedJobs__viewMoreLink__icon">
                        <img src={viewMoreIcon} alt="view more link icon" />
                    </span>
                </a>
            </div>
            <div className="FeaturedJobs__cardContainer">
                {staticFeaturedJobs.map((job) => (
                    job.title
                ))}
            </div>
        </section>
    );
}

export default FeaturedJobs;
