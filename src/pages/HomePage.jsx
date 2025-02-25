import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Locations from "../components/Locations";
import Reviews from "../components/Reviews";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";
import homeContent from "../content/home.json";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero title={homeContent.hero.title} subtitle={homeContent.hero.subtitle} />
      <Locations locations={homeContent.locations} />
      <Reviews reviews={homeContent.reviews} />
      <FAQs faqs={homeContent.faqs} />
      <Footer />
    </div>
  );
};

export default HomePage;
