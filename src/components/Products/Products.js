import React from "react";
import "./products.css";
import { Link } from "react-router-dom";
function Products({ productname, productsimage, productid, productprice }) {
  return (
    <div className="productss">
      <Link to={`products/${productid}`}>
        <div className="product-container">
          <div className="img">
            <img src={productsimage} />
          </div>
          <div className="product-name">
            <span>{productname}</span>
          </div>
          <div className="product-price">{productprice}</div>
        </div>
      </Link>
    </div>
  );
}

export default Products;
