import React, { useState } from "react";

import { Link as LinkScroll } from "react-scroll";

import '../css/Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState("navbar-menu");
  const [icon, setIcon] = useState("navbar-toggler");
  const navToggle = () => {
    if (active === "navbar-menu") {
      setActive("navbar-menu active");
    } else setActive("navbar-menu");

    // Icon Toggler
    if (icon === "navbar-toggler") {
      setIcon("navbar-toggler toggle");
    } else setIcon("navbar-toggler");
  };

  const [fix, setFix] = useState(false);
  function setFixed() {
    if (window.scrollY >= 1) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);

  return (
    <>
      <nav className={fix ? "navbar fixed" : "navbar"}>
        <div className="navbar-title-ctr">
          <h1 className="navbar-title">VP</h1>
        </div>
        <ul className={active}>
          <LinkScroll className="navbar-btn" id="btn-1" to="home" spy={true} smooth={true} offset={50} duration={500}>Home</LinkScroll>
          <LinkScroll className="navbar-btn" id="btn-2" to="about" spy={true} smooth={true} offset={50} duration={500}>About</LinkScroll>
          <LinkScroll className="navbar-btn" id="btn-3" to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</LinkScroll>
          <LinkScroll className="navbar-btn" id="btn-4" to="experience" spy={true} smooth={true} offset={50} duration={500}>Experience</LinkScroll>
          <LinkScroll className="navbar-btn" id="btn-5" to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</LinkScroll>
          {/* <CustomLink to="/projects" className="navbar-btn" id="btn-3">Projects</CustomLink> */}
          {/* <CustomLink to="/publications" className="navbar-btn" id="btn-4">Publications</CustomLink> */}
          {/* <CustomLink to="/contact" className="navbar-btn" id="btn-5">Contact</CustomLink> */}
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;