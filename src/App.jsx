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
      <Hero />
      <FAQ />
      <Locations />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
