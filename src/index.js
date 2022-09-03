import React from "react";
import ReactDOM from "react-dom/client";
// css fayllar import qilindi
import "./index.css";
import "./css/header.css";
import "./css/skills.css";
import "./css/pricing.css";
// js fayllar import qilindi
import Header from "./js/header.js";
import Skills from "./js/skills.js";
import AboutUs from "./js/about-us";
import Pricing from "./js/pricing";
import ContactUs from "./js/contact-us";
import Footer from "./js/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Skills />
    <AboutUs />
    <Pricing />
    <ContactUs />
    <Footer />
  </React.StrictMode>
);
