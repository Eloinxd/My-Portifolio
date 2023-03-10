import './home.styles.scss';
import LogoTitle from '../../assets/images/logo-p.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['e','d','r','o'];
    const jobArray = ['W', 'e', 'b', 'S', 'a', 'l', 'e', 's', 'f', 'o','r','c','e', 'D','e','v','e','l','o','p','e','r'];
    return(
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, I'm<br />
                    <img src={LogoTitle} alt="P" />
                     edro
                    <br />
                    Web / Salesforce Developer
                </h1>
                <div className='contact-text'>
                    <h2>
                        FullStack Developer / TypeScript enthusiast
                    </h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
            </div>
        </div>
    );
}

export default Home; 