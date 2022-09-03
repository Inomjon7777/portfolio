import React, { Component } from "react";
//assets/images faylidan rasmlar chaqirib olindi
import laptopLogo from "./../../assets/images/banner/laptop-logo.JPG";
import phoneLogo from "./../../assets/images/banner/phone-logo.JPG";
// yozgan stylemiz ishlashi uchun banner.scss fayli chaqirib olindi
import "./banner.scss";

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="banner__container">
          <div className="banner__container__boxes">
            <div className="banner__container__boxes__logo-box">
              <h1 className="banner__container__boxes__logo-box__text">WiX</h1>
              <img
                className="banner__container__boxes__logo-box__laptop-logo"
                src={laptopLogo}
                alt="laptopLogo"
              />
              <img
                className="banner__container__boxes__logo-box__phone-logo"
                src={phoneLogo}
                alt="phoneLogo"
              />
            </div>
            <div className="banner__container__boxes__text-box">
              <p className="banner__container__boxes__text-box__text">
                Click edit and create your own amazing website
              </p>
              <a className="banner__container__boxes__text-box__link" href="#">
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
