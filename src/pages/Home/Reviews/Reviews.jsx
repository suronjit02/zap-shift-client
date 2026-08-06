import React, { use } from "react";
import img from "../../../assets/customer-top.png";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  console.log(reviews);

  return (
    <div>
      <div className="max-w-3xl mx-auto text-center space-y-2 mb-7">
        <img className="max-w-lg mx-auto mb-5" src={img} alt="Icon" />
        <h2 className="text-3xl font-extrabold text-secondary">
          What our customers are sayings
        </h2>
        <p className="text-lg text-secondary-content">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      {/* reviews slider card */}
      <div className="">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 0,
            stretch: -30,
            depth: 220,
            modifier: 1.8,
            scale: 0.9,
            slideShadows: false,
          }}
          loop={true}
          speed={3500}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={true}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review}></ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
