import React, { useContext } from "react";
import "./index.css";
import { GoPrimitiveDot } from "react-icons/go";
import {
  CartProductsContext,
  CartProductsTotalSalaryContext,
  LanguageContext,
} from "../../App.js";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

function Cart({ removeProductFromCart, deliveryCost }) {
  const cartProducts = useContext(CartProductsContext);
  const CartProductsTotalSalary = useContext(CartProductsTotalSalaryContext);
  const lang = useContext(LanguageContext);
  return (
    <div className="cart-comp py-4 position-relative">
      <div className="container">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <GoPrimitiveDot className="fs-6 me-1" />
          {lang === "Eng"
            ? `Shopping Cart ( ${cartProducts.length + " Items"} )`
            : `سلة التسوق ( ${cartProducts.length + " منتجات"} )`}
          <GoPrimitiveDot className="fs-6 ms-1" />
        </h3>
        <div className="row justify-content-center align-items-start">
          <div className="col-md-8 col-lg-7">
            {cartProducts.length === 0 ? (
              <span className="w-100 cart-info d-block position-absolute top-50 start-50">
                <p className="mb-0 text-center para">
                  {lang === "Eng"
                    ? "Your shopping cart is currently empty!"
                    : "سلة التسوق الخاصة بك فارغة حالياً!"}
                </p>
                <Link to="/Exclsv/products" className="text-decoration-none">
                  <button className="btn btn-lg btn-primary btn-main d-block mx-auto mt-2">
                    {lang === "Eng" ? "GO SHOPPING NOW" : "الذهاب للتسوق الآن"}
                  </button>
                </Link>
              </span>
            ) : (
              cartProducts.map((e) => (
                <div
                  key={e._id}
                  className="cart-item border rounded py-2 d-flex align-items-center mb-3"
                >
                  <Link
                    to={`/Exclsv/products/${e._id}`}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <div className="image p-2 rounded">
                      <img src={e.image} className="img-fluid" alt={e.name} />
                    </div>
                  </Link>
                  <Link
                    to={`/Exclsv/products/${e._id}`}
                    className="d-flex align-items-center title text-dark text-center"
                  >
                    {e.name}
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
              ))
            )}
          </div>

          {cartProducts.length !== 0 && (
            <div className="col-md-4">
              <h4 className="fw-bold text-uppercase">
                {lang === "Eng" ? "Order Summary" : "الفاتورة الاجمالية"}
              </h4>
              <div className="order-summary bg-light rounded border p-3">
                <div className="d-flex justify-content-between">
                  <p className="mb-2">
                    {lang === "Eng" ? "Subtotal" : "المبلغ الإجمالى"}
                  </p>
                  <p className="mb-2">${CartProductsTotalSalary.toFixed(2)}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p className="mb-0">
                    {lang === "Eng" ? "Delivery" : "الدليفرى"}
                  </p>
                  <p className="mb-0">${deliveryCost.toFixed(2)}</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <p className="fw-bold">
                    {" "}
                    {lang === "Eng" ? "Order Total" : "المبلغ الكلى"}
                  </p>
                  <p className="fw-bold">
                    ${(CartProductsTotalSalary + deliveryCost).toFixed(2)}
                  </p>
                </div>
                <Link to="/Exclsv/checkout">
                  <button className="btn btn-primary d-block w-100">
                    {lang === "Eng" ? "CHECKOUT" : "الدفع"}
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
