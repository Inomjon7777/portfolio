import React, { Component } from "react";
import flag from "./../../assets/images/about/flag.JPG";
import woman from "./../../assets/images/about/woman.JPG";
import "./about.scss";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about__container">
          <div className="about__container__box">
            <img
              className="about__container__box__flag-img"
              src={flag}
              alt="Img not found
            "
            />
            <img
              className="about__container__box__woman-img"
              src={woman}
              alt="Img not found
            "
            />
            <h1 className="about__container__box__title">
              About Kayla Griffith
            </h1>
            <p className="about__container__box__description">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <button className="about__container__box__button">Read More</button>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
