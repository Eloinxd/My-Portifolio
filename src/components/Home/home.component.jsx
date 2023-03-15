import './home.styles.scss';
import LogoTitle from '../../assets/images/solidLogo.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/animated-letters.component';
import Logo from './Logo/logo.component';
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['e','d','r','o'];
    const jobArray = ['W', 'e', 'b',' ', '/', ' ', 'S', 'a', 'l', 'e', 's', 'f', 'o','r','c','e',' ','D','e','v'];
    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    return(
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass}`} _12>i, </span>
                <span className={`${letterClass}`} _13> </span>
                <span className={`${letterClass}`} _13> I'</span>
                <span className={`${letterClass}`} _14>m</span>
                <br />
                    <img src={LogoTitle} alt="P" className='logoP'/>
                     <AnimatedLetters letterClass={letterClass} strArr={nameArray} idx={15}/>
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArr={jobArray} idx={19}/>
                </h1>
                <div className='contact-text'>
                    <h2>
                        FullStack Developer / TypeScript enthusiast
                    </h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
            </div>
            <Logo/>
        </div>
    );
}

export default Home; 