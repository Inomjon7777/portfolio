import React, { Component } from "react";
import swanIsle from "./../../assets/images/new-release/swan-isle.JPG";
import text from "./../../assets/images/new-release/text.JPG";
import "./new-release.scss";

class NewRelease extends Component {
  render() {
    return (
      <div className="new-release">
        <div className="new-release__container">
          <div className="new-release__container__box">
            <div className="new-release__container__box__title-box">
              <img
                className="new-release__container__box__title-box__advertising-text-img"
                src={text}
                alt="Img not found"
              />
              <h1 className="new-release__container__box__title-box__title">
                The Swan Isle <br /> (2023)
              </h1>
              <p className="new-release__container__box__title-box__description">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <p className="new-release__container__box__title-box__text">
                Order Now
              </p>
              <ul className="new-release__container__box__title-box__ul">
                <li className="new-release__container__box__title-box__ul__li">
                  <button className="new-release__container__box__title-box__ul__li__button">
                    Amazon
                  </button>
                </li>
                <li className="new-release__container__box__title-box__ul__li">
                  <button className="new-release__container__box__title-box__ul__li__button">
                    Google
                  </button>
                </li>
                <li className="new-release__container__box__title-box__ul__li">
                  <button className="new-release__container__box__title-box__ul__li__button">
                    ibooks
                  </button>
                </li>
              </ul>
            </div>
            <div className="new-release__container__box__banner-box">
              <img
                className="new-release__container__box__banner-box__img"
                src={swanIsle}
                alt="Img not found"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NewRelease;
