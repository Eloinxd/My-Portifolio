import { faGit, faJava, faJsSquare, faReact, faRust, faSalesforce } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/animated-letters.component';
import './about.styles.scss';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    return(
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArr={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                        letterClass={letterClass}/>
                    </h1>
                    <p>        
                        To be honest, I'm a complete newbie in the world of programming. At the time of writing this 
                        I have just over a year of experience, but I feel that I am evolving fast and already have 
                        experience with several languages, frameworks and technologies such as Typescript, rust, react, 
                        nodejs, salesforce and others.
                    </p>
                    <p>
                        I am currently looking for professional opportunities in the field of web development, looking to 
                        improve my skills by gaining more experience in the job market. Professionally, I only have experience
                        developing for salesforce, but I already have countless personal projects to improve myself and my 
                        skills as a developer.
                    </p>
                    <p>
                        would like to say that I am attending college at PUC - Minas, seeking to graduate in computer 
                        science. I currently do not have an English certification, but I am very confident in my abilities.
                        Last but not least, I'm pursuing a certificate for CS 50, Harvard's Computer Science course.
                    </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faSalesforce} color='#28A4D9'/>
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faRust} color='#FFF'/>
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faGit} color='#EC4D28'/>
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faJava} color='#DD0031'/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default About;