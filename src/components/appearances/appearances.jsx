import React, { Component } from "react";
import "./appearances.scss";

class Appearances extends Component {
  render() {
    return (
      <div className="appearances">
        <div className="appearances__container">
          <div className="appearances__container__title-box">
            <h1 className="appearances__container__title-box__title">
              See Upcoming Appearances
            </h1>
            <p className="appearances__container__title-box__description">
              I'm a paragraph. Click here to add your own <br /> text and edit
              me. It's easy.
            </p>
          </div>
          <div className="appearances__container__boxes">
            <div className="appearances__container__boxes__box">
              <p className="appearances__container__boxes__box__title">
                January 18th 2023, The Breakfast Club, Virtual Book Reading{" "}
                <br /> of Swan Isle, 7PM - 8PM EST
              </p>
              <button className="appearances__container__boxes__box__button">
                Join
              </button>
            </div>
            <div className="appearances__container__boxes__box">
              <p className="appearances__container__boxes__box__title">
                January 18th 2023, The Breakfast Club, Virtual Book Reading{" "}
                <br /> of Swan Isle, 7PM - 8PM EST
              </p>
              <button className="appearances__container__boxes__box__button">
                Join
              </button>
            </div>
            <div className="appearances__container__boxes__box">
              <p className="appearances__container__boxes__box__title">
                January 18th 2023, The Breakfast Club, Virtual Book Reading{" "}
                <br /> of Swan Isle, 7PM - 8PM EST
              </p>
              <button className="appearances__container__boxes__box__button">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Appearances;
