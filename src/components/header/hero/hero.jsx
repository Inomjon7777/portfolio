import React, { Component } from "react";
import woman from "./../../../assets/images/header/woman.JPG";
import "./hero.scss";

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero__container">
          <div className="hero__container__boxes">
            <div className="hero__container__boxes__img-box">
              <img
                className="hero__container__boxes__img-box__img"
                src={woman}
                alt="woman img"
              />
            </div>
            <div className="hero__container__boxes__text-box">
              <h1 className="hero__container__boxes__text-box__title">
                Kayla Griffith
              </h1>
              <p className="hero__container__boxes__text-box__description">
                Award Winning Author
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Hero;
