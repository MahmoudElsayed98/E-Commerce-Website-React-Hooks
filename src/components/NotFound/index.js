import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function NotFound() {
  return (
    <div className="not-found position-relative py-4 d-flex flex-column justify-content-center align-items-center">
      <p className="mb-0 text-center para">
        Unfortunately, this page doesn't exist.
      </p>
      <Link
        to="/E-Commerce-Website-React-Hooks/"
        className="d-block w-100 text-center"
      >
        <button className="btn btn-primary btn-lg btn-main mt-2 text-uppercase w-25">
          Continue
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
