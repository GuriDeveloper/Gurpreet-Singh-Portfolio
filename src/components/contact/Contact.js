import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Contact() {

    const form = useRef();

    

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l52dli3', 'template_glu8v5s', form.current, 'znRXsGuapg6HwhhQb')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (

        <section id='contact'>
            <ToastContainer />
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>gsbedi90@gmail.com</h5>
                        <a href='mailto:gsbedi90@gmail.com'>Send a message</a>
                    </article>
                    {/* <article className='contect__option'>
                        <MdOutlineEmail />
                        <h4>Email</h4>
                        <h5>gsbedi90@gmail.com</h5>
                        <a>Send a message</a>
                    </article> */}
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+91-8571081633</h5>
                        <a href='https://api.whatsapp.com/send?phone=+918571081633'>Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name' required></input>
                    <input type='email' name='email' placeholder='Your Email' required></input>
                    <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
