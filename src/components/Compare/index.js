import React, { useContext } from "react";
import { CompareProductsContext, LanguageContext } from "../../App";
import { GoPrimitiveDot } from "react-icons/go";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./index.css";

function Compare({ removeProductFromComparison }) {
  const compareProducts = useContext(CompareProductsContext);
  const lang = useContext(LanguageContext);
  return (
    <div className="cart-comp py-4 position-relative">
      <div className="container">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <GoPrimitiveDot className="fs-6 me-1" />
          {lang === "Eng"
            ? `Comparison ( ${compareProducts.length + " Items"} )`
            : `المقارنة ( ${compareProducts.length + " منتجات"} )`}
          <GoPrimitiveDot className="fs-6 ms-1" />
        </h3>

        <div className="row justify-content-center align-items-start">
          <div className="col-md-8 col-lg-7">
            {compareProducts.length === 0 ? (
              <span className="w-100 cart-info d-block position-absolute top-50 start-50">
                <p className="mb-0 text-center">
                  {lang === "Eng"
                    ? "No Products To Be Compared Currently!"
                    : "لا توجد منتجات للمقارنة حالياً"}
                </p>
                <Link
                  to="/E-Commerce-Website-React-Hooks/products"
                  className="text-decoration-none"
                >
                  <button className="btn btn-lg btn-primary d-block mx-auto mt-2">
                    {lang === "Eng" ? "GO SHOPPING NOW" : "الذهاب للتسوق الآن"}
                  </button>
                </Link>
              </span>
            ) : (
              compareProducts.map((e) => (
                <div
                  key={e.id}
                  className="cart-item border rounded py-2 d-flex align-items-center mb-3"
                >
                  <Link
                    to={`/E-Commerce-Website-React-Hooks/products/${e.id}`}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <div className="image p-2 rounded">
                      <img src={e.image} className="img-fluid" alt={e.title} />
                    </div>
                  </Link>
                  <Link
                    to={`/E-Commerce-Website-React-Hooks/products/${e.id}`}
                    className="d-flex align-items-center justify-content-center title text-dark text-center"
                  >
                    {e.title}
                  </Link>
                  <div className="cart-details d-flex align-items-center justify-content-evenly">
                    <p className="text-center mb-0">${e.price.toFixed(2)}</p>
                    <button
                      className="btn p-0 close d-flex justify-content-center align-items-center rounded-circle"
                      onClick={() => removeProductFromComparison(e)}
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
  );
}

export default Compare;