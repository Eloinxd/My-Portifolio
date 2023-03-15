import AnimatedLetters from '../AnimatedLetters/animated-letters.component';
import './about.styles.scss';

const About = () => {
    return(
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters strArr={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}/>
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
        </div>
    )
}

export default About;