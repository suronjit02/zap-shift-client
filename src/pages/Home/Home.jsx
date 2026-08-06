import React from "react";
import Banner from "./Banner/Banner";
import HowItWork from "./HowItWord/HowItWork";
import OurService from "./OurService/OurService";
import Brand from "./Brand/Brand";
import MerchantAndCustomer from "./MerchantAndCustomer/MerchantAndCustomer";

const Home = () => {
  return (
    <div className="space-y-20 mb-20">
      <Banner />
      <HowItWork />
      <OurService />
      <Brand />
      <MerchantAndCustomer />
    </div>
  );
};

export default Home;
