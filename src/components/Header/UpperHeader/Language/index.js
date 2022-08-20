import React from "react";
import englishLogo from "../../../../assets/images/english logo.png";
import arabicLogo from "../../../../assets/images/arabic logo.png";
import { Dropdown } from "react-bootstrap";
import "./index.css";

function Language({ lang, changeLanguage }) {
  return (
    <>
      <Dropdown className="position-absolute top-50 start-50 d-none d-lg-block language">
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
          <p className="mb-0">{lang === "Eng" ? "English" : "العربية"}</p>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            className="d-flex align-items-center"
            onClick={() => changeLanguage("Eng")}
          >
            <img src={englishLogo} alt="English Logo" className="mx-2" />
            <p className="mb-0">English</p>
          </Dropdown.Item>
          <Dropdown.Item
            className="d-flex align-items-center"
            onClick={() => changeLanguage("Ar")}
          >
            <img src={arabicLogo} alt="Arabic Logo" className="mx-2" />
            <p className="mb-0">العربية</p>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default Language;
