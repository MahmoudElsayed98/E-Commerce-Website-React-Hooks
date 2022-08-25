import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { GoPrimitiveDot } from "react-icons/go";
import Loading from "../Loading";
import axios from "axios";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import { LanguageContext } from "../../../App";
function ProductDetails({
  productQuantity,
  resetProductQuantity,
  addToCart,
  addToComparison,
  addToWishlist,
  removeProductFromWishlist,
  removeProductFromComparison,
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
      <div className="container position-relative">
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
              <p className="position-absolute cat text-uppercase rounded text-light p-2">
                {product.category}
              </p>
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
                    className={`product-quantity d-flex ${
                      lang === "Eng" ? "me-2" : "ms-2"
                    }`}
                  >
                    <IoIosArrowDown
                      role="button"
                      onClick={decreaseProductQuantity}
                      className="d-block h-100 rounded-end"
                    />
                    <span className="d-flex justify-content-center align-items-center w-100 h-100 fs-5">
                      {productQuantity}
                    </span>
                    <IoIosArrowUp
                      role="button"
                      onClick={increaseProductQuantity}
                      className="d-block h-100 rounded-start"
                    />
                    {/* <span className="up-down w-50 h-100 d-flex flex-column justify-content-center align-items-center pe-1"> */}
                    {/* </span> */}
                  </div>
                  <button
                    className="btn btn-primary btn-main text-uppercase mx-2"
                    onClick={() => addToCart(product)}
                  >
                    {lang === "Eng" ? "Add To Cart" : "إضافة الى السلة"}
                  </button>
                  {!localStorage.getItem(`wishlistProduct${product.id}`) ? (
                    <AiOutlineHeart
                      className="heart svg mx-1"
                      role="button"
                      onClick={() => {
                        addToWishlist(product);
                      }}
                      title={`${
                        lang !== "Eng"
                          ? "إضافة المنتج إلى المفضلة"
                          : "Add Product To Wishlist"
                      }`}
                    />
                  ) : (
                    <AiFillHeart
                      className="fill-heart svg mx-1"
                      role="button"
                      onClick={() => {
                        removeProductFromWishlist(product);
                      }}
                      title={`${
                        lang !== "Eng"
                          ? "حذف المنتج من المفضلة"
                          : "Remove Product From Wishlist"
                      }`}
                    />
                  )}
                  <BiGitCompare
                    className="comparison svg"
                    role="button"
                    onClick={() => {
                      !localStorage.getItem(`compareProduct${product.id}`)
                        ? addToComparison(product)
                        : removeProductFromComparison(product);
                    }}
                    title={`${
                      lang !== "Eng"
                        ? !localStorage.getItem(`compareProduct${product.id}`)
                          ? "أضف المنتج إلى المقارنة"
                          : "حذف المنتج من المقارنة"
                        : !localStorage.getItem(`compareProduct${product.id}`)
                        ? "Add Product To Comparison"
                        : "Remove Product From Comparison"
                    }`}
                  />
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
