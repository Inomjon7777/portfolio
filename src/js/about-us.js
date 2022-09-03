import React from "react";

// css papkasini ichidagi about-us.css fayli import qilindi.
import aboutUsCSS from "../css/about-us.css";

// images papkasini ichidagi about-us papkasini ichidan rasmlar import qilindi
import aboutUsBannerPNG from "../images/about-us/about-us-banner.png";

export default class AboutUs extends React.Component {
  render() {
    return (
      // about us section started
      <section className="about-us" id="about-us">
        <div className="container">
          <div className="about-us-boxes">
            <div className="about-us-word">
              <h1 className="about-us-word-title">About Us</h1>
              <p className="about-us-word-description">
                The model offers a framework for discussing problems related to
                the user's experience, as well as possible ways and means of
                solving them. Application development begins at the top level
                (strategy), where the future software product is described quite
                abstractly from the point of view of the expectations of both
                users and the customer.
              </p>
              <div className="about-us-word-number-boxes">
                <div className="about-us-word-number-box-1">
                  <h1 className="about-us-word-number-box-1-title">800</h1>
                  <p className="about-us-word-number-box-1-word">Pupils</p>
                </div>
                <div className="about-us-word-number-box-2">
                  <h1 className="about-us-word-number-box-2-title">18</h1>
                  <p className="about-us-word-number-box-2-word">Teachers</p>
                </div>
                <div className="about-us-word-number-box-3">
                  <h1 className="about-us-word-number-box-3-title">6</h1>
                  <p className="about-us-word-number-box-3-word">
                    Foreign languages
                  </p>
                </div>
              </div>
            </div>
            <div className="about-us-banner">
              <img src={aboutUsBannerPNG} alt="Img not found" />
            </div>
          </div>
        </div>
      </section>
      // about us section ended
    );
  }
}
