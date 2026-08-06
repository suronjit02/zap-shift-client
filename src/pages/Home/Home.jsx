import React from "react";
import Banner from "./Banner/Banner";
import HowItWork from "./HowItWord/HowItWork";
import OurService from "./OurService/OurService";
import Brand from "./Brand/Brand";
import MerchantAndCustomer from "./MerchantAndCustomer/MerchantAndCustomer";
import Reviews from "./Reviews/Reviews";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div className="space-y-20 mb-20">
      <Banner />
      <HowItWork />
      <OurService />
      <Brand />
      <MerchantAndCustomer />
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
    </div>
  );
};

export default Home;
