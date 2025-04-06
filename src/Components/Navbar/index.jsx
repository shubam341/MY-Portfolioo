/* eslint-disable no-unused-vars */
import React, { useEffect, useState,useRef } from 'react';
import "./Navbar.css";
import { SiWebmoney } from "react-icons/si";
import { menu } from "../../data";
import { Link ,animateScroll as scroll} from 'react-scroll';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from 'react-icons/fa';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [visible,setVisible]=useState(false);
  const handleScroll=()=>{
    const currentScrollPos=window.scrollY;
    if(currentScrollPos > 145){
      return setVisible(true)
    }
    return setVisible(false)
  }

  useEffect(()=>{
  window.addEventListener("scroll",handleScroll);
  return () => window.removeEventListener('scroll',handleScroll)
  },[])

const containerr=useRef(null)
gsap.registerPlugin(useGSAP)

useEffect(()=>{
  if(visible){
    gsap.fromTo(".navbar__container",{
      y:-250,
      width:'100%',
    },
    {
      y:0,
      top:0,
      zIndex:100,

    }
  )
  }
},[visible])


useGSAP(()=>{
  const timeline=gsap.timeline()
  timeline.from(".tab__item",{opacity:0,stagger:.5})
},{scope:containerr}
)

  
  return (
    <nav className={`navbar__container ${visible ? "visible":""}`} ref={containerr}>
      {showSidebar && (
        <div className='overlay' onClick={() => setShowSidebar(false)} />
      )}

      <div className="logo__container" onClick={() =>scroll.scrollToTop({duration:500})}>
        <SiWebmoney className="logo" />
      </div>

      <div className={`tab__group ${showSidebar ? 'show' : ''}`}>
    <span className='icon__container close__btn'  onClick={() => setShowSidebar(false)} >
      <FaTimes/>
    
    </span>
        
        {menu.map((list, index) => (
          <Link
            activeClass="active"
            className="tab__item name"
            to={list.name.toLowerCase()}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            key={index}
            onClick={() => setShowSidebar(false)}
          >
            {list.name}
          </Link>
        ))}
      </div>

     <div className="nav__buttons__group">
  <a 
    href="mailto:chshivam148@gmail.com" 
    className="btn btn__primary"
  >
    Hire Me <FaArrowUpRightFromSquare className="btn__icon" />
  </a>

  <FaBarsStaggered 
    className="menu" 
    onClick={() => setShowSidebar(true)} 
  />
</div>

    </nav>
  );
}

export default Navbar;
