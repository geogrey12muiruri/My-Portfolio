import { useEffect, useRef } from 'react';
import './index.scss';
import gsap from 'gsap-trial';

const Logo = () => {
  const containerRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

    tl.to(containerRef.current, {
      duration: 0,
      opacity: 1,
    })
      .from(iconRef.current, {
        duration: 1,
        opacity: 0,
        scale: 0.5,
        rotate: 720,
        ease: 'elastic.out(1, 0.5)',
      });
  }, []);

  return (
    <div className="logo-container" ref={containerRef}>
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="30" y="25" width="60" height="50" fill="#000" />
        <rect x="35" y="30" width="50" height="40" fill="#00FF00" />
        <rect x="45" y="35" width="30" height="30" fill="#000" />
        <rect x="38" y="45" width="12" height="10" fill="#000" />
        <rect x="70" y="45" width="12" height="10" fill="#000" />
        <path d="M60,80 C55,85 65,85 60,80 L60,80 Z" fill="#FFF" />
        <path d="M50,50 Q60,45 70,50" fill="none" stroke="#000" strokeWidth="2" />
        <path d="M50,55 Q60,60 70,55" fill="none" stroke="#000" strokeWidth="2" />
        <path d="M50,60 Q60,65 70,60" fill="none" stroke="#000" strokeWidth="2" />
        <g id="hacker-head" transform="translate(60, 25)">
          <circle cx="0" cy="0" r="10" fill="#00FF00" />
          <path d="M-7,-7 Q0,-10 7,-7" fill="none" stroke="#000" strokeWidth="2" />
          <path d="M-6,-6 Q0,-9 6,-6" fill="none" stroke="#000" strokeWidth="2" />
          <path d="M-5,-5 Q0,-8 5,-5" fill="none" stroke="#000" strokeWidth="2" />
        </g>
        <g id="hacker-torso" transform="translate(60, 45)">
          <rect x="-15" y="-10" width="30" height="20" fill="#00FF00" />
          <rect x="-13" y="-8" width="26" height="16" fill="#00FF00" />
          <rect x="-11" y="-6" width="22" height="12" fill="#00FF00" />
        </g>
        <g id="hacker-arm-left" transform="translate(35, 50)">
          <rect x="-10" y="-2" width="10" height="20" fill="#00FF00" />
          <rect x="-8" y="0" width="6" height="16" fill="#00FF00" />
          <rect x="-6" y="2" width="2" height="12" fill="#00FF00" />
        </g>
        <g id="hacker-arm-right" transform="translate(85, 50)">
          <rect x="0" y="-2" width="10" height="20" fill="#00FF00" />
          <rect x="2" y="0" width="6" height="16" fill="#00FF00" />
          <rect x="4" y="2" width="2" height="12" fill="#00FF00" />
        </g>
        <g id="hacker-leg-left" transform="translate(50, 70)">
          <rect x="-5" y="-2" width="10" height="20" fill="#00FF00" />
          <rect x="-3" y="0" width="6" height="16" fill="#00FF00" />
          <rect x="-1" y="2" width="2" height="12" fill="#00FF00" />
        </g>
        <g id="hacker-leg-right" transform="translate(70, 70)">
          <rect x="-5" y="-2" width="10" height="20" fill="#00FF00" />
          <rect x="-3" y="0" width="6" height="16" fill="#00FF00" />
          <rect x="-1" y="2" width="2" height="12" fill="#00FF00" />
        </g>
      </svg>
    </div>
  );
};
export default Logo;
          
