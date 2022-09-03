import React, { Component } from "react";
import Banner from "./components/banner/banner";
import Hero from "./components/hero/hero";
import Footer from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <>
        <Banner />
        <Hero />
        <Footer />
      </>
    );
  }
}

export default App;
