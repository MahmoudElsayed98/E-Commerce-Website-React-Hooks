import React, { useContext } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { GiCombinationLock } from "react-icons/gi";
import { IoHeartDislikeSharp } from "react-icons/io5";
import { TiBusinessCard } from "react-icons/ti";
import { LanguageContext } from "../../App";
import { Link } from "react-router-dom";
import "./index.css";

function Account() {
  const lang = useContext(LanguageContext);
  return (
    <div className="account py-4 position-relative">
      <div className="container">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <GoPrimitiveDot className="fs-6 me-1" />
          {lang === "Eng" ? "My Account" : "الملف الشخصى"}
          <GoPrimitiveDot className="fs-6 ms-1" />
        </h3>
        <div className="content-box d-flex">
          <Link
            to=""
            className="box text-decoration-none btn btn-primary text-center me-3 p-3 rounded text-light d-flex flex-column justify-content-center align-items-center"
          >
            <BsPencilSquare size={30} className="d-block mx-auto mb-2" />
            <p className="mb-0">Edit Your Account Information</p>
          </Link>
          <Link
            to=""
            className="box text-decoration-none btn btn-primary text-center me-3 p-3 rounded text-light d-flex flex-column justify-content-center align-items-center"
          >
            <GiCombinationLock size={30} className="d-block mx-auto mb-2" />
            <p className="mb-0">Change Your Password</p>
          </Link>
          <Link
            to=""
            className="box text-decoration-none btn btn-primary text-center me-3 p-3 rounded text-light d-flex flex-column justify-content-center align-items-center"
          >
            <TiBusinessCard size={30} className="d-block mx-auto mb-2" />
            <p className="mb-0">Modify your address book entries</p>
          </Link>
          <Link
            to=""
            className="box text-center me-3 p-3 btn btn-primary text-decoration-none rounded text-light d-flex flex-column justify-content-center align-items-center"
          >
            <IoHeartDislikeSharp size={30} className="d-block mx-auto mb-2" />
            <p className="mb-0">Modify your wish list</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Account;
