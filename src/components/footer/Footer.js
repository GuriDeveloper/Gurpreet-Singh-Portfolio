import React from 'react'
import './footer.css'
import { FaInstagram } from 'react-icons/fa'
import { GrFacebook } from 'react-icons/gr'
import { AiOutlineTwitter } from 'react-icons/ai'
function Footer() {
    return (
        <footer>
            <a href='#' className='footer__logo'>Gurpreet Singh</a>

            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About Me</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href=''><GrFacebook /></a>
                <a href=''><FaInstagram /></a>
                <a href=''><AiOutlineTwitter /></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; Gurpreet Singh. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer
