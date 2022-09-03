import React, { Component } from "react";

import SocialNetworks from "./components/social-networks/social-networks";
import Banner from "./components/banner/banner";
import Header from "./components/header/index/index";
import NewRelease from "./components/new-release/new-release";
import Praise from "./components/praise/praise";
import Appearances from "./components/appearances/appearances";
import About from "./components/about/about";
import Footer from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <>
        <SocialNetworks />
        <Banner />
        <Header />
        <NewRelease />
        <Praise />
        <Appearances />
        <About />
        <Footer />
      </>
    );
  }
}
export default App;
