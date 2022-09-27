import React from "react";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import OurTeamSection from "./components/OurTeamSection";

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <HowItWorksSection />
      <OurTeamSection />
    </React.Fragment>
  );
};

export default Home;
