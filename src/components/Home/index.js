import React from "react";
import "./index.css";
import image from "../../assets/images/glossy-e-commerce.png";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";
import { Link } from "react-router-dom";

function Home({ lang }) {
  return (
    <div className="home position-relative d-flex justify-content-center align-items-center d-lg-block py-4 py-lg-0">
      <div className="container">
        <div className="row align-items-center justify-content-center flex-column flex-lg-row py-lg-4">
          <div className="position-relative col-10 col-md-8 col-lg-6 mb-1 mb-lg-0">
            <img src={image} className="img-fluid" alt="Welcome Img" />
          </div>
          <div className="col-11 col-md-8 col-lg-6 text-center text">
            <h1 className="text-uppercase mb-lg-3">
              <span>*</span> {lang === "Eng" ? "All The" : "أفضل"}{" "}
              <span>{lang === "Eng" ? "Best" : "المنتجات"}</span> <br /> &nbsp;
              &nbsp; {lang === "Eng" ? "You Can Get" : "ستجدها هنــــا"}{" "}
              <span>*</span>
            </h1>
            <Link
              className="btn btn-lg btn-primary btn-main mt-2 mt-lg-3 text-uppercase mx-auto d-flex justify-content-center align-items-center ok"
              to="/Exclsv/products"
            >
              {lang === "Eng" ? "Shop Now" : "التسوق الان"}
              {lang === "Eng" ? (
                <HiOutlineArrowNarrowRight className="ms-1" />
              ) : (
                <HiOutlineArrowNarrowLeft className="me-1" />
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
