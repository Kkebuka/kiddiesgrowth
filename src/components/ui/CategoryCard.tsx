import React, { Component } from "react";

export class CategoryCard extends Component {
  render() {
    return (
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Card Title</h2>
        </div>
      </div>
    );
  }
}

export default CategoryCard;
