import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { GoPrimitiveDot } from "react-icons/go";
import Loading from "../Loading";
import axios from "axios";
import { LanguageContext } from "../../../App";
function ProductDetails({
  productQuantity,
  resetProductQuantity,
  addToCart,
  increaseProductQuantity,
  decreaseProductQuantity,
}) {
  const [productDetailsFetchingFailed, setProductDetailsFetchingFailed] =
    useState(false);
  const [productsDetailsLoading, setProductsDetailsLoading] = useState(false);
  const [product, setProduct] = useState({});
  let { id } = useParams();
  const lang = useContext(LanguageContext);
  useEffect(() => {
    console.log(id);
    if (id < 20) {
      setProductDetailsFetchingFailed(false);
    }
    if (productQuantity !== 1) {
      resetProductQuantity();
    }
    if (productsDetailsLoading === true) {
      setProductsDetailsLoading(false);
    }
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProduct(res.data);
      setProductsDetailsLoading(true);
    });
    if (id > 20) {
      setProductDetailsFetchingFailed(true);
    }
  }, [id]);
  return (
    <div className="product-details py-4 py-lg-0 d-flex d-lg-block align-items-center">
      <div className="container">
        <div className="row justify-content-center align-items-center py-lg-4">
          {!productsDetailsLoading ? (
            <Loading />
          ) : productDetailsFetchingFailed ? (
            <h3 className="text-center">
              {lang === "Eng"
                ? "No Such Product With ID ="
                : "لا يوجد منتج بنفس هذا الآى دى الذى يساوى"}{" "}
              {id}
            </h3>
          ) : (
            <>
              <div className="left-side col-6 col-md-5 col-lg-4 me-lg-4">
                <div className="image text-center">
                  <img src={product.image} alt={product.title} />
                </div>
              </div>
              <div className="right-side col-12 col-md-9 col-lg-7 text-center text-md-start ">
                <h3 className="mb-2 mt-4 mt-lg-0 fw-bold d-flex justify-content-center justify-content-lg-start align-items-center text-center text-lg-start">
                  {product.title}
                </h3>
                <h4 className="mb-0 d-flex justify-content-center justify-content-lg-start align-items-center">
                  {"$"}
                  {product.price}
                </h4>
                <div className="add-to-cart d-flex justify-content-center justify-content-lg-start align-items-center my-2">
                  <div
                    className={`product-quantity d-flex align-items-center rounded ${
                      lang === "Eng" ? "me-2" : "ms-2"
                    }`}
                  >
                    <span
                      className={`d-flex justify-content-center align-items-center w-50 h-100 ${
                        lang === "Eng" ? "border-end" : "border-start"
                      }`}
                    >
                      {productQuantity}
                    </span>
                    <span className="up-down w-50 h-100 d-flex flex-column justify-content-center align-items-center pe-1">
                      <IoIosArrowUp
                        role="button"
                        onClick={increaseProductQuantity}
                        className="h-100 border-bottom"
                      />
                      <IoIosArrowDown
                        role="button"
                        className="h-100"
                        onClick={decreaseProductQuantity}
                      />
                    </span>
                  </div>
                  <button
                    className="btn btn-primary text-uppercase"
                    onClick={() => addToCart(product)}
                  >
                    {lang === "Eng" ? "Add To Cart" : "إضافة الى السلة"}
                  </button>
                </div>
                <div className="desc mb-0">
                  <h5 className="mb-0 fw-bold d-flex justify-content-center justify-content-lg-start align-items-center mb-1">
                    <GoPrimitiveDot className="fs-6 me-1" />{" "}
                    {lang === "Eng" ? "Product Details" : "تفاصيل المنتج"}{" "}
                    <GoPrimitiveDot className="fs-6 ms-1" />
                  </h5>
                  <p className="mb-0 text-center text-lg-start">
                    {product.description}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
