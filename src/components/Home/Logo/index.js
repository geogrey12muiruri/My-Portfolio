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
        <circle cx="60" cy="40" r="20" fill="#ED1C24" />
        <rect x="45" y="60" width="30" height="30" fill="#000" />
        <path d="M60,80 C55,85 65,85 60,80 L60,80 Z" fill="#FFF" />
        <path d="M50,50 Q60,45 70,50" fill="none" stroke="#000" strokeWidth="2" />
        <path d="M50,55 Q60,60 70,55" fill="none" stroke="#000" strokeWidth="2" />
        <path d="M50,60 Q60,65 70,60" fill="none" stroke="#000" strokeWidth="2" />
        <g id="coder-body" transform="translate(60, 47)">
          <rect x="-15" y="-10" width="30" height="20" fill="#fff" />
          <rect x="-13" y="-8" width="26" height="16" fill="#fff" />
          <rect x="-11" y="-6" width="22" height="12" fill="#fff" />
        </g>
        <g id="coder-arm-left" transform="translate(40, 50)">
          <rect x="-10" y="-2" width="10" height="20" fill="#fff" />
          <rect x="-9" y="-1" width="8" height="18" fill="#000" />
          <rect x="-6" y="-8" width="15" height="6" fill="#000" />
        </g>
        <g id="coder-arm-right" transform="translate(80, 50)">
          <rect x="0" y="-2" width="10" height="20" fill="#fff" />
          <rect x="1" y="-1" width="8" height="18" fill="#000" />
          <rect x="-9" y="-8" width="15" height="6" fill="#000" />
        </g>
        <g id="coder-leg-left" transform="translate(50, 70)">
          <rect x="-5" y="-2" width="10" height="20" fill="#fff" />
          <rect x="-4" y="-1" width="8" height="18" fill="#000" />
          <rect x="-1" y="-8" width="15" height="6" fill="#000" />
        </g>
        <g id="coder-leg-right" transform="translate(70, 70)">
          <rect x="0" y="-2" width="10" height="20" fill="#fff" />
          <rect x="1" y="-1" width="8" height="18" fill="#000" />
          <rect x="-9" y="-8" width="15" height="6" fill="#000" />
        </g>
        <g id="coder-head" transform="translate(60, 30)">
          <circle cx="0" cy="0" r="10" fill="#fff" />
          <circle cx="0" cy="0" r="8" fill="#fff" />
          <circle cx="0" cy="0" r="6" fill="#fff" />
          <circle cx="0" cy="0" r="4" fill="#fff" />
          <circle cx="0" cy="0" r="2" fill="#fff" />
        </g>
      </svg>
    </div>
  );
};
export default Logo;
