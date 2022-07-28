import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Productsdetailsaction } from "../../Actions/Postaction";

function Productsdetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Productsdetailsaction(id));
  });
  return <div>Productsdetails</div>;
}

export default Productsdetails;
