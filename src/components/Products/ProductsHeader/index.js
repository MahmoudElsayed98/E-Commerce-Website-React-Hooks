import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { LanguageContext } from "../../../App";
import "./index.css";

function ProductsHeader() {
  const lang = useContext(LanguageContext);
  return (
    <>
      <div className="categories-links">
        <nav className="container list-unstyled mb-0 d-flex flex-wrap justify-content-center text-center text-md-start fw-bold">
          <NavLink to="" className="text-light text-decoration-none" end>
            {lang === "Eng" ? "All Products" : "كل المنتجات"}
          </NavLink>

          <NavLink
            to="men's%20clothing"
            className="text-light text-decoration-none"
          >
            {lang === "Eng" ? "Men's clothing" : "الملابس الرجالى"}
          </NavLink>

          <NavLink
            to="women's%20clothing"
            className="text-light text-decoration-none"
          >
            {lang === "Eng" ? "Woman's clothing" : "الملابس الحريمى"}
          </NavLink>

          <NavLink to="jewelery" className="text-light text-decoration-none">
            {lang === "Eng" ? "Jewelery" : "المجوهرات"}
          </NavLink>

          <NavLink to="electronics" className="text-light text-decoration-none">
            {lang === "Eng" ? "Electronics" : "الالكترونيات"}
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default ProductsHeader;
