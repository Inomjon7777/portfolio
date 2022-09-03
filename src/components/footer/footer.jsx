import React, { Component } from "react";

import "./footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__boxes">
          <p className="footer__boxes__text">
            © 2023 by Odam Lviran. Proudly created with{" "}
            <a className="footer__boxes__text__href" href="#">
              Wix.com
            </a>
          </p>
          <ul className="footer__boxes__ul">
            <li className="footer__boxes__ul__li">
              <i class="fa-brands fa-facebook-f"></i>
            </li>
            <li className="footer__boxes__ul__li">
              <i class="fa-brands fa-flickr"></i>
            </li>
            <li className="footer__boxes__ul__li">
              <i class="fa-brands fa-twitter"></i>
            </li>
            <li className="footer__boxes__ul__li">
              <i class="fa-brands fa-pinterest-p"></i>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}
export default Footer;
