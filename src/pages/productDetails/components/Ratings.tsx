import React from "react";

export default function Ratings() {
  return (
    <div>
      <div className="rating rating-half">
        <input
          type="radio"
          name="rating-readonly"
          className="mask mask-star-2 mask-half-1 bg-yellow-400"
          disabled
        />
        <input
          type="radio"
          name="rating-readonly"
          className="mask mask-star-2 mask-half-2 bg-yellow-400"
          disabled
        />
        <input
          type="radio"
          name="rating-readonly"
          className="mask mask-star-2 mask-half-1 bg-yellow-400"
          disabled
        />
        <input
          type="radio"
          name="rating-readonly"
          className="mask mask-star-2 mask-half-2 bg-yellow-400"
          disabled
        />
        <input
          type="radio"
          name="rating-readonly"
          className="mask mask-star-2 mask-half-1 bg-yellow-400"
          disabled
        />
        <input
          type="radio"
          name="rating-readonly"
          className="mask mask-star-2 mask-half-2 bg-yellow-400"
          disabled
        />
        <input
          type="radio"
          name="rating-readonly"
          className="mask mask-star-2 mask-half-1 bg-yellow-400"
          disabled
        />
        <input
          type="radio"
          name="rating-readonly"
          className="mask mask-star-2 mask-half-2 bg-gray-300"
          disabled
        />{" "}
        {/* half star */}
        <input
          type="radio"
          name="rating-readonly"
          className="mask mask-star-2 mask-half-1 bg-gray-300"
          disabled
        />
        <input
          type="radio"
          name="rating-readonly"
          className="mask mask-star-2 mask-half-2 bg-gray-300"
          disabled
        />
      </div>
    </div>
  );
}
