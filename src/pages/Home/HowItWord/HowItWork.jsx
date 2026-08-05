import React from "react";
import icon from "../../../assets/bookingIcon.png";

const HowItWork = () => {
  const steps = [
    {
      id: 1,
      icon: icon,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 2,
      icon: icon,
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 3,
      icon: icon,
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 4,
      icon: icon,
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];

  return (
    <section className=" ">
      <div className="container w-full mx-auto">
        <h2 className="text-3xl font-extrabold text-left text-secondary mb-5">
          How It Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-2xl shadow-sm p-6 space-y-2"
            >
              <img className="h-12" src={step.icon} alt={step.title} />
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

export default HowItWork;
