import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai";
import "./index.css";
import { Link } from "react-router-dom";

function SignIn({ lang, children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!localStorage.getItem("users")) {
      alert("Invalid Email Address Or Password!");
    } else {
      JSON.parse(localStorage.getItem("users")).forEach((u) => {
        if (email === u.email && password === u.password) {
          localStorage.setItem(
            "currentUser",
            JSON.stringify({ email, password })
          );
        }
        if (email === u.email) {
          localStorage.setItem("currentUserEmail", u.email);
        } else {
          localStorage.removeItem("currentUserEmail");
        }
        if (password === u.password) {
          localStorage.setItem("currentUserPassword", u.password);
        } else {
          localStorage.removeItem("currentUserPassword");
        }
      });
      if (!localStorage.getItem("currentUser")) {
        if (
          !localStorage.getItem("currentUserEmail") &&
          !localStorage.getItem("currentUserPassword")
        ) {
          alert("Invalid Email Address Or Password!");
        } else {
          if (!localStorage.getItem("currentUserEmail")) {
            alert("Invalid Email Address!");
          }
          if (!localStorage.getItem("currentUserPassword")) {
            alert("Invalid Password!");
          }
        }
      } else {
        if (!localStorage.getItem("isInWishlist")) {
          navigate("/E-Commerce-Website-React-Hooks/");
        }
        window.location.reload();
      }
    }
    // resetForm();
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <div className="login position-relative">
      <div className="container d-flex flex-column justify-content-center align-items-center h-100">
        {children}
        <div className="login-form my-4 py-4 rounded d-flex flex-column align-items-center">
          <h1 className="fw-bold mb-0 text-center text-uppercase mb-3">
            {lang === "Eng" ? "login" : "تسجيل الدخول"}
          </h1>
          <Form id="login-form" onSubmit={handleSubmit} method="POST">
            <Form.Group className="mb-3" controlId="formSignInEmail">
              <Form.Label>
                {lang === "Eng" ? "Email Address" : "البريد الالكترونى"}
              </Form.Label>
              <Form.Control
                type="email"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={`${
                  lang === "Eng"
                    ? "Enter Email Address"
                    : "ادخل البريد الالكترونى"
                }`}
                className="input"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSignInPassword">
              <Form.Label>
                {lang === "Eng" ? "Password" : "كلمة المرور"}
              </Form.Label>
              <Form.Control
                type="password"
                placeholder={`${
                  lang === "Eng" ? "Enter password" : "ادخل كلمة المرور"
                }`}
                value={password}
                className="input"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSignInCheck">
              <Form.Check
                type="checkbox"
                label={`${lang === "Eng" ? "Remember me? " : "تذكرنى؟"}`}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              {lang === "Eng" ? "LOGIN" : "تسجيل الدخول"}
            </Button>
            <Form.Text className="d-flex justify-content-end">
              <a
                href="sign-in/forgot-password"
                className="text-decoration-none"
              >
                {lang === "Eng" ? "Forgot Password? " : "هل نسيت كلمة المرور؟"}
              </a>
            </Form.Text>
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
              {lang === "Eng" ? "Need an account? " : "مستخدم جديد؟ "}
              <Link to="/E-Commerce-Website-React-Hooks/register">
                {lang === "Eng" ? "SIGN UP" : "تسجيل الاشتراك"}
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
