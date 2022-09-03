import React from "react";

//css papkani ichidagi pricing.css fayli import qilindi
import "../css/pricing.css";

// images papkasini ichidagi pricing papkasini ichidan rasmlar import qilib olindi
import pricingBanner1PNG from "../images/pricing/pricing-banner-1.png";
import pricingBanner2PNG from "../images/pricing/pricing-banner-2.png";
import pricingBanner3PNG from "../images/pricing/pricing-banner-3.png";

export default class Pricing extends React.Component {
  render() {
    return (
      // pricing section started
      <section className="pricing" id="pricing">
        <div className="container">
          <h1 className="pricing-title">Pricing</h1>
          <div className="pricing-boxes">
            {/* pricing-box-1 */}
            <div className="pricing-box-1">
              <div className="pricing-box-1-banner">
                <img
                  className="pricing-box-1-banner-img"
                  src={pricingBanner1PNG}
                  alt="Img not found"
                />
              </div>
              <div className="pricing-box-1-word">
                <h1 className="pricing-box-1-word-title">
                  Self-study online course
                </h1>
                <p className="pricing-box-1-word-description">
                  Start learning English online in live classes with qualified.
                </p>
                <p className="pricing-box-1-word-price">
                  <span className="pricing-box-1-word-price-bold">£5.99</span>{" "}
                  per month
                </p>
              </div>
            </div>
            {/* pricing-box-2 */}
            <div className="pricing-box-2">
              <div className="pricing-box-2-banner">
                <img
                  className="pricing-box-2-banner-img"
                  src={pricingBanner2PNG}
                  alt="Img not found"
                />
              </div>
              <div className="pricing-box-2-word">
                <h1 className="pricing-box-2-word-title">
                  Live online classes
                </h1>
                <p className="pricing-box-2-word-description">
                  Interactive group classes with expert teachers. Free 7-day
                  trial
                </p>
                <p className="pricing-box-2-word-price">
                  <span className="pricing-box-2-word-price-bold">£12.99</span>{" "}
                  per month
                </p>
              </div>
            </div>
            {/* pricing-box-3 */}
            <div className="pricing-box-3">
              <div className="pricing-box-3-banner">
                <img
                  className="pricing-box-3-banner-img"
                  src={pricingBanner3PNG}
                  alt="Img not found"
                />
              </div>
              <div className="pricing-box-3-word">
                <h1 className="pricing-box-3-word-title">Personal Tuition</h1>
                <p className="pricing-box-3-word-description">
                  Online one-to-one English tutoring – enjoy our first session
                  for only $1
                </p>
                <p className="pricing-box-3-word-price">
                  <span className="pricing-box-3-word-price-bold">£20.90</span>{" "}
                  per month
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      // pricing section ended
    );
  }
}
