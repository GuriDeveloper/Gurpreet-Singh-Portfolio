import CTA from './CTA'
import './header.css'
import me from '../../assests/me.png'
import topImg from '../../assests/portfolio img.jpg'
import remvoedBg from '../../assests/portfolio img-PhotoRoom.png-PhotoRoom.png'
import HeaderSocial from './HeaderSocial'


function Header() {
    return (
        <header>
            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h1>Gurpreet Singh</h1>
                <h5 className='text-light'>Full Stack Developer</h5>
                <CTA  />

                <HeaderSocial />

                <div className='me'>
                    <img  src={remvoedBg} alt=''></img>
                </div>

                <a href='#contact' className='scroll__down'>Scroll Down</a>
            </div>

        </header>
    )
}

export default Header