import './Buttons.css';
import emailIcon from '../../assets/email-icon.svg';
import linkedinIcon from '../../assets/linkedin-icon.svg';

function Buttons() {
    return (
        <div className='container-buttons'>
            <button className='button button-email'>
                <img className='button-icon' src={emailIcon} alt='email icon'/>
                Email
            </button>
            <button className='button button-linkedin'>
                <img className='button-icon' src={linkedinIcon} alt='linkedin icon'/>
                Linkedin
            </button>
        </div>
    );
}

export default Buttons;