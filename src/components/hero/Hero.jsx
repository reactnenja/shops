// import React from "react";
import "./Hero.scss";
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="content__right">
          <span className="content__right-title">New Arrival</span>
          <h1 className="content__right-heading">
            Discover Our New Collection
          </h1>
          <p className="content__right-paragriph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="content__right-btn__link">BUY NOW</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
