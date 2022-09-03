import React, { Component } from "react";

import person from "./../../assets/images/hero/person.JPG";
import caseta from "./../../assets/images/hero/caseta.JPG";
import kettleAndCup from "./../../assets/images/hero/kettle-and-cup.JPG";
import car from "./../../assets/images/hero/car.JPG";
import cat from "./../../assets/images/hero/cat.JPG";

import bicycle from "./../../assets/images/hero/bicycle.JPG";
import number from "./../../assets/images/hero/number.JPG";
import clock from "./../../assets/images/hero/clock.JPG";
import watermelon from "./../../assets/images/hero/watermelon.JPG";

import "./hero.scss";

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero__container">
          <div className="hero__container__title-box">
            <h1 className="hero__container__title-box__title">Odam Lviran</h1>
            <ul className="hero__container__title-box__ul">
              <li className="hero__container__title-box__ul__li">Home</li>
              <li className="hero__container__title-box__ul__li">About</li>
              <li className="hero__container__title-box__ul__li">Contact</li>
            </ul>
            <h2 className="hero__container__title-box__picture-title">
              Illustrator
            </h2>
          </div>
          <div className="hero__container__boxes">
            <div className="hero__container__boxes__first-box">
              <div className="hero__container__boxes__first-box__box">
                <img
                  className="hero__container__boxes__first-box__box__img"
                  src={person}
                  alt="Img not found"
                />
              </div>
              <div className="hero__container__boxes__first-box__box">
                <img
                  className="hero__container__boxes__first-box__box__img"
                  src={caseta}
                  alt="Img not found"
                />
              </div>
              <div className="hero__container__boxes__first-box__box">
                <img
                  className="hero__container__boxes__first-box__box__img"
                  src={kettleAndCup}
                  alt="Img not found"
                />
              </div>
              <div className="hero__container__boxes__first-box__box">
                <img
                  className="hero__container__boxes__first-box__box__img"
                  src={car}
                  alt="Img not found"
                />
              </div>
              <div className="hero__container__boxes__first-box__box">
                <img
                  className="hero__container__boxes__first-box__box__img"
                  src={cat}
                  alt="Img not found"
                />
              </div>
            </div>
            <div className="hero__container__boxes__second-box">
              <div className="hero__container__boxes__second-box__box">
                <img
                  className="hero__container__boxes__second-box__box__img"
                  src={bicycle}
                  alt="Img not found"
                />
              </div>
              <div className="hero__container__boxes__second-box__box">
                <img
                  className="hero__container__boxes__second-box__box__img"
                  src={number}
                  alt="Img not found"
                />
              </div>
              <div className="hero__container__boxes__second-box__box">
                <img
                  className="hero__container__boxes__second-box__box__img"
                  src={clock}
                  alt="Img not found"
                />
              </div>
              <div className="hero__container__boxes__second-box__box">
                <img
                  className="hero__container__boxes__second-box__box__img"
                  src={watermelon}
                  alt="Img not found"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
