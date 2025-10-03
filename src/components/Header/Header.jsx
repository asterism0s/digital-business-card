import './Header.css';
import profilePic from '../../assets/profile-picture.svg'

function Header() {
    return (
        <div className='business-card'>
            <img className='profile-picture' src={profilePic} alt='profile picture'></img>
            <h2 className=''>Sarah Siqueira</h2>
        </div>
    );
}

export default Header;