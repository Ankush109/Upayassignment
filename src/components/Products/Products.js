import React from "react";
import "./products.css";
import { Link } from "react-router-dom";
function Products({ productname, productsimage, productid }) {
  return (
    <Link to={`products/${productid}`}>
      <div className="product-container">
        <div className="img">
          <img src={productsimage} />
        </div>
        <div className="product-name">
          <span>{productname}</span>
        </div>
        <div className="product-price">$300</div>
      </div>
    </Link>
  );
}

export default Products;
