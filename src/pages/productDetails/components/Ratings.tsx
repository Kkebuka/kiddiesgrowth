import React from "react";

export default function Ratings() {
  return (
    <div>
      <div className="rating">
        <div className="mask mask-star bg-yellow-400" aria-label="1 star"></div>
        <div
          className="mask mask-star  bg-yellow-400"
          aria-label="2 star"
        ></div>
        <div
          className="mask mask-star  bg-yellow-400"
          aria-label="3 star"
        ></div>
        <div
          className="mask mask-star  bg-yellow-400"
          aria-label="4 star"
          aria-current="true"
        ></div>
        <div
          className="mask mask-star  bg-yellow-400"
          aria-label="5 star"
        ></div>
      </div>
    </div>
  );
}
