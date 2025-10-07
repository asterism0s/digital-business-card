import './Footer.css';
import gitHubIcon from '../../assets/github-icon.svg'
import instagramIcon from '../../assets/instagram-icon.svg'

function Footer() {
    return (
        <footer>
            <a href="https://github.com/asterism0s" target="_blank" rel="noopener noreferrer">
                <img className='social-icons' src={gitHubIcon} alt="github icon"/>
            </a>
            <a href="https://www.instagram.com/asterism0s/" target="_blank" rel="noopener noreferrer">
                <img className='social-icons' src={instagramIcon} alt="github icon"/>
            </a>
        </footer>
    );
}

export default Footer;