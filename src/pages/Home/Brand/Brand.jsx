import React from "react";
import img1 from "../../../assets/brands/casio.png";
import img2 from "../../../assets/brands/amazon.png";
import img3 from "../../../assets/brands/moonstar.png";
import img4 from "../../../assets/brands/star.png";
import img5 from "../../../assets/brands/start_people.png";
import img6 from "../../../assets/brands/randstad.png";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// steps img
import step1 from "../../../assets/live-tracking.png";
import step2 from "../../../assets/safe-delivery.png";
import step3 from "../../../assets/safe-delivery.png";

const Brand = () => {
  const steps = [
    {
      id: 1,
      img: step1,
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      id: 2,
      img: step2,
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      id: 3,
      img: step3,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];

  return (
    <section>
      <h3 className="text-2xl font-extrabold text-center text-secondary mb-10">
        We've helped thousands of sales teams
      </h3>
      {/* <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 items-center justify-items-center mb-20">
        <img className="h-4 md:h-6 " src={img1} alt="CASIO" />
        <img className="h-4 md:h-6 " src={img2} alt="Amazon" />
        <img className="h-4 md:h-6 " src={img3} alt="Moonstar" />
        <img className="h-4 md:h-6 " src={img4} alt="Star" />
        <img className="h-4 md:h-6 " src={img5} alt="Start People" />
        <img className="h-4 md:h-6 " src={img6} alt="Randstad" />
      </div> */}

      <Swiper
        className="mb-20 max-w-6xl"
        modules={[Autoplay]}
        loop={true}
        speed={2500}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        grabCursor={true}
        allowTouchMove={false}
        spaceBetween={30}
        slidesPerView={5}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        <SwiperSlide>
          <img className="h-4 md:h-6" src={img1} alt="CASIO" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-4 md:h-6" src={img2} alt="Amazon" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-4 md:h-6" src={img3} alt="Moonstar" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-4 md:h-6" src={img4} alt="Star" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-4 md:h-6" src={img5} alt="Start People" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-4 md:h-6" src={img6} alt="Randstad" />
        </SwiperSlide>
      </Swiper>

      <div className="max-w-6xl mx-auto border-2 border-primary-content border-dashed"></div>

      <div className="max-w-6xl mx-auto my-15 space-y-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex items-center gap-6 bg-white p-5 rounded-lg shadow-sm"
          >
            <img className="h-25" src={step.img} alt={step.title} />
            <div className="h-25 border-1 border-primary-content border-dashed"></div>
            <div className="space-y-2">
              <h4 className="text-secondary font-extrabold">{step.title}</h4>
              <p className="max-w-4xl text-secondary-content ">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto border-2 border-primary-content border-dashed"></div>
    </section>
  );
};

export default Brand;
