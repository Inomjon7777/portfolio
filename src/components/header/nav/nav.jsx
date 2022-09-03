import React, { Component } from "react";
import "./nav.scss";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__container__boxes">
            <h2 className="nav__container__boxes__title">K. Griffith</h2>
            <ul className="nav__container__boxes__ul">
              <li className="nav__container__boxes__ul__li">APPEARANCES</li>
              <li className="nav__container__boxes__ul__li">BOOKS</li>
              <li className="nav__container__boxes__ul__li">NEWS</li>
              <li className="nav__container__boxes__ul__li">ABOUT</li>
              <li className="nav__container__boxes__ul__li">CONTACT</li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Nav;
