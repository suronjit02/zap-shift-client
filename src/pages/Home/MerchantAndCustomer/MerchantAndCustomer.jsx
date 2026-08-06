import React from "react";
import { Link } from "react-router";
import bg1 from "../../../assets/be-a-merchant-bg.png";
import locationbg from "../../../assets/location-merchant.png";
const MerchantAndCustomer = () => {
  return (
    <div className="relative bg-secondary h-96 max-w-6xl mx-auto rounded-3xl p-5 md:p-20">
      <div className="max-w-xl space-y-3">
        <h2 className="text-3xl text-white font-extrabold">
          Merchant and Customer Satisfaction is Our First Priority
        </h2>
        <p className="text-primary-content pr-20">
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. Pathao courier delivers your parcels in
          every corner of Bangladesh right on time.
        </p>
      </div>

      <img className="absolute top-0 " src={bg1} alt="bg" />
      <img
        className="absolute right-15 bottom-15 hidden md:flex md:h-56"
        src={locationbg}
        alt="location-icon"
      />

      <div className="flex items-center gap-1 lg:gap-2 bottom-15 left-4 sm:bottom-8 sm:left-8 md:bottom-12 md:left-12 lg:bottom-20 lg:left-20 absolute">
        <Link
          to="/become-a-merchant"
          className="btn btn-accent rounded-full shadow-none px-2 lg:px-5"
        >
          Become a Merchant
        </Link>

        <Link
          to="/be-a-rider"
          className="btn border-2 border-primary rounded-full shadow-none px-2 lg:px-5 bg-transparent text-primary"
        >
          Earn with ZapShift Courier
        </Link>
      </div>
    </div>
  );
};

export default MerchantAndCustomer;
