import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../../App";
import "./index.css";

function AddProductNotify({ product, target, alreadyAdded, goal }) {
  const lang = useContext(LanguageContext);
  return (
    <div
      className="product-added d-flex align-items-center justify-content-center"
      key={product._id}
    >
      <div className="image rounded border p-2 me-3">
        <img
          src={product.image}
          className="img-fluid"
          alt={product.name + "Img"}
        />
      </div>
      <div className="info">
        <h6 className="fw-bold mb-1">{product.name}</h6>
        <p className="mb-0">
          {lang === "Eng"
            ? `You have ${alreadyAdded ? "already" : "successfully"} ${
                goal === "remove" ? "removed" : goal === "add" ? "added" : ""
              } `
            : goal === "add"
            ? " تمت اضافة"
            : goal === "remove"
            ? "تم حذف "
            : ""}
          <br />{" "}
          <Link to={`/E-Commerce-Website-React-Hooks/products/${product._id}`}>
            {product.name}
            <br />
          </Link>{" "}
          {lang === "Eng"
            ? goal === "add"
              ? `to ${target !== "compare" ? "your" : ""} `
              : `from ${target !== "compare" ? "your" : ""} `
            : goal === "remove"
            ? "من "
            : "الى "}
          <Link
            to={`/E-Commerce-Website-React-Hooks/${target}`}
            className="text-capitalize"
          >
            {target === "cart"
              ? lang === "Eng"
                ? "shopping cart"
                : "سلة التسوق الخاصة بك"
              : target === "wishlist"
              ? lang === "Eng"
                ? "wishlist"
                : "المفضلة"
              : target === "compare" && lang === "Eng"
              ? "comparison"
              : "المقارنة"}
          </Link>
          {lang !== "Eng" ? (alreadyAdded ? " بالفعل" : " بنجاح") : ""}
        </p>
      </div>
    </div>
  );
}

export default AddProductNotify;
