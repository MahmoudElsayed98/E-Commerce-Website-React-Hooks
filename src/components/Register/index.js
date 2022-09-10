import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./index.css";
import axios from "axios";
import Password from "../Password";

function Register({ lang }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log(userName);
    console.log(email);
    console.log(passWord);
    e.preventDefault();
    axios
      .post("https://fake-e-commerce-api.onrender.com/signup", {
        name: userName,
        email: email,
        password: passWord,
      })
      .then((res) => {
        console.log("success", res);
      })
      .catch((err) => {
        console.log("error", err);
      });
    // e.preventDefault();
    // let users = localStorage.getItem("users")
    //   ? JSON.parse(localStorage.getItem("users"))
    //   : [];
    // users.push({ userName, email, passWord });
    // localStorage.setItem("users", JSON.stringify(users));
    // localStorage.setItem(
    //   "currentUser",
    //   JSON.stringify({ userName, email, passWord })
    // );
    // resetForm();
    // navigate("/E-Commerce-Website-React-Hooks/");
    // window.location.reload();
  };
  const resetForm = () => {
    setEmail("");
    setPassWord("");
    setUserName("");
  };
  return (
    <div className="register position-relative">
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="register-form my-4 py-4 rounded d-flex flex-column align-items-center">
          <h1 className="fw-bold mb-0 text-center text-uppercase mb-3">
            {" "}
            {lang === "Eng" ? "Sign Up" : "مستخدم جديد"}
          </h1>
          <Form id="register-form" onSubmit={handleSubmit} method="POST">
            <Form.Group className="mb-3" controlId="formRegisterUsername">
              <Form.Label>
                {" "}
                {lang === "Eng" ? "Username" : "اسم المستخدم"}
              </Form.Label>
              <Form.Control
                required
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder={`${
                  lang === "Eng" ? "Enter Username" : "ادخل اسم المستخدم "
                }`}
                className="input"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRegisterEmail">
              <Form.Label>
                {lang === "Eng" ? "Email Address" : "البريد الالكترونى"}
              </Form.Label>
              <Form.Control
                required
                type="email"
                className="input"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={`${
                  lang === "Eng"
                    ? "Enter Email Address"
                    : "ادخل البريد الالكترونى  "
                }`}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRegisterPassword">
              <Form.Label>
                {" "}
                {lang === "Eng" ? "Password" : "كلمة المرور"}
              </Form.Label>
              <Form.Control
                required
                type="passWord"
                placeholder={`${
                  lang === "Eng" ? "Enter Password" : "ادخل كلمة المرور"
                }`}
                value={passWord}
                className="input"
                onChange={(e) => setPassWord(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mb-3">
              {lang === "Eng" ? "SIGN UP" : "إنشاء حساب"}
            </Button>
            <div className="or position-relative">
              <hr />
              <span className="position-absolute start-50 top-50 rounded d-flex justify-content-center align-items-center">
                {lang === "Eng" ? "OR" : "أو"}
              </span>
            </div>
            <div className="socials text-center">
              <IconContext.Provider value={{ size: "2.25rem" }}>
                <a href="#facebook">
                  <IoLogoFacebook className="me-2" />
                </a>
                <a href="#gmail">
                  <AiFillGoogleCircle className="me-2" />
                </a>
                <a href="#twitter">
                  <AiFillTwitterCircle className="me-2" />{" "}
                </a>
              </IconContext.Provider>
            </div>
            <div className="go-to-sign-up text-center mt-3">
              {lang === "Eng" ? "Already a user? " : "مستخدم بالفعل؟ "}
              <Link to="/E-Commerce-Website-React-Hooks/sign-in">
                {lang === "Eng" ? "LOGIN" : "تسجيل الدخول"}
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
