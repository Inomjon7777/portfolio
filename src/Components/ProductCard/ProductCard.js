import React, { Component } from "react";
import "./ProductCard.css";

class ProductCard extends Component {
  constructor() {
    super();
  }
  render() {
    const { productImg, groupName, price, priceMonth, title } = this.props.data;

    return (
      <div className="productCard p-3">
        <img className="d-block productImg" src={productImg} alt="" />
        <a href="#" className="groupName d-block mb-2 mt-3">
          {groupName}
        </a>
        <p className="price mb-2">{price} so'm </p>
        <p className="priceMonth bg-danger text-white rounded ps-1">
          {priceMonth} so'm / oy.{" "}
        </p>
        <p className="title">{title.toUpperCase()}</p>
        <a href="#" className="btn btn-primary" onClick={this.props.buy}>
          Kupit
        </a>
      </div>
    );
  }
}

export default ProductCard;
