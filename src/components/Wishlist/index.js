import React, { useContext, useEffect } from "react";
import "./index.css";
import { GoPrimitiveDot } from "react-icons/go";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LanguageContext, WishlistProductsContext } from "../../App.js";
import SignIn from "../SignIn";

function Wishlist({ removeProductFromWishlist }) {
  const lang = useContext(LanguageContext);
  const wishlistProducts = useContext(WishlistProductsContext);
  useEffect(() => {
    localStorage.setItem("isInWishlist", true);
    return () => {
      localStorage.removeItem("isInWishlist", true);
    };
  });
  return (
    <>
      {!localStorage.getItem("currentUser") ? (
        <SignIn lang={lang}>
          <p className="mb-0 lead w-100 pt-4 fw-bold">
            - You must login or{" "}
            <Link to="/E-Commerce-Website-React-Hooks/register">
              create an account
            </Link>{" "}
            to save products to your wishlist.
          </p>
        </SignIn>
      ) : (
        <div className="cart-comp py-4 position-relative">
          <div className="container">
            <h3 className="fw-bold mb-4 d-flex align-items-center">
              <GoPrimitiveDot className="fs-6 me-1" />
              {lang === "Eng"
                ? `Wishlist ( ${wishlistProducts.length + " Items"} )`
                : `المفضلة ( ${wishlistProducts.length + " منتجات"} )`}
              <GoPrimitiveDot className="fs-6 ms-1" />
            </h3>

            <div className="row justify-content-center align-items-start">
              <div className="col-md-8 col-lg-7">
                {wishlistProducts.length === 0 ? (
                  <span className="w-100 cart-info d-block position-absolute top-50 start-50">
                    <p className="mb-0 text-center para">
                      {lang === "Eng"
                        ? "Your wishlist is currently empty!"
                        : "قائمة رغباتك فارغة حالياً!"}
                    </p>
                    <Link
                      to="/E-Commerce-Website-React-Hooks/products"
                      className="text-decoration-none"
                    >
                      <button className="btn btn-lg btn-primary btn-main d-block mx-auto mt-2">
                        {lang === "Eng"
                          ? "GO SHOPPING NOW"
                          : "الذهاب للتسوق الآن"}
                      </button>
                    </Link>
                  </span>
                ) : (
                  wishlistProducts.map((e) => (
                    <div
                      key={e.id}
                      className="cart-item border rounded py-2 d-flex align-items-center mb-3"
                    >
                      <Link
                        to={`/E-Commerce-Website-React-Hooks/products/${e.id}`}
                        className="d-flex align-items-center justify-content-center"
                      >
                        <div className="image p-2 rounded">
                          <img
                            src={e.image}
                            className="img-fluid"
                            alt={e.title}
                          />
                        </div>
                      </Link>
                      <Link
                        to={`/E-Commerce-Website-React-Hooks/products/${e.id}`}
                        className="d-flex align-items-center justify-content-center title text-dark text-center"
                      >
                        {e.title}
                      </Link>
                      <div className="cart-details d-flex align-items-center justify-content-evenly">
                        <p className="text-center mb-0">
                          ${e.price.toFixed(2)}
                        </p>
                        <button
                          className="btn p-0 close d-flex justify-content-center align-items-center rounded-circle"
                          onClick={() => removeProductFromWishlist(e)}
                        >
                          <FaTrashAlt className="fs-5" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Wishlist;
