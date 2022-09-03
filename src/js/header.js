import React from "react";
// images papkasini ichidagi header papkasini ichidan rasmlar import qilindi
import haederLampPNG from "../images/header/headerLampPNG.png";
import headerPNG from "../images/header/headerPNG.png";
import burgerMenu from "../images/header/burger-menu.png";
// css papkasini ichidagi header papkasini ichidan css fayllar import qilindi
import headerCSS from "../css/header.css";

export default class Header extends React.Component {
  render() {
    return (
      // header started
      <header className="header" id="header">
        <div className="container">
          {/* nav started */}
          <nav className="nav">
            <div className="logo">
              <p className="title-logo">
                Brit<span>lex</span>
              </p>
            </div>
            <div className="navbar">
              <ul className="navbar-list">
                <li>
                  <a href="#header">Home</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#about-us">About Us</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#contacts">Contacts</a>
                </li>
              </ul>
            </div>
            <div className="nav-btn">
              <button className="navbar-btn">Let’s Talk</button>
              <img className="none" src={burgerMenu} alt="Img not found" />
            </div>
          </nav>
          {/* nav ended */}
          {/* foreign-language started */}
          <div className="foreign-language">
            {/* foreign-language-title */}
            <div className="foreign-language-title">
              {/* title and lamp photo */}
              <div className="bigTitle_and_lanpPNG_box">
                <div className="foreign-language-big-title">
                  <h1 className="foreign-language-header-title">
                    Learn Any Foreign Language
                  </h1>
                </div>
                <div className="foreign-language-lamp-png">
                  <img src={haederLampPNG} alt="lamp.png" />
                </div>
              </div>
              {/* description */}
              <p className="foreign-language-description">
                With our teachers who write a program for each student, you will
                be able to make your first sketch after the first lesson.
              </p>
              {/* button */}
              <button className="foreign-language-btn">Get started</button>
            </div>
            {/* foreign-language-banner */}
            <div className="foreign-language-banner">
              <img
                className="header-banner-photo none"
                src={headerPNG}
                alt=""
              />
            </div>
          </div>
          {/* foreign-language ended */}
        </div>
      </header>
      // header ended
    );
  }
}
