import React from "react";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Locations from "./components/Locations";
import Reviews from "./components/Reviews";
import homeData from "./content/home.json";
import "./styles/global.css";   // Ensure the path is correct

function App() {
  return (
    <div>
      <Hero title={homeData.hero.title} subtitle={homeData.hero.subtitle} />
      <FAQ faqs={homeData.faqs} />
      <Locations locations={homeData.locations} />
      <Reviews reviews={homeData.reviews} />
      <Footer />
    </div>
  );
}

export default App;

