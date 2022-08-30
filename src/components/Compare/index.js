import React, { useContext } from "react";
import { CompareProductsContext, LanguageContext } from "../../App";
import { GoPrimitiveDot } from "react-icons/go";
import { Link } from "react-router-dom";
import "./index.css";

function Compare({ removeProductFromComparison, addToCart }) {
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
          <>
            {compareProducts.length === 0 ? (
              <span className="w-100 cart-info d-block position-absolute top-50 start-50">
                <p className="mb-0 text-center para">
                  {lang === "Eng"
                    ? "No Products To Be Compared Currently!"
                    : "لا توجد منتجات للمقارنة حالياً"}
                </p>
                <Link
                  to="/E-Commerce-Website-React-Hooks/products"
                  className="text-decoration-none"
                >
                  <button className="btn btn-lg btn-primary btn-main d-block mx-auto mt-2">
                    {lang === "Eng" ? "GO SHOPPING NOW" : "الذهاب للتسوق الآن"}
                  </button>
                </Link>
              </span>
            ) : (
              // <div
              //   key={e.id}
              //   className="cart-item border rounded py-2 d-flex align-items-center mb-3"
              // >
              //   <Link
              //     to={`/E-Commerce-Website-React-Hooks/products/${e.id}`}
              //     className="d-flex align-items-center justify-content-center"
              //   >
              //     <div className="image p-2 rounded">
              //       <img src={e.image} className="img-fluid" alt={e.title} />
              //     </div>
              //   </Link>
              //   <Link
              //     to={`/E-Commerce-Website-React-Hooks/products/${e.id}`}
              //     className="d-flex align-items-center justify-content-center title text-dark text-center"
              //   >
              //     {e.title}
              //   </Link>
              //   <div className="cart-details d-flex align-items-center justify-content-evenly">
              //     <p className="text-center mb-0">${e.price.toFixed(2)}</p>
              //     <button
              //       className="btn p-0 close d-flex justify-content-center align-items-center rounded-circle"
              //       onClick={() => removeProductFromComparison(e)}
              //     >
              //       <FaTrashAlt className="fs-5" />
              //     </button>
              //   </div>
              // </div>
              <div className="table">
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>
                          <p className="mb-0">
                            {lang === "Eng"
                              ? "Product Details"
                              : "تفاصيل المنتج"}
                          </p>
                        </th>
                        <th colSpan={compareProducts.length}></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="compare-name">
                        <td className="text-center">
                          {lang === "Eng" ? "Title" : "الإسم"}
                        </td>
                        {compareProducts.map((p) => (
                          <td key={p.id} className="text-center">
                            <Link
                              to={`/E-Commerce-Website-React-Hooks/products/${p.id}`}
                            >
                              <strong>{p.title}</strong>
                            </Link>
                          </td>
                        ))}
                      </tr>
                      <tr className="compare-image">
                        <td className="text-center">
                          {lang === "Eng" ? "Image" : "الصورة"}
                        </td>
                        {compareProducts.map((p) => (
                          <td key={p.id} className="text-center">
                            <div className="content w-100 d-flex justify-content-center align-items-center">
                              <div className="image p-1 rounded">
                                <img
                                  src={p.image}
                                  alt={p.title}
                                  title={p.title}
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </td>
                        ))}
                      </tr>
                      <tr className="compare-price">
                        <td className="text-center">
                          {lang === "Eng" ? "Price" : "السعر"}
                        </td>
                        {compareProducts.map((p) => (
                          <td key={p.id} className="text-center">
                            ${p.price}
                          </td>
                        ))}
                      </tr>
                      <tr className="compare-description">
                        <td className="text-center">
                          {lang === "Eng" ? "Description" : "الوصف"}
                        </td>
                        {compareProducts.map((p) => (
                          <td key={p.id} className="text-center">
                            {p.description}
                          </td>
                        ))}
                      </tr>
                      <tr className="compare-category">
                        <td className="text-center">
                          {lang === "Eng" ? "Category" : "الفئة"}
                        </td>
                        {compareProducts.map((p) => (
                          <td
                            key={p.id}
                            className="text-center text-capitalize"
                          >
                            {p.category}
                          </td>
                        ))}
                      </tr>
                      <tr className="compare-rating">
                        <td className="text-center">
                          {lang === "Eng" ? "Rating" : "التقييم"}
                        </td>
                        {compareProducts.map((p) => (
                          <td key={p.id} className="text-center">
                            {p.rating.rate}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td></td>
                        {compareProducts.map((p) => (
                          <td className="out-of-stock text-center" key={p.id}>
                            <div className="compare-buttons p-0">
                              <button
                                className="btn btn-primary btn-main m-1"
                                onClick={() => addToCart(p)}
                              >
                                <span className="text-uppercase d-block w-100">
                                  {lang === "Eng"
                                    ? "Add to Cart"
                                    : "إضافة إلى السلة"}
                                </span>
                              </button>
                              <button
                                className="btn btn-danger m-1"
                                onClick={() => removeProductFromComparison(p)}
                              >
                                <span className="text-uppercase d-block w-100">
                                  {lang === "Eng" ? "Remove" : "حذف"}
                                </span>
                              </button>
                            </div>
                          </td>
                        ))}
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            )}
          </>
        </div>
      </div>
    </div>
  );
}

export default Compare;
