import React from "react";
import "./index.css";

function Footer({ lang }) {
  return (
    <footer className="p-3 text-center text-light">
      <span>&copy;</span>
      {" 2022"}
      {lang === "Eng"
        ? " Mahmoud El-Abedy | All Rights Reserved"
        : " محمود الأبيدى | جميع الحقوق محفوظة"}
    </footer>
  );
}

export default Footer;
