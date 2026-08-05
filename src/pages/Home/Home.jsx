import React from "react";
import Banner from "./Banner/Banner";
import HowItWork from "./HowItWord/HowItWork";
import OurService from "./OurService/OurService";

const Home = () => {
  return (
    <div className="space-y-20">
      <Banner />
      <HowItWork />
      <OurService />
    </div>
  );
};

export default Home;
