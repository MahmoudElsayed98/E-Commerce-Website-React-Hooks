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
          <NavLink to="Fashion" className="text-light text-decoration-none">
            {lang === "Eng" ? "Fashion" : "الموضة"}
          </NavLink>
          <NavLink to="Smartphone" className="text-light text-decoration-none">
            {lang === "Eng" ? "Smartphone" : "الهاتف الذكى"}
          </NavLink>
          <NavLink to="Laptop" className="text-light text-decoration-none">
            {lang === "Eng" ? "Laptop" : "لابتوب"}
          </NavLink>
          <NavLink to="Camera" className="text-light text-decoration-none">
            {lang === "Eng" ? "Camera" : "الكاميرا"}
          </NavLink>

          <NavLink to="Watches" className="text-light text-decoration-none">
            {lang === "Eng" ? "Watches" : "الساعات"}
          </NavLink>
          <NavLink to="Electronics" className="text-light text-decoration-none">
            {lang === "Eng" ? "Electronics" : "الالكترونيات"}
          </NavLink>
          <NavLink to="TV" className="text-light text-decoration-none">
            {lang === "Eng" ? "TV" : "التلفاز"}
          </NavLink>
          <NavLink to="Accessories" className="text-light text-decoration-none">
            {lang === "Eng" ? "Accessories" : "اكسسوارات"}
          </NavLink>
          <NavLink to="Food" className="text-light text-decoration-none">
            {lang === "Eng" ? "Food" : "الطعام"}
          </NavLink>
          <NavLink to="Health&GYM" className="text-light text-decoration-none">
            {lang === "Eng" ? "Health&GYM" : "الصحة والرياضة"}
          </NavLink>
          <NavLink to="Shoes" className="text-light text-decoration-none">
            {lang === "Eng" ? "Shoes" : "الاحذية"}
          </NavLink>
          <NavLink to="Jewellery" className="text-light text-decoration-none">
            {lang === "Eng" ? "Jewellery" : "المجوهرات"}
          </NavLink>
          <NavLink to="Motors" className="text-light text-decoration-none">
            {lang === "Eng" ? "Motors" : "الموتوسيكلات"}
          </NavLink>
          <NavLink to="Bags" className="text-light text-decoration-none">
            {lang === "Eng" ? "Bags" : "الحقائب"}
          </NavLink>
          <NavLink to="Home" className="text-light text-decoration-none">
            {lang === "Eng" ? "Home" : "الادوات المنزلية"}
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default ProductsHeader;
