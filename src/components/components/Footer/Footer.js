import './Footer.scss';
import logo from './../../assets/skillchainLogoDark.svg';


function Footer() {
    return (
        <footer className='Footer'>
            <div className='Footer__container'>
                <div className='Footer__container__logo'>
                    <img alt="Logo" src={logo}/>
                </div>
                <div className='Footer__container__frame'>
                    <a href='/#'>Privacy Policy</a>
                    <a href='/#'>Terms and Conditions</a>
                    <p className='space'>|</p>
                    <p>© {(new Date()).getFullYear()} SkillChain</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
