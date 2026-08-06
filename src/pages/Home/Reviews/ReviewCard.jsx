import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

const ReviewCard = ({ review }) => {
  const { userName, user_photoURL, review: testimonial } = review;
  return (
    <div className="review-card card bg-white rounded-3xl p-8 shadow-sm border border-base-200 max-w-md">
      {/* Quote Icon */}
      <RiDoubleQuotesL className="text-5xl text-secondary opacity-50" />

      {/* Review */}
      <p className="mt-4 text-secondary-content ">{testimonial}</p>

      {/* Divider */}
      <div className="border-t border-dashed border-primary-content my-6"></div>

      {/* User */}
      <div className="flex items-center gap-4">
        <div className="avatar">
          <div className="w-14 rounded-full bg-primary">
            <img src={user_photoURL} alt={userName} />
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg text-secondary">{userName}</h3>
          <p className="text-sm text-base-content/60">
            Senior Product Designer
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
