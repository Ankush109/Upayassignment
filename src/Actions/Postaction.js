import axios from "axios";
export const allproductsaction = () => async (dispatch) => {
  try {
    dispatch({
      type: "allproductsrequest",
    });
    const { data } = await axios.get(
      "https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/"
    );
    console.log("all products", data);
    dispatch({
      type: "allproductssuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "allproductsfailure",
      payload: error.response.data.message,
    });
  }
};
export const Productsdetailsaction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "productdetailsrequest",
    });
    const { data } = await axios.get(
      `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`
    );
    console.log("products", data);
    dispatch({
      type: "productdetailssuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "productdetailsfailure",
      payload: error.response.data.message,
    });
  }
};
export const createproducts =
  (name, description, category, price, avatar, developerEmail) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "addproductrequest",
      });
      const { data } = await axios.post(
        ` https://62286b649fd6174ca82321f1.mockapi.io/case-study/products`,
        {
          name,
          description,
          category,
          price,
          avatar,
          developerEmail,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("products", data);
      dispatch({
        type: "addproductsuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "addproductfailure",
        payload: error.response.data.message,
      });
    }
  };
