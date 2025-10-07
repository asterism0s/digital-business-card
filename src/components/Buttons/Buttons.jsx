import './Buttons.css';
import emailIcon from '../../assets/email-icon.svg';
import linkedinIcon from '../../assets/linkedin-icon.svg';

function Buttons() {
    return (
        <div className='container-buttons'>
            <a href="mailto:sarahssiqueira@proton.me" className="button button-email">
                <img className='button-icon' src={emailIcon} alt='email icon'></img>
                Email
            </a>
            <a  href="https://www.linkedin.com/in/sarah-siqueira/" className="button button-linkedin" target="_blank"rel="noopener noreferrer">
                <img className='button-icon' src={linkedinIcon} alt='linkedin icon'></img>
                Linkedin
            </a>
        </div>
    );
}

export default Buttons;