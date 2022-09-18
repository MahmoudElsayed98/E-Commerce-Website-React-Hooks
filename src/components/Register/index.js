import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import InputGroup from "react-bootstrap/InputGroup";
import { FaEye, FaEyeSlash, FaInfoCircle } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./index.css";
import axios from "axios";

function Register({ lang, users, setUsers }) {
  const [userName, setUserName] = useState("");
  const [userAlreadyExist, setUserAlreadyExist] = useState(false);
  const [userNameValid, setUserNameValid] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [userNameEmpty, setUserNameEmpty] = useState(false);
  const [email, setEmail] = useState("");
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passWord, setPassWord] = useState("");
  const [passWordValid, setPassWordValid] = useState(false);
  const [passWordEmpty, setPassWordEmpty] = useState(false);
  const [passWordError, setPassWordError] = useState(false);
  const [passWordVisability, setPassWordVisability] = useState(false);
  const userNameRef = useRef();
  const emailRef = useRef();
  const passWordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setUserAlreadyExist(false);
    console.log(userName);
    console.log(email);
    console.log(passWord);
    e.preventDefault();
    if (!userNameValid) {
      userNameRef.current.focus();
    } else if (!emailValid) {
      emailRef.current.focus();
    } else if (!passWordValid) {
      passWordRef.current.focus();
    }
    console.log(userNameValid);
    console.log(emailValid);
    console.log(passWordValid);
    if (userNameValid && emailValid && passWordValid) {
      // axios
      //   .post("https://fake-e-commerce-api.onrender.com/signup", {
      //     name: userName,
      //     email: email,
      //     password: passWord,
      //   })
      //   .then((res) => {
      //     console.log("success", res.data);
      //     return res.data;
      //   })
      //   .catch((err) => {
      //     console.log("error", err);
      //   });
      let usersClone = [...users];
      if (users.length === 0) {
        usersClone.push({ userName, email, passWord });
      } else {
        let duplicateUser = usersClone.find((u) => {
          return u.userName === userName || u.email === email;
        });
        if (duplicateUser === undefined) {
          //if user does not exist, user will be added
          usersClone.push({ userName, email, passWord });
        } else {
          setUserAlreadyExist(true);
        }
      }
      setUsers(usersClone);
      localStorage.setItem(
        "loggedUser",
        JSON.stringify({ userName, email, passWord })
      );
      localStorage.setItem("users", JSON.stringify(usersClone));
      window.location = "/E-Commerce-Website-React-Hooks/";
    }
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
              <div className="user-group position-relative">
                <Form.Control
                  ref={userNameRef}
                  onBlur={() => {
                    if (userName.length !== 0) {
                      const userNameRegex = /^[a-z0-9_-]{3,16}$/gi;
                      if (userNameRegex.test(userName)) {
                        setUserNameEmpty(false);
                        setUserNameValid(true);
                        setUserNameError(false);
                      } else {
                        setUserNameEmpty(false);
                        setUserNameValid(false);
                        setUserNameError(true);
                      }
                    } else {
                      setUserNameEmpty(true);
                      setUserNameValid(false);
                      setUserNameError(false);
                    }
                  }}
                  required
                  type="text"
                  className="input"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder={`${
                    lang === "Eng" ? "Enter Username" : "ادخل اسم المستخدم "
                  }`}
                />
                {(userNameError || userNameEmpty) && (
                  <FaInfoCircle
                    className="position-absolute info-error text-danger top-50"
                    size={20}
                  />
                )}
              </div>
              {userNameError && (
                <Form.Text className="text-danger">
                  Username must have length of 3 to 16 characters and may
                  include _ and –.
                </Form.Text>
              )}
              {userNameEmpty && (
                <Form.Text className="text-danger">
                  This field is required.
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRegisterEmail">
              <Form.Label>
                {lang === "Eng" ? "Email Address" : "البريد الالكترونى"}
              </Form.Label>

              <div className="email-group position-relative">
                <Form.Control
                  ref={emailRef}
                  onBlur={() => {
                    if (email.length !== 0) {
                      const emailRegex =
                        /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/gi;
                      if (emailRegex.test(email)) {
                        setEmailEmpty(false);
                        setEmailValid(true);
                        setEmailError(false);
                      } else {
                        setEmailEmpty(false);
                        setEmailValid(false);
                        setEmailError(true);
                      }
                    } else {
                      setEmailEmpty(true);
                      setEmailValid(false);
                      setEmailError(false);
                    }
                  }}
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
                {(emailError || emailEmpty) && (
                  <FaInfoCircle
                    className="position-absolute info-error text-danger top-50"
                    size={20}
                  />
                )}
              </div>
              {emailError && (
                <Form.Text className="text-danger">
                  Invalid email address.
                </Form.Text>
              )}
              {emailEmpty && (
                <Form.Text className="text-danger">
                  This field is required.
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSignUpPassword">
              <Form.Label>
                {lang === "Eng" ? "Password" : "كلمة المرور"}
              </Form.Label>
              <InputGroup>
                <div className="pass-group position-relative">
                  <Form.Control
                    ref={passWordRef}
                    onBlur={() => {
                      if (passWord.length !== 0) {
                        const passWordRegex =
                          /(?=(.*[0-9]))(?=.*[!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/gi;
                        if (passWordRegex.test(passWord)) {
                          setPassWordEmpty(false);
                          setPassWordValid(true);
                          setPassWordError(false);
                        } else {
                          setPassWordEmpty(false);
                          setPassWordValid(false);
                          setPassWordError(true);
                        }
                      } else {
                        setPassWordEmpty(true);
                        setPassWordValid(false);
                        setPassWordError(false);
                      }
                    }}
                    required
                    type={`${passWordVisability ? "text" : "password"}`}
                    placeholder={`${
                      lang === "Eng" ? "Enter password" : "ادخل كلمة المرور"
                    }`}
                    value={passWord}
                    className="input input-password"
                    onChange={(e) => setPassWord(e.target.value)}
                  />
                  {(passWordError || passWordEmpty) && (
                    <FaInfoCircle
                      className="position-absolute info-error text-danger top-50"
                      size={20}
                    />
                  )}
                </div>
                <InputGroup.Text id="inputGroupPrepend">
                  {passWordVisability ? (
                    <FaEyeSlash
                      onClick={() => setPassWordVisability(false)}
                      role="button"
                    />
                  ) : (
                    <FaEye
                      onClick={() => setPassWordVisability(true)}
                      role="button"
                    />
                  )}
                </InputGroup.Text>
              </InputGroup>
              {passWordError && (
                <Form.Text className="text-danger">
                  Password should have 1 lowercase letter, 1 uppercase letter, 1
                  number, 1 special character and be at least 8 characters long.
                </Form.Text>
              )}
              {passWordEmpty && (
                <Form.Text className="text-danger">
                  This field is required.
                </Form.Text>
              )}
            </Form.Group>
            {userAlreadyExist && (
              <Form.Group className="mb-3">
                <p className="text-danger">This user already exists.</p>
              </Form.Group>
            )}
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
