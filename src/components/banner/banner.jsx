import React, { Component } from "react";

import laptop from "./../../assets/images/nav/laptop-logo.JPG";
import phone from "./../../assets/images/nav/phone-logo.JPG";

import "./banner.scss";

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="banner__container">
          <div className="banner__container__boxes">
            <div className="banner__container__boxes__logo-box">
              <h1 className="banner__container__boxes__logo-box__title">WiX</h1>
              <img
                className="banner__container__boxes__logo-box__laptop-logo"
                src={laptop}
                alt="Img not found"
              />
              <img
                className="banner__container__boxes__logo-box__phone-logo"
                src={phone}
                alt="Img not found"
              />
            </div>
            <div className="banner__container__boxes__text-box">
              <p className="banner__container__boxes__text-box__text">
                Click edit and create your own amazing website
              </p>
              <a className="banner__container__boxes__text-box__href" href="#">
                Read More
              </a>
              <button className="banner__container__boxes__text-box__button">
                Edit this site
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Banner;
