import './contact.styles.scss';
import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters/animated-letters.component';
const Contact = () => {
    const refForm = useRef();
    const contactMeArr = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e'];
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
        
        emailjs.sendForm(
            'default_service',
            'template_tfksiv3',
            refForm.current,
            'z-cl-lb5SYblHtA3y'
        )
        .then(
            ()=>{
                window.location.reload(false)
                alert('Message successfully sent!')
            },
            (error)=>{
                alert('Failed to send the message, please try again.' + error)
                console.log(error)
            }
        )
    }
    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters strArr={contactMeArr} idx={15} letterClass={letterClass}/>
                    </h1>
                    <p>
                        I am seeking ambitious and large projects, where I can work and alongside improve my habilities.
                        If you have some interest in my profile and want to make a question, don't hesitate to contact me
                        using below form either.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' required/>
                                </li>
                                <li className='half'>
                                    <input type="email" name='email' placeholder='E-mail' required/>
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name='subject' required/> 
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value='SEND'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}


export default Contact