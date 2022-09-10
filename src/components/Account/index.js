import React, { useContext } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { GiCombinationLock } from "react-icons/gi";
import { IoHeartDislikeSharp } from "react-icons/io5";
import { MdOutlineTaskAlt } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";
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
        <div className="content-box d-flex justify-content-center">
          <Link
            to="/E-Commerce-Website-React-Hooks/account/edit"
            className="box text-decoration-none btn btn-primary text-center me-3 p-4 rounded text-light d-flex flex-column justify-content-center align-items-center"
          >
            <BsPencilSquare size={30} className="d-block mx-auto mb-2" />
            <p className="mb-0">Edit Your Account Information</p>
          </Link>
          <Link
            to="/E-Commerce-Website-React-Hooks/account/password"
            className="box text-decoration-none btn btn-primary text-center me-3 p-4 rounded text-light d-flex flex-column justify-content-center align-items-center"
          >
            <GiCombinationLock size={30} className="d-block mx-auto mb-2" />
            <p className="mb-0">Change Your Password</p>
          </Link>
          <Link
            to="/E-Commerce-Website-React-Hooks/account/order"
            className="box text-decoration-none btn btn-primary text-center me-3 p-4 rounded text-light d-flex flex-column justify-content-center align-items-center"
          >
            <MdOutlineTaskAlt size={30} className="d-block mx-auto mb-2" />
            <p className="mb-0">View your order history</p>
          </Link>
          <Link
            to="/E-Commerce-Website-React-Hooks/account/wishlist"
            className="box text-center me-3 p-4 btn btn-primary text-decoration-none rounded text-light d-flex flex-column justify-content-center align-items-center"
          >
            <IoHeartDislikeSharp size={30} className="d-block mx-auto mb-2" />
            <p className="mb-0">Modify your wishlist</p>
          </Link>
        </div>
        <div className="content-box mt-3 d-flex justify-content-center">
          <Link
            to="/E-Commerce-Website-React-Hooks/account/cart"
            className="box text-decoration-none btn btn-primary text-center me-3 p-4 rounded text-light d-flex flex-column justify-content-center align-items-center"
          >
            <RiShoppingCartLine size={30} className="d-block mx-auto mb-2" />
            <p className="mb-0">View your shopping cart</p>
          </Link>
          <Link
            to="/E-Commerce-Website-React-Hooks/account/compare"
            className="box text-decoration-none btn btn-primary text-center me-3 p-4 rounded text-light d-flex flex-column justify-content-center align-items-center"
          >
            <IoIosGitCompare size={30} className="d-block mx-auto mb-2" />
            <p className="mb-0">View your products comparison </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Account;
