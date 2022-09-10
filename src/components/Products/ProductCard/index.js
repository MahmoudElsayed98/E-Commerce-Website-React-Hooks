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
          !localStorage.getItem(`compareProduct${product._id}`)
            ? addToComparison(product)
            : removeProductFromComparison(product);
        }}
        title={`${
          lang !== "Eng"
            ? !localStorage.getItem(`compareProduct${product._id}`)
              ? "أضف المنتج إلى المقارنة"
              : "حذف المنتج من المقارنة"
            : !localStorage.getItem(`compareProduct${product._id}`)
            ? "Add Product To Comparison"
            : "Remove Product From Comparison"
        }`}
      />
      {!localStorage.getItem(`wishlistProduct${product._id}`) ? (
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
      <div className="image rounded-top">
        <Link
          to={`/Exclsv/products/${product._id}`}
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
            to={`/Exclsv/products/${product._id}`}
            className="d-flex justify-content-center align-items-center text-decoration-none fw-bold"
          >
            {product.name}
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
