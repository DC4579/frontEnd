import React from "react";

const Locations = ({ locations }) => {
  return (
    <section className="locations">
      <h2>Why Choose Us?</h2>
      <p>Find trusted, certified guides effortlessly.</p>
      <div className="location-grid">
        {locations.map((loc, index) => (
          <div key={index} className="location-card">
            <img src={loc.image} alt={loc.name} />
            <h3>{loc.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Locations;
