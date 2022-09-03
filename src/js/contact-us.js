import React from "react";

// css papkasini ichidagi contact-us.css fayli import qilindi.
import "../css/contact-us.css";

// images papkasini ichidagi pricing papkasini ichidan rasmlar import qilib olindi
import contactUsBannerPNG from "../images/contact-us/contact-us-banenr.png";

export default class ContactUs extends React.Component {
  render() {
    return (
      // Contact-us section started
      <section className="contact-us" id="contacts">
        <div className="container">
          <div className="contact-us-boxes">
            <div className="contact-us-banner">
              <img
                className="contact-us-banner-img"
                src={contactUsBannerPNG}
                alt="Img not found"
              />
            </div>
            <div className="contact-us-word">
              <div className="contact-us-word-title">
                <h1>Contact Us</h1>
              </div>
              <div className="contact-us-word-description">
                <p>
                  Discover your current English level by taking our free online
                  English test. Sign up to our newsletter for learning tips and
                  free resources
                </p>
              </div>
              <div className="contact-us-word-form">
                <input type="text" placeholder="Enter Your E-mail" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      // Contact-us section ended
    );
  }
}
