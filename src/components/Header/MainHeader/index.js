import React, { useContext, useEffect, useRef } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import englishLogo from "../../../assets/images/website english logo.png";
import arabicLogo from "../../../assets/images/website arabic logo.png";
import Icons from "./Icons";
import { FaBars } from "react-icons/fa";
import "./index.css";
import { LanguageContext } from "../../../App";

function MainHeader({ removeProductFromCart }) {
  const toggleBtnRef = useRef();
  const lang = useContext(LanguageContext);
  const handleNavbar = (e) => {
    const toggleBtn = toggleBtnRef.current;
    const navbarNav = toggleBtn.nextElementSibling;
    if (e.target !== toggleBtn && e.target !== navbarNav) {
      if (
        !toggleBtn.classList.contains("collapsed") &&
        navbarNav.classList.contains("show")
      ) {
        toggleBtn.click();
      }
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleNavbar);
    return () => {
      document.removeEventListener("click", handleNavbar);
    };
  });
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand
          href="/Exclsv/"
          onClick={() => localStorage.clear()}
          className={`${lang === "Eng" ? "me-3" : "ms-3"}`}
        >
          <img
            src={lang === "Eng" ? englishLogo : arabicLogo}
            className="img-fluid"
            alt="website logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          className="p-0"
          aria-controls="basic-navbar-nav"
          ref={toggleBtnRef}
        >
          <FaBars />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Form
              className={`d-none d-lg-flex my-auto ${
                lang === "Eng" ? "ms-3" : "me-3"
              }`}
            >
              <select
                name="categories"
                role="button"
                className={`px-1 ${
                  lang === "Eng" ? "rounded-start" : "rounded-end"
                }`}
              >
                <option value="all">
                  {lang === "Eng" ? "All Products" : "كل المنتجات"}
                </option>
                <option value="men's clothing">
                  {lang === "Eng" ? "Mens" : "الرجالى"}
                </option>
                <option value="woman's clothing">
                  {lang === "Eng" ? "Womans" : "الحريمى"}
                </option>
                <option value="jewelery">
                  {lang === "Eng" ? "Jewelery" : "المجوهرات"}
                </option>
                <option value="electronics">
                  {lang === "Eng" ? "Electronics" : "الالكترونيات"}
                </option>
              </select>
              <FormControl
                type="search"
                placeholder={`${
                  lang === "Eng" ? "Search here" : "ابحث هنا"
                }...`}
                className="search-input"
                aria-label="Search"
              />
              <Button
                variant={`outline-dark search d-flex justify-content-center align-items-center rounded-0 ${
                  lang === "Eng" ? "rounded-end" : "rounded-start"
                }`}
              >
                <FaSearch />
              </Button>
            </Form>
            <Icons removeProductFromCart={removeProductFromCart} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainHeader;
