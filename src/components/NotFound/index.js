import React from "react";
import "./index.css";

function NotFound() {
  return (
    <div className="not-found py-4 d-flex flex-column justify-content-center align-items-center">
      <p className="mb-0 text-center para">
        Unfortunately, this page doesn't exist.
      </p>
      <button className="btn btn-primary btn-lg btn-main mt-2 text-uppercase">
        Continue
      </button>
    </div>
  );
}

export default NotFound;
