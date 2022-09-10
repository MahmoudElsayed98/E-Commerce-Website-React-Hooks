import React, { useContext, useEffect } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../App";
import "./index.css";

function SignOut() {
  const lang = useContext(LanguageContext);
  useEffect(() => {
    if (localStorage.getItem("isInWishlist")) {
      localStorage.removeItem("isInWishlist");
    }
  }, []);
  return (
    <div className="sign-out py-4 position-relative">
      <div className="container">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <GoPrimitiveDot className="fs-6 me-1" />
          {lang === "Eng" ? "Account Logout" : "تسجيل الخروج من الحساب"}
          <GoPrimitiveDot className="fs-6 ms-1" />
        </h3>
        <p className="lead">
          - You have been logged off your account. It is now safe to leave the
          computer. <br />
        </p>
        <p className="lead">
          - Your shopping cart has been saved, the items inside it will be
          restored whenever you log back into your account.
        </p>
        <Link to="/Exclsv/" className="text-decoration-none">
          <button className="btn btn-primary btn-main btn-lg text-uppercase d-block w-50 mx-auto">
            continue
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SignOut;
