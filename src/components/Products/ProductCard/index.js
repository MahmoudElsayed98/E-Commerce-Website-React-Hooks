import React, { useContext } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import { Link } from "react-router-dom";
import {
  LanguageContext,
  RemoveProFromComparisonContext,
  RemoveProFromWishlistContext,
} from "../../../App";
import "./index.css";

function ProductCard({ product, addToCart, addToWishlist, addToComparison }) {
  // const r = useRef();
  // componentDidMount() {
  //   console.log(this.r.current.children);
  // }
  // const wishlistProducts = useContext(WishlistProductsContext);
  const lang = useContext(LanguageContext);
  const removeProductFromWishlist = useContext(RemoveProFromWishlistContext);
  const removeProductFromComparison = useContext(
    RemoveProFromComparisonContext
  );
  return (
    <div
      className="product-card rounded-top position-relative"
      // ref={this.r}
    >
      <BiGitCompare
        className="comparison position-absolute svg"
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
      {!localStorage.getItem(`wishlistProduct${product.id}`) ? (
        <AiOutlineHeart
          className="position-absolute heart svg"
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
          className="position-absolute fill-heart svg"
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

      {/* {wishlistProducts.length === 0
                      ?
                      !product.isAddedToWishlist &&
                       (
                          <AiOutlineHeart
                            className="position-absolute"
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
                        )
                      : wishlistProducts.map((p) => {
                          return p.id === product.id ? (
                            <AiFillHeart
                              key={p.id}
                              className="position-absolute fill-heart"
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
                          ) : (
                            !product.isAddedToWishlist &&
                              Object.values(this.r.current.children).map(
                                (child) => {
                                  if (child.tagName === "svg") {
                                    child.classList.add("d-none");
                                    return (
                                      <AiOutlineHeart
                                        key={p.id}
                                        className="position-absolute"
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
                                    );
                                  }
                                  return "";
                                }
                              )
                          );
                        })} */}
      <div className="image rounded-top">
        <Link
          to={`/E-Commerce-Website-React-Hooks/products/${product.id}`}
          className="h-100 d-flex justify-content-center align-items-center"
        >
          <img
            src={product.image}
            alt={product.title + " Img"}
            className="img-fluid"
          />
        </Link>
      </div>
      <div className="text p-2 text-center bg-light">
        <h6>
          <Link
            to={`/E-Commerce-Website-React-Hooks/products/${product.id}`}
            className="d-flex justify-content-center align-items-center text-decoration-none fw-bold"
          >
            {product.title}
          </Link>
        </h6>
        <p className="text-capitalize mb-0 d-flex flex-column justify-content-center align-items-center">
          {"$"}
          {product.price} <br />
        </p>
      </div>
      <button
        className="add-to-card-btn btn btn-primary w-100 text-uppercase"
        onClick={() => addToCart(product)}
      >
        {lang === "Eng" ? "Add To Cart" : "إضافة الى السلة"}
      </button>
    </div>
  );
}

export default ProductCard;
