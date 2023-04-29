import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import React from 'react'
// import LogoS from '../../assets/images/logo-s.jpg'
import LogoSubtitle from '../../assets/images/logo-s.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
const Sidebar
 = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            {/* <img src={LogoS} alt='logo' /> */}
            <img className='sub-logo' src={LogoSubtitle} alt='g Geogrey' />
            <p>Geogrey</p>

        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />

            </NavLink> 
            <NavLink exact='true' activeclassname='active' className= "about-link" to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                
            </NavLink>
            <NavLink exact='true' activeclassname='active' className= "contact-link" to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/gregory-mbugua-081116246/'>
                <BsLinkedin />
                </a>

            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/geogrey12muiruri'>
                <FaGithub />
                </a>

            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.youtube.com/channel/UCiIOiKHc9rGwFxr7fTAJlAw'>
                <FaYoutube />
                </a>

            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://twitter.com/GREGORY_MBUGUA1'>
                <BsTwitter />
                </a>

            </li>
        </ul>

    </div>
  )
}

export default Sidebar
