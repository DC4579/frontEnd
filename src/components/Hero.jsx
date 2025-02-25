import React from "react";

const Hero = ({ title, subtitle }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <input type="text" placeholder="Search Locations" className="search-box" />
      </div>
    </section>
  );
};

export default Hero;
