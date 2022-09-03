import React, { Component } from "react";
import "./footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p className="footer__text">
          &copy; 2023 by K.Griffith. Proudly created with{" "}
          <a className="footer__text__href" href="#">
            Wix.com
          </a>
        </p>
      </footer>
    );
  }
}
export default Footer;
