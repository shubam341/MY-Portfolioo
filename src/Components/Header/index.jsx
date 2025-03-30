import React from 'react';
import "./Header.css";
import { profile8 } from "../../images";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <header id='header' className='blur-effect'>
      <div className="stroke__text intro__text">HELLO</div>

      <div className="section__wrapper header__container">
        {/* Left Side: Static Text Content */}
        <div className="column intro__container blur-effect">
          <div className="header__info">
            <div className="header__info__top">
              Hello There! I'm 
              <span className="color__primary">
                {/* Typewriter Effect Only on Name */}
                <Typewriter
                  options={{
                    strings: ["Shubam Choudhary"],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                  }}
                />
              </span>
            </div>

            <div className="header__info__middle">
              <h1 className="primary__title header__title">
                {/* Typewriter Effect Only on "I'm a Web Developer" */}
                <Typewriter
                  options={{
                    strings: ["I'M A WEB DEVELOPER", "I AM A PROGRAMMER"],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                  }}
                />
              </h1>
              <p className="text__muted header__description">
                "I transform complex user needs into seamless digital experiences that combine innovation, functionality, and elegance."
              </p>
            </div>

            {/* Static Buttons */}
            <div className="header__info__bottom nav__buttons__group">
              <button className="btn btn__primary">Download CV</button>
              <a href="mailto:chshivam148@gmail.com" className="btn btn__primary">Email Me</a>
            </div>
          </div>
        </div>

        {/* Right Side: Static Profile Picture */}
        <div className="column profile__wrapper">
          <div className="profile__photo__container">
            <img src={profile8} className="profile__photo" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
