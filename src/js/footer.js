import React from "react";

import "../css/footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      //  footer started
      <footer className="footer">
        <div className="container">
          <div className="footer-boxes">
            <div className="footer-logo">
              <p>
                <span>Brit</span>lex
              </p>
            </div>
            <div className="footer-link">
              <ul>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      //  footer ended
    );
  }
}
