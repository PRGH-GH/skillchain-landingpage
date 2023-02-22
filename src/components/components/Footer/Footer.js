import './Footer.scss';
import logo from './../../assets/skillchainLogoDark.svg';

function Footer() {
    return (
        <div className='Footer'>
            <div className='Footer__container'>
                <div className='branding__logo'>
                    <img alt="Logo" src={logo}/>
                </div>
                <div className='frame'>
                    <a classname='privacy__policy' href='#'>Privacy Policy</a>
                    <a className='terms' href='#'>Terms and Conditions</a>
                    <p className='space'>|</p>
                    <p className='copyright'>© 2023 SkillChain</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
