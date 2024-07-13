import { useEffect, useState } from "react";
import React, { useContext } from "react";
import { ProductContext } from "../reduxData/DataComp";
import { useDispatch, useSelector } from "react-redux";
import {
  getproductDetails,
  increase_cart,
  decrease_cart,
  remove_cart,
} from "../features/ProductSlice";
import NavBar from "./NavBar";
import "./cardstyle.css";

// Component for displaying and managing the shopping cart
const CardComp = () => {
  const { productData } = useContext(ProductContext); // Accessing user and dispatch function using useContext and useDispatch hooks
  const dispatch = useDispatch();

  // Selecting products from the Redux store
  const getProduct = useSelector((state) => state.storedDate);
  console.log(getProduct);

  // State for managing quantities of items in the cart
  const [quantities, setQuantities] = useState({});

  // useEffect to save all products when products change

  useEffect(() => {
    dispatch(getproductDetails(productData.products));
  }, [dispatch, productData.products]);

  // Effect to initialize quantities when product change

  useEffect(() => {
    const intialQuantity = {};
    getProduct.forEach((element) => {
      intialQuantity[element.id] = element.quantity || 1;
    });
    setQuantities(intialQuantity);
  }, [getProduct]);

  // Handler function for increasing quantity of an item

  const handleIncrease = (id, quantity) => {
    dispatch(increase_cart({ id }));
  };

  // Handler function for decreasing quantity of an item
  const handleDecrease = (id, quantity) => {
    if (quantity > 1) {
      dispatch(decrease_cart({ id }));
    }
  };

  // Handler function for removing an item from the cart
  const handleRemove = (id) => {
    dispatch(remove_cart({ id }));
  };

  // Selecting total cart quantity from product store
  const totalPrice = useSelector((state) =>
    state.storedDate.reduce(
      (acc, data) => acc + data.price * (data.quantity || 1),
      0
    )
  );

  // Selecting total price of items in the cart from product store
  const totalQuantity = useSelector((state) =>
    state.storedDate.reduce((acc, data) => acc + (data.quantity || 1), 0)
  );

  return (
    <>
      <div>
        <NavBar totalQuantity={totalQuantity} />
        <div
          className="container-xl h-10 sticky-top d-flex justify-content-evenly align-items-center p-3"
          style={{
            backgroundColor: "#102542",
            color: "white",
            borderRadius: "15px",
          }}
        >
          {/* Displaying total price */}
          <h3>Total Price: ${totalPrice}</h3>
          {/* Displaying total quantity */}
          <h3>Total Quantity: {totalQuantity}</h3>

          <button className="btn btn-primary">proceed to pay</button>
        </div>

        {/* Mapping through blogs to display each item */}
        {getProduct.map((item, index) => {
          return (
            <div className="container" key={index}>
              {/* Card for displaying item */}
              <div style={{ margin: "2em 0em" }}>
                <div className="card p-5 mb-5 " id="card-w">
                  <div className="row g-0">
                    {/* Left side for displaying images */}
                    <div className="col-md-4">
                      <div>
                        {/* Carousel for multiple images */}
                        <div
                          id={`carouselExample${index}`}
                          className="carousel slide"
                        >
                          <div className="carousel-inner" id="image-design">
                            {/* Mapping through item images */}
                            {item.images.map((image, i) => (
                              <div
                                key={i}
                                className={`carousel-item ${
                                  i === 0 ? "active" : ""
                                }`}
                              >
                                <img
                                  src={image}
                                  className="d-block w-100"
                                  alt={`Slide ${i}`}
                                />
                              </div>
                            ))}
                          </div>
                          {/* Carousel control buttons */}
                          <div className="d-flex ">
                            <button
                              className="carousel-control-prev my-auto"
                              type="button"
                              data-bs-target={`#carouselExample${index}`}
                              data-bs-slide="prev"
                              style={{
                                backgroundColor: "black",
                                height: "2.5em",
                                width: "2em",
                              }}
                            >
                              <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                              ></span>
                              <span className="visually-hidden">Previous</span>
                            </button>
                          </div>
                          <button
                            className="carousel-control-next  my-auto"
                            type="button"
                            data-bs-target={`#carouselExample${index}`}
                            data-bs-slide="next"
                            style={{
                              backgroundColor: "black",
                              height: "2.5em",
                              width: "2em",
                            }}
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Right side for displaying item details */}
                    <div className="col-md-8">
                      <div className="card-body">
                        {/* Title and price */}
                        <div className="d-flex justify-content-between">
                          <h4 className="card-title w-50">{item.title}</h4>
                          <h4 className="card-title">${item.price}</h4>
                        </div>
                        {/* Description, brand, and stock */}
                        <div className="w-50">
                          <p className="card-text">{item.description}</p>
                          <p className="card-text">
                            <b>Brand:</b> {item.brand}
                          </p>
                          <p className="card-text" style={{ color: "red" }}>
                            <span className="stock">
                              {" "}
                              In Stock: {item.stock}
                            </span>
                          </p>
                        </div>
                        {/* Rating and quantity control */}
                        <div className="d-flex justify-content-between ">
                          <p className="card-text">
                            {" "}
                            <b>Rating: {item.rating}</b>
                          </p>
                          <div className="d-flex align-items-center">
                            <button className="mx-2 quantity-btn p-2">
                              <i
                                className="fa-solid fa-plus"
                                onClick={() =>
                                  handleIncrease(item.id, item.quantity || 1)
                                }
                              ></i>
                            </button>
                            <h6 className="mx-2"> {quantities[item.id]}</h6>
                            <button className="mx-2 quantity-btn p-2">
                              <i
                                className="fa-solid fa-minus"
                                onClick={() =>
                                  handleDecrease(item.id, item.quantity || 1)
                                }
                              ></i>
                            </button>
                          </div>
                        </div>
                        {/* Star rating */}
                        <div className="text-warning mb-2 small">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                        {/* Last updated time */}
                        <p className="card-text">
                          <small className="text-body-secondary">
                            Last updated 3 mins ago
                          </small>
                        </p>
                        {/* Button to remove item from cart */}
                        <div
                          className="d-flex justify-content-end"
                          id="btn-div"
                        >
                          <button
                            className="btn btn-danger"
                            id="btn"
                            onClick={() => handleRemove(item.id)}
                          >
                            Remove from Cart
                          </button>
                        </div>
                        <hr></hr>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default CardComp;
