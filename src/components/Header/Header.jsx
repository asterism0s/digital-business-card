import './Header.css';
import profilePic from '../../assets/profile-picture.svg'

function Header() {
    return (
        <div className='container-business-card'>
            <img className='profile-picture' src={profilePic} alt='profile picture'></img>
            <div className='container-description'>
                <p className='profile-name'>Sarah Siqueira</p>
                <p className='profile-role'>Web Developer</p>
                <p className='profile-email'>sarahssiqueira@proton.me</p>
            </div>
        </div>
    );
}

export default Header;