import React, { Component } from "react";
import "./social-networks.scss";

class SocialNetworks extends Component {
  render() {
    return (
      <div className="social-networks">
        <i class="social-networks__twitter-logo fa-brands fa-twitter"></i>
        <i class="social-networks__facebook-logo fa-brands fa-facebook-f"></i>
      </div>
    );
  }
}
export default SocialNetworks;
