import React from "react";
import heroImage from "../assets/img/hero.jpg"; // Import image from img folder
import locationsData from "../content/locations.json"; // Import JSON content

console.log(locationsData); // Debugging line to check if data is imported correctly

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="header" style={{ backgroundImage: `url(${heroImage})` }}>
        <h1>Explore Sri Lanka</h1>
        <p>One tap away from an amazing journey</p>
      </header>
      <section className="features">
        {locationsData.map((location, index) => (
          <div className="feature-card" key={index}>
            <h2>{location.name}</h2>
            <p>{location.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomePage;
