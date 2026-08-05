import React from "react";
import img1 from "../../../assets/brands/casio.png";
import img2 from "../../../assets/brands/amazon.png";
import img3 from "../../../assets/brands/moonstar.png";
import img4 from "../../../assets/brands/star.png";
import img5 from "../../../assets/brands/start_people.png";
import img6 from "../../../assets/brands/randstad.png";

const Brand = () => {
  return (
    <section>
      <h3 className="text-2xl font-extrabold text-center text-secondary mb-10">
        We've helped thousands of sales teams
      </h3>
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 items-center justify-items-center mb-20">
        <img className="h-4 md:h-6 " src={img1} alt="CASIO" />
        <img className="h-4 md:h-6 " src={img2} alt="Amazon" />
        <img className="h-4 md:h-6 " src={img3} alt="Moonstar" />
        <img className="h-4 md:h-6 " src={img4} alt="Star" />
        <img className="h-4 md:h-6 " src={img5} alt="Start People" />
        <img className="h-4 md:h-6 " src={img6} alt="Randstad" />
      </div>

      <hr />
    </section>
  );
};

export default Brand;
