import React, { Component } from "react";

import Nav from "./nav/nav";
import Hero from "./hero/hero";

import "./header.scss";

class CommonHeader extends Component {
  render() {
    return (
      <div className="common-header">
        <Nav />
        <Hero />
      </div>
    );
  }
}
export default CommonHeader;
