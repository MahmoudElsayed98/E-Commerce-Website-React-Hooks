import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { IconContext } from "react-icons";
import { IoLogoFacebook } from "react-icons/io5";
import { FaEye, FaEyeSlash, FaInfoCircle } from "react-icons/fa";
import { AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai";
import "./index.css";
import { Link } from "react-router-dom";

function SignIn({ lang, children, users }) {
  const [email, setEmail] = useState("");
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passWord, setPassWord] = useState("");
  const [passWordValid, setPassWordValid] = useState(false);
  const [passWordEmpty, setPassWordEmpty] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  const [passWordVisability, setPassWordVisability] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValid && passWordValid) {
      let usersClone = [...users];
      let loggedUser = usersClone.find((u) => {
        return u.email === email && u.passWord === passWord;
      });
      if (loggedUser !== undefined) {
        //if user exist
        localStorage.setItem("loggedUser", JSON.stringify({ email, passWord }));
        window.location = "/E-Commerce-Website-React-Hooks/";
      } else {
        setUserNotFound(true);
      }
    }
    // axios
    //   .post(
    //     "https://fake-e-commerce-api.onrender.com/login",
    //     {
    //       email: email,
    //       password: passWord,
    //     },
    //     {
    //       withCredentials: true,
    //     }
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     navigate("/E-Commerce-Website-React-Hooks/");
    //     return res.data;
    //   })
    //   .catch((error) => {
    //     setError(error.response.data);
    //   });
  };

  const resetForm = () => {
    setEmail("");
    setPassWord("");
    setError("");
  };
  return (
    <div className="login position-relative">
      <div className="container d-flex flex-column justify-content-center align-items-center h-100">
        {children}
        <div className="login-form my-4 py-4 rounded d-flex flex-column align-items-center">
          <h1 className="fw-bold mb-0 text-center text-uppercase mb-3">
            {lang === "Eng" ? "login" : "تسجيل الدخول"}
          </h1>
          <Form id="login-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formSignInEmail">
              <Form.Label>
                {lang === "Eng" ? "Email Address" : "البريد الالكترونى"}
              </Form.Label>
              <div className="email-group position-relative">
                <Form.Control
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
            <Form.Group className="mb-3" controlId="formSignInPassword">
              <Form.Label>
                {lang === "Eng" ? "Password" : "كلمة المرور"}
              </Form.Label>
              <InputGroup>
                <div className="pass-group position-relative">
                  <Form.Control
                    onBlur={() => {
                      if (passWord.length === 0) {
                        setPassWordEmpty(true);
                        setPassWordValid(false);
                      } else {
                        setPassWordEmpty(false);
                        setPassWordValid(true);
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
                  {passWordEmpty && (
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
              {passWordEmpty && (
                <Form.Text className="text-danger">
                  This field is required.
                </Form.Text>
              )}
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formSignInCheck">
              <Form.Check
                type="checkbox"
                label={`${lang === "Eng" ? "Remember me? " : "تذكرنى؟"}`}
              />
            </Form.Group> */}
            {userNotFound && (
              <Form.Group className="mb-3">
                <p className="text-danger">Wrong email or password.</p>
              </Form.Group>
            )}
            <Button
              variant="primary"
              type="submit"
              className={`w-100 ${!error && "mt-1"}`}
            >
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
