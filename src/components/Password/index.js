import React from "react";
import "./index.css";
import { GoPrimitiveDot } from "react-icons/go";

function Password({ lang }) {
  return (
    <div className="password py-4 position-relative">
      <div className="container">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <GoPrimitiveDot className="fs-6 me-1" />
          {lang === "Eng" ? "My Account" : "الملف الشخصى"}
          <GoPrimitiveDot className="fs-6 ms-1" />
        </h3>
      </div>
    </div>
  );
}

export default Password;
