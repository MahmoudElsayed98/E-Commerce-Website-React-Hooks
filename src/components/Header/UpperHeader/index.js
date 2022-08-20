import React, { useContext } from "react";
import { FaEnvelope, FaHome } from "react-icons/fa";
import { BsExclamationCircleFill } from "react-icons/bs";
import { MdDeliveryDining } from "react-icons/md";
import { IoStorefrontSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "./index.css";
import arabicLogo from "../../../assets/images/arabic logo.png";
import englishLogo from "../../../assets/images/english logo.png";
import { ChangeLanguageContext, LanguageContext } from "../../../App";
import Language from "./Language";
import { Dropdown } from "react-bootstrap";

function UpperHeader() {
  const changeLanguage = useContext(ChangeLanguageContext);
  const lang = useContext(LanguageContext);
  return (
    <nav className="links">
      <div className="container px-2 p-1 links position-relative d-flex justify-content-between">
        <div className="nav-links d-flex">
          <NavLink
            to="/E-Commerce-Website-React-Hooks/"
            className="text-decoration-none d-flex justify-content-center align-items-center me-1"
          >
            <FaHome className="mx-1" />
            {lang === "Eng" ? "Home" : "الرئيسية"}
          </NavLink>
          <NavLink
            to="/E-Commerce-Website-React-Hooks/products"
            className="text-decoration-none d-flex justify-content-center align-items-center me-1"
          >
            <IoStorefrontSharp className="mx-1" />
            {lang === "Eng" ? "Shop" : "المتجر"}
          </NavLink>
          <NavLink
            to="/E-Commerce-Website-React-Hooks/about"
            className="text-decoration-none d-flex justify-content-center align-items-center me-1 d-md-none"
          >
            <BsExclamationCircleFill className="mx-1" />
            {lang === "Eng" ? "About" : "عنا"}
          </NavLink>
          <NavLink
            to="/E-Commerce-Website-React-Hooks/about"
            className="text-decoration-none d-flex justify-content-center align-items-center me-1 d-none d-md-flex"
          >
            <BsExclamationCircleFill className="mx-1" />
            {lang === "Eng" ? "About Us" : "نبذة عنا"}
          </NavLink>
          <NavLink
            to="/E-Commerce-Website-React-Hooks/contact"
            className="text-decoration-none d-flex justify-content-center align-items-center me-1 d-md-none"
          >
            <FaEnvelope className="mx-1" />
            {lang === "Eng" ? "Contact" : "تواصل معنا"}
          </NavLink>
          <NavLink
            to="/E-Commerce-Website-React-Hooks/contact"
            className="text-decoration-none d-flex justify-content-center align-items-center me-1 d-none d-md-flex"
          >
            <FaEnvelope className="mx-1" />
            {lang === "Eng" ? "Contact Us" : "تواصل معنا"}
          </NavLink>
        </div>
        <div
          className="delivery d-none d-lg-flex justify-content-center align-items-center"
          role="button"
        >
          <MdDeliveryDining className="mx-1" />
          {lang === "Eng" ? "Delivery" : "الدليفري"}
        </div>
        <Language lang={lang} changeLanguage={changeLanguage} />
        <Dropdown className="lang d-lg-none">
          <Dropdown.Toggle
            variant=""
            id="dropdown-basic"
            className="d-flex align-items-center"
          >
            <img
              src={lang === "Eng" ? englishLogo : arabicLogo}
              alt={lang === "Eng" ? "English Logo" : "Arabic Logo"}
              className="mx-2"
            />
            <p className="mb-0">{lang === "Eng" ? "EN" : "ع"}</p>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              className="d-flex align-items-center"
              onClick={() => changeLanguage("Eng")}
            >
              <img
                src={englishLogo}
                alt="English Logo"
                className={`${lang === "Eng" ? "me-2" : "ms-2"}`}
              />
              <p className="mb-0">English</p>
            </Dropdown.Item>
            <Dropdown.Item
              className="d-flex align-items-center"
              onClick={() => changeLanguage("Ar")}
            >
              <img
                src={arabicLogo}
                alt="Arabic Logo"
                className={`${lang === "Eng" ? "me-2" : "ms-2"}`}
              />
              <p className="mb-0">العربية</p>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
}

export default UpperHeader;
