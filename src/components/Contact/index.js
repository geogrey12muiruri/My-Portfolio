import './index.scss'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters'


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [successMessage, setSuccessMessage] = useState(false); // state for pop-up message
  const form = useRef()

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timerId)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_scvyku8', 'template_wmng503', form.current, 'ZukbQLA1x2zTmo6A-')
    .then((result) => {
        console.log(result.text);
        setSuccessMessage(true); // show pop-up message on successful send
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            i am currently available for freelance opportunities
            both remotley and on-site. 
            if you have a project that you want to start or 
            think i can help you with, please get in touch.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="user_name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="user_email"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Geogrey Muiruri,
          <br />
          Kenya,
          <br />
          kiambu, <br />
          01001 Kalimoni <br />
          
          <span>greggambugua@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[1.2921, 36.8219]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[1.2921, 36.8219]}>
              <Popup>Geogrey lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>

          {/* Popup Component */}
          {successMessage && (
            <div className="popup">
              <p>Message Sent Successfully!</p>
              <button onClick={() => setSuccessMessage(false)}>Close</button>
            </div>
          )}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Contact