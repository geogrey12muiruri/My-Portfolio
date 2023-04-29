import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/LogoT.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const Home
 = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['e', 'o', 'g', 'r', 'e', 'y']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]
  return (
   
      <div className=' container home-page'>
        <div className='text-zone'>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br/>
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
            <img 
            src={LogoTitle}
             alt="Backend Developer Name, Web developer Name" /> 
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
            <br/>
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
        

          </h1>
          <h2>Backend Developer/ Ruby on Rails and React JS  Expert/ Youtube content creat</h2>
          <Link to ='/contact' className='flat-button'> Contact Me</Link>
        </div>
        
      </div>

    
  )
}

export default Home