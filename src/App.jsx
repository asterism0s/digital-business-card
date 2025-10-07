import Header from './components/Header/Header';
import Buttons from './components/Buttons/Buttons';
import About from './components/About/About';
import Interests from './components/Interests/Interests';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
    return (
        <div className='container-business-card'>
            <Header />
            <Buttons />
            <About />
            <Interests />
            <Footer />
        </div>
    );
}

export default App;