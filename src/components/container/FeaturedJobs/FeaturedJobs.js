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
            <div className="FeaturedJobs__Heading">
                <h2>Featured Jobs</h2>
                <a className="FeaturedJobs__ViewMoreLink" href="#">
                    <span className="FeaturedJobs__ViewMoreLink__Text">View More</span>
                    <span className="FeaturedJobs__ViewMoreLink__Icon">
                        <img src={viewMoreIcon} alt="view more link icon" />
                    </span>
                </a>
            </div>
            <div className="FeaturedJobs__CardContainer">
                {staticFeaturedJobs.map((job) => (
                    job.title
                ))}
            </div>
        </section>
    );
}

export default FeaturedJobs;
