import React, { Component } from "react";
import quote from "./../../assets/images/praise/quote.JPG";
import "./praise.scss";

class Praise extends Component {
  render() {
    return (
      <div className="praise">
        <div className="praise__container">
          <h1 className="praise__container__title">Praise & Reviews</h1>
          <div className="praise__container__boxes">
            <div className="praise__container__boxes__text-box">
              <img
                className="praise__container__boxes__text-box
                __img"
                src={quote}
                alt="Img not found"
              />
              <p className="praise__container__boxes__text-box__text">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <p className="praise__container__boxes__text-box__little-text">
                ‘Swan Isle’ is Griffith's <br /> best writing yet” The <br />
                Times Book Review
              </p>
              <div className="praise__container__boxes__text-box__line-box">
                <div className="praise__container__boxes__text-box__line-box__line"></div>
              </div>{" "}
            </div>
            <div className="praise__container__boxes__text-box">
              <img
                className="praise__container__boxes__text-box
                __img"
                src={quote}
                alt="Img not found"
              />
              <p className="praise__container__boxes__text-box__text">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <p className="praise__container__boxes__text-box__little-text">
                ‘Gripping storytelling’ <br /> The Good Read Blog
              </p>
              <div className="praise__container__boxes__text-box__line-box">
                <div className="praise__container__boxes__text-box__line-box__line"></div>
              </div>
            </div>
            <div className="praise__container__boxes__text-box">
              <img
                className="praise__container__boxes__text-box
                __img"
                src={quote}
                alt="Img not found"
              />
              <p className="praise__container__boxes__text-box__text">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <p className="praise__container__boxes__text-box__little-text">
                Grifith’s voice tells the <br /> story of all women “The <br />
                Seattle Post Review”
              </p>
              <div className="praise__container__boxes__text-box__line-box">
                <div className="praise__container__boxes__text-box__line-box__line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Praise;
