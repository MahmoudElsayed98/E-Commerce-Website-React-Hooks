import React, { useContext } from "react";
import { FaUserCircle, FaUserEdit, FaTrashAlt } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import { RiLogoutCircleRLine, RiLogoutCircleLine } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import "./index.css";
import {
  CartProductsContext,
  CartProductsTotalSalaryContext,
  // IsCartProductsChangedContext,
  DeliveryCostContext,
  // IsWishlistProductsChangedContext,
  WishlistProductsContext,
  LanguageContext,
  CompareProductsContext,
  CartProductsTotalNumberContext,
  // IsCompareProductsChangedContext,
} from "../../../../App";
import { Link } from "react-router-dom";

function Icons({ removeProductFromCart }) {
  const cartProducts = useContext(CartProductsContext);
  const cartProductsTotalSalary = useContext(CartProductsTotalSalaryContext);
  // const isCartProductsChanged = useContext(IsCartProductsChangedContext);
  // const isCompareProductsChanged = useContext(IsCompareProductsChangedContext);
  const deliveryCost = useContext(DeliveryCostContext);
  // const isWishlistProductsChanged = useContext(
  //   IsWishlistProductsChangedContext
  // );
  const wishlistProducts = useContext(WishlistProductsContext);
  const compareProducts = useContext(CompareProductsContext);
  const lang = useContext(LanguageContext);
  const cartProductsTotalNumber = useContext(CartProductsTotalNumberContext);
  return (
    <>
      <div className="icons d-flex flex-column flex-lg-row align-items-center justify-content-center">
        <div
          className={`sign-in ${
            lang === "Eng" ? "me-lg-2 me-xl-3" : "ms-lg-2 ms-xl-3"
          }`}
        >
          {!localStorage.getItem("currentUser") ? (
            <Link
              to="/E-Commerce-Website-React-Hooks/sign-in"
              className="text-decoration-none d-flex flex-column justify-content-center align-items-center"
            >
              <FaUserCircle className="fs-3 mb-1 mb-lg-0" />
              <p className="fw-bold d-block d-lg-none">
                {lang === "Eng" ? "Login" : "تسجيل الدخول"}
              </p>
              <p className="fw-bold d-none d-lg-block">
                {lang === "Eng" ? "Login" : "الدخول"}
              </p>
            </Link>
          ) : (
            <Link
              to="/E-Commerce-Website-React-Hooks/account"
              className="text-decoration-none d-flex flex-column justify-content-center align-items-center"
            >
              <FaUserCircle className="fs-3 mb-1 mb-lg-0" />
              <p className="fw-bold d-block d-lg-none">
                {lang === "Eng" ? "Profile" : "الملف الشخصى"}
              </p>
              <p className="fw-bold d-none d-lg-block">
                {lang === "Eng" ? "Profile" : "ملفاتى"}
              </p>
            </Link>
          )}
        </div>
        <div
          className={`sign-in ${
            lang === "Eng" ? "me-lg-2 me-xl-3" : "ms-lg-2 ms-xl-3"
          }`}
        >
          {!localStorage.getItem("currentUser") ? (
            <Link
              to="/E-Commerce-Website-React-Hooks/register"
              className="text-decoration-none d-flex flex-column justify-content-center align-items-center"
            >
              <FaUserEdit className="fs-3 mb-1 mb-lg-0" />
              <p className="fw-bold">
                {lang === "Eng" ? "Sign Up" : "الاشتراك"}
              </p>
            </Link>
          ) : (
            <a
              href="/E-Commerce-Website-React-Hooks/sign-out"
              className="text-decoration-none d-flex flex-column justify-content-center align-items-center"
              onClick={() => {
                localStorage.removeItem("currentUser");
              }}
            >
              {lang === "Eng" ? (
                <RiLogoutCircleRLine className="fs-3 mb-1 mb-lg-0" />
              ) : (
                <RiLogoutCircleLine className="fs-3 mb-1 mb-lg-0" />
              )}
              <p className="fw-bold d-block d-lg-none">
                {lang === "Eng" ? "Sign Out" : "تسجيل الخروج"}
              </p>
              <p className="fw-bold d-none d-lg-block">
                {lang === "Eng" ? "Sign Out" : "الخروج"}
              </p>
            </a>
          )}
        </div>
        <div
          className={`sign-in ${
            lang === "Eng" ? "me-lg-2 me-xl-3" : "ms-lg-2 ms-xl-3"
          }`}
        >
          <Link
            to="/E-Commerce-Website-React-Hooks/wishlist"
            className="position-relative text-decoration-none d-flex flex-column justify-content-center align-items-center"
          >
            {wishlistProducts.length === 0 ? (
              <AiOutlineHeart className="fs-3 mb-1 mb-lg-0" />
            ) : (
              <AiFillHeart className="fs-3 mb-1 mb-lg-0" />
            )}
            {wishlistProducts.length !== 0 && (
              <span
                style={lang === "Eng" ? { right: "5px" } : { left: "5px" }}
                className="changed fw-bold position-absolute d-flex justify-content-center align-items-center rounded-circle text-light"
              >
                {wishlistProducts.length}
              </span>
            )}
            <p className="fw-bold">{lang === "Eng" ? "Wishlist" : "المفضلة"}</p>
          </Link>
        </div>
        <div className="sign-in">
          <Link
            to="/E-Commerce-Website-React-Hooks/compare"
            className="position-relative text-decoration-none d-flex flex-column justify-content-center align-items-center"
          >
            <BiGitCompare className="fs-3 mb-1 mb-lg-0" />
            {compareProducts.length !== 0 && (
              <span
                style={lang === "Eng" ? { right: "8px" } : { left: "8px" }}
                className="changed fw-bold position-absolute d-flex justify-content-center align-items-center rounded-circle text-light"
              >
                {compareProducts.length}
              </span>
            )}
            <p className="fw-bold">{lang === "Eng" ? "Compare" : "المقارنة"}</p>
          </Link>
        </div>
      </div>
      <div
        className="cart d-flex align-items-center justify-content-end position-relative"
        role="button"
      >
        <Link
          to="/E-Commerce-Website-React-Hooks/cart"
          className="text-decoration-none d-flex flex-column justify-content-center align-items-center"
        >
          <span className="cart-detail position-relative d-flex justify-content-center align-items-center">
            <p className="mb-0">
              {cartProductsTotalNumber +
                ` ${lang === "Eng" ? "Item(s)" : "منتجات"} - $` +
                cartProductsTotalSalary.toFixed(2)}
            </p>
            <TiShoppingCart
              className="fs-1"
              style={
                lang !== "Eng" && {
                  transform: "scaleX(-1)",
                }
              }
            />

            {cartProducts.length !== 0 && (
              <span
                style={
                  lang === "Eng" ? { right: "-2.5px" } : { left: "-2.5px" }
                }
                className="changed fw-bold position-absolute d-flex justify-content-center align-items-center rounded-circle text-light"
              >
                {cartProducts.length}
              </span>
            )}
          </span>
        </Link>
        <div
          className="cart-content rounded text-center"
          style={lang === "Eng" ? { right: "-2.5px" } : { left: "-2.5px" }}
        >
          <div className="content d-flex flex-column">
            {cartProducts.length === 0 ? (
              <span className="d-block p-3">
                <p className="mb-0">Your shopping cart is empty!</p>
              </span>
            ) : (
              cartProducts.map((e) => {
                return (
                  <div
                    key={e.id}
                    className="cart-item py-2 d-flex align-items-center"
                  >
                    <Link
                      to={`/E-Commerce-Website-React-Hooks/products/${e.id}`}
                      className="d-flex align-items-center justify-content-center"
                    >
                      <div className="image w-50 p-2 rounded">
                        <img
                          src={e.image}
                          className="img-fluid"
                          alt={e.title}
                        />
                      </div>
                    </Link>
                    <Link
                      to={`/E-Commerce-Website-React-Hooks/products/${e.id}`}
                      className="text-light d-flex align-items-center title"
                    >
                      {e.title}
                    </Link>
                    <div className="cart-details d-flex align-items-center justify-content-evenly">
                      <p className="text-center mb-0">x {e.qty}</p>
                      <p className="text-center mb-0">${e.price.toFixed(2)}</p>
                      <button
                        className="btn p-0 close d-flex justify-content-center align-items-center"
                        onClick={() => removeProductFromCart(e)}
                      >
                        <FaTrashAlt className="fs-5" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {cartProducts.length !== 0 && (
            <>
              <div className="product-summary border-top text-end py-2 px-3 fw-bold">
                <p className="mb-0">
                  {lang === "Eng" ? "Subtotal" : "المبلغ الإجمالى "}: $
                  {cartProductsTotalSalary.toFixed(2)}
                  <br />
                  {lang === "Eng" ? "Total" : "المبلغ الكلى "}: $
                  {(cartProductsTotalSalary + deliveryCost).toFixed(2)}
                </p>
              </div>
              <div className="buttons rounded-bottom pb-3">
                <Link to="/E-Commerce-Website-React-Hooks/cart">
                  <button className="btn btn-light text-uppercase me-2 fw-bold">
                    {lang === "Eng" ? "view cart" : "سلة التسوق"}
                  </button>
                </Link>
                <Link to="/E-Commerce-Website-React-Hooks/checkout">
                  <button className="btn btn-light text-uppercase me-2 fw-bold">
                    {lang === "Eng" ? "Checkout" : "الدفع"}
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Icons;
