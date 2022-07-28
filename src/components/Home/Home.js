import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allproductsaction } from "../../Actions/Postaction";
import Loader from "../Loader/Loader";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";
import "./home.css";
import { Link } from "react-router-dom";
function Home() {
  const { products, loading } = useSelector((state) => state.allproducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allproductsaction());
  }, [dispatch]);
  return loading === true ? (
    <Loader />
  ) : (
    <div className="home">
      <div className="allproducts">
        {products ? (
          products.map((product) => (
            <Products
              productsimage={product.avatar}
              productname={product.name}
              productid={product.id}
              productprice={product.price}
            />
          ))
        ) : (
          <div>no product</div>
        )}
        <div className="button">
          <Link to="/createproduct">
            <AddCircleIcon color="primary" fontSize="large" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
