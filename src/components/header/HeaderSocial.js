import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'


const HeaderSocial = () => {
    return (
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/gurpreet-singh-8a5263130/' alt='' target='_blank'><BsLinkedin /></a>
            <a href='https://github.com/gsbedi90' target='_blank' alt=''><BsGithub /></a>
        </div>
    )
}

export default HeaderSocial
