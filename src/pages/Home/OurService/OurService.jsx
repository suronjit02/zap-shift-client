import React from "react";
import icon from "../../../assets/service.png";

const OurService = () => {
  const steps = [
    {
      id: 1,
      icon: icon,
      title: "Express  & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.  Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      id: 2,
      icon: icon,
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      id: 3,
      icon: icon,
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      id: 4,
      icon: icon,
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      id: 5,
      icon: icon,
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      id: 6,
      icon: icon,
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];
  return (
    <section className=" ">
      <div className="container w-full mx-auto bg-secondary p-5 sm:p-10 md:p-16 rounded-3xl">
        {/* Section Title */}
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-3xl font-extrabold text-white ">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className={` ${step.id === 2 ? "bg-primary" : "bg-white"}  rounded-2xl shadow-sm p-8 space-y-2 flex flex-col items-center text-center`}
            >
              <img
                className="h-15 bg-linear-to-t from-transparent to-gray-200 rounded-full p-2"
                src={step.icon}
                alt={step.title}
              />
              <h3 className="text-secondary text-2xl font-bold">
                {step.title}
              </h3>
              <p className="text-secondary-content">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
