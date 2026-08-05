import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";
import { Link } from "react-router";
import { GoArrowUpRight } from "react-icons/go";

const Banner = () => {
  return (
    <Carousel
      autoPlay
      stopOnHover
      infiniteLoop
      showThumbs={false}
      showArrows={false}
      showIndicators={true}
      showStatus={false}
      interval={4000}
      transitionTime={2000}
    >
      <div className="relative">
        <img src={bannerImg1} />
        {/* Banner Content */}
        <div className="absolute flex items-center gap-1 lg:gap-2 bottom-4 left-4 sm:bottom-8 sm:left-8 md:bottom-12 md:left-12 lg:bottom-20 lg:left-20 ">
          <Link
            to="/track-your-parcel"
            className="btn btn-accent rounded-lg px-2 lg:px-5"
          >
            Track Your Parcel
          </Link>
          <Link className="p-2 rounded-full bg-black-13 text-primary text-2xl">
            <GoArrowUpRight />
          </Link>
          <Link to="/be-a-rider" className="btn rounded-lg px-2 lg:px-5">
            Be a rider
          </Link>
        </div>
      </div>

      <div className="relative">
        <img src={bannerImg2} />
        {/* Banner Content */}
        <div className="absolute flex items-center gap-1 lg:gap-2 bottom-4 left-4 sm:bottom-8 sm:left-8 md:bottom-12 md:left-12 lg:bottom-20 lg:left-20">
          <Link
            to="/track-your-parcel"
            className="btn btn-accent rounded-lg px-2 lg:px-5"
          >
            Track Your Parcel
          </Link>
          <Link className="p-2 rounded-full bg-black-13 text-primary text-2xl">
            <GoArrowUpRight />
          </Link>
          <Link to="/be-a-rider" className="btn rounded-lg px-2 lg:px-5">
            Be a rider
          </Link>
        </div>
      </div>

      <div className="relative">
        <img src={bannerImg3} />
        {/* Banner Content */}
        <div className="absolute flex items-center gap-1 lg:gap-2 bottom-4 left-4 sm:bottom-8 sm:left-8 md:bottom-12 md:left-12 lg:bottom-20 lg:left-20">
          <Link
            to="/track-your-parcel"
            className="btn btn-accent rounded-lg px-2 lg:px-5"
          >
            Track Your Parcel
          </Link>
          <Link className="p-2 rounded-full bg-black-13 text-primary text-2xl">
            <GoArrowUpRight />
          </Link>
          <Link to="/be-a-rider" className="btn rounded-lg px-2 lg:px-5">
            Be a rider
          </Link>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
