import React, { useState } from "react";
import "./index.css";
import { Form, Button } from "react-bootstrap";
import { IconContext } from "react-icons";
import InputGroup from "react-bootstrap/InputGroup";
import { FaEye, FaEyeSlash, FaInfoCircle } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GoPrimitiveDot } from "react-icons/go";

function Password({ lang, users, setUsers }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [currentPasswordEmpty, setcurrentPasswordEmpty] = useState(false);
  const [currentPasswordError, setcurrentPasswordError] = useState(false);
  const [currentPasswordValid, setcurrentPasswordValid] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordEmpty, setNewPasswordEmpty] = useState(false);
  const [newPasswordError, setNewPasswordError] = useState(false);
  const [newPasswordValid, setNewPasswordValid] = useState(false);
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [confirmNewPasswordEmpty, setConfirmNewPasswordEmpty] = useState(false);
  const [confirmNewPasswordError, setConfirmNewPasswordError] = useState(false);
  const [confirmNewPasswordValid, setConfirmNewPasswordValid] = useState(false);
  const [passWordVisability, setPassWordVisability] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentPasswordValid && newPasswordValid && confirmNewPasswordValid) {
      let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
      loggedUser.passWord = newPassword;
      localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
      let usersClone = [...users];
      usersClone.forEach((u) => {
        if (u.passWord === currentPassword) {
          u.passWord = newPassword;
        }
      });
      setUsers(usersClone);
      localStorage.setItem("users", JSON.stringify(usersClone));
    }
  };
  return (
    <div className="password py-4 position-relative">
      <div className="container">
        <h3 className="fw-bold mb-4 d-flex align-items-center">
          <GoPrimitiveDot className="fs-6 me-1" />
          {lang === "Eng" ? "Change Password" : "تغيير كلمة المرور"}
          <GoPrimitiveDot className="fs-6 ms-1" />
        </h3>
        <div className="login-form my-4 py-4 mx-auto">
          <Form id="change-pass-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formCurrentPassword">
              <Form.Label>
                {lang === "Eng" ? "Current Password" : "كلمة المرور الحالية"}
              </Form.Label>
              <InputGroup>
                <div className="pass-group position-relative">
                  <Form.Control
                    // ref={passWordRef}
                    onBlur={(e) => {
                      if (e.target.value.length !== 0) {
                        if (localStorage.getItem("loggedUser")) {
                          let loggedUser = JSON.parse(
                            localStorage.getItem("loggedUser")
                          );
                          if (currentPassword === loggedUser.passWord) {
                            setcurrentPasswordValid(true);
                            setcurrentPasswordEmpty(false);
                            setcurrentPasswordError(false);
                          } else {
                            setcurrentPasswordValid(false);
                            setcurrentPasswordEmpty(false);
                            setcurrentPasswordError(true);
                          }
                        }
                      } else {
                        setcurrentPasswordEmpty(true);
                        setcurrentPasswordValid(false);
                        setcurrentPasswordError(false);
                      }
                    }}
                    required
                    type={`${passWordVisability ? "text" : "password"}`}
                    placeholder={`${
                      lang === "Eng"
                        ? "Enter current password"
                        : "ادخل كلمة المرور الحالية"
                    }`}
                    value={currentPassword}
                    className="input input-password"
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                  {currentPasswordError ||
                    (currentPasswordEmpty && (
                      <FaInfoCircle
                        className="position-absolute info-error text-danger top-50"
                        size={20}
                      />
                    ))}
                </div>
                {passWordVisability ? (
                  <InputGroup.Text
                    id="inputGroupPrepend"
                    role="button"
                    onClick={() => setPassWordVisability(false)}
                  >
                    <FaEyeSlash />
                  </InputGroup.Text>
                ) : (
                  <InputGroup.Text
                    id="inputGroupPrepend"
                    role="button"
                    onClick={() => setPassWordVisability(true)}
                  >
                    <FaEye />
                  </InputGroup.Text>
                )}
              </InputGroup>
              {currentPasswordError && (
                <Form.Text className="text-danger">Invalid password.</Form.Text>
              )}
              {currentPasswordEmpty && (
                <Form.Text className="text-danger">
                  This field is required.
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNewPassword">
              <Form.Label>
                {lang === "Eng" ? "New Password" : "كلمة المرور الجديدة"}
              </Form.Label>
              <InputGroup>
                <div className="pass-group position-relative">
                  <Form.Control
                    // ref={passWordRef}
                    onBlur={(e) => {
                      if (e.target.value.length !== 0) {
                        const passWordRegex =
                          /(?=(.*[0-9]))(?=.*[!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/gi;
                        if (passWordRegex.test(e.target.value)) {
                          setNewPasswordEmpty(false);
                          setNewPasswordError(false);
                          setNewPasswordValid(true);
                        } else {
                          setNewPasswordEmpty(false);
                          setNewPasswordError(true);
                          setNewPasswordValid(false);
                        }
                      } else {
                        setNewPasswordError(false);
                        setNewPasswordEmpty(true);
                        setNewPasswordValid(false);
                      }
                    }}
                    required
                    type={`${passWordVisability ? "text" : "password"}`}
                    placeholder={`${
                      lang === "Eng"
                        ? "Enter new password"
                        : "ادخل كلمة المرور الجديدة"
                    }`}
                    value={newPassword}
                    className="input input-password"
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  {(newPasswordError || newPasswordEmpty) && (
                    <FaInfoCircle
                      className="position-absolute info-error text-danger top-50"
                      size={20}
                    />
                  )}
                </div>
                {passWordVisability ? (
                  <InputGroup.Text
                    id="inputGroupPrepend"
                    role="button"
                    onClick={() => setPassWordVisability(false)}
                  >
                    <FaEyeSlash />
                  </InputGroup.Text>
                ) : (
                  <InputGroup.Text
                    id="inputGroupPrepend"
                    role="button"
                    onClick={() => setPassWordVisability(true)}
                  >
                    <FaEye />
                  </InputGroup.Text>
                )}
              </InputGroup>
              {newPasswordError && (
                <Form.Text className="text-danger">
                  Password should have 1 lowercase letter, 1 uppercase letter, 1
                  number, 1 special character and be at least 8 characters long.
                </Form.Text>
              )}
              {newPasswordEmpty && (
                <Form.Text className="text-danger">
                  This field is required.
                </Form.Text>
              )}
            </Form.Group>
            {newPassword.length > 0 && (
              <Form.Group className="mb-3" controlId="formConfirmNewPassword">
                <Form.Label>
                  {lang === "Eng"
                    ? "Confirm New Password"
                    : "تاكيد كلمة المرور الجديدة"}
                </Form.Label>
                <InputGroup>
                  <div className="pass-group position-relative">
                    <Form.Control
                      // ref={passWordRef}
                      onBlur={(e) => {
                        if (
                          e.target.value.length !== 0 &&
                          newPassword.length !== 0
                        ) {
                          if (e.target.value === newPassword) {
                            setConfirmNewPasswordValid(true);
                            setConfirmNewPasswordEmpty(false);
                            setConfirmNewPasswordError(false);
                          } else {
                            setConfirmNewPasswordValid(false);
                            setConfirmNewPasswordEmpty(false);
                            setConfirmNewPasswordError(true);
                          }
                        } else {
                          setConfirmNewPasswordEmpty(true);
                          setConfirmNewPasswordError(false);
                          setConfirmNewPasswordValid(false);
                        }
                      }}
                      required
                      type={`${passWordVisability ? "text" : "password"}`}
                      placeholder={`${
                        lang === "Eng"
                          ? "Enter new password"
                          : "ادخل كلمة المرور الجديدة"
                      }`}
                      value={confirmNewPassword}
                      className="input input-password"
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                    />
                    {(confirmNewPasswordError || confirmNewPasswordEmpty) && (
                      <FaInfoCircle
                        className="position-absolute info-error text-danger top-50"
                        size={20}
                      />
                    )}
                  </div>
                  {passWordVisability ? (
                    <InputGroup.Text
                      id="inputGroupPrepend"
                      role="button"
                      onClick={() => setPassWordVisability(false)}
                    >
                      <FaEyeSlash />
                    </InputGroup.Text>
                  ) : (
                    <InputGroup.Text
                      id="inputGroupPrepend"
                      role="button"
                      onClick={() => setPassWordVisability(true)}
                    >
                      <FaEye />
                    </InputGroup.Text>
                  )}
                </InputGroup>
                {confirmNewPasswordError && (
                  <Form.Text className="text-danger">
                    Password confirmation doesn't match password.
                  </Form.Text>
                )}
                {confirmNewPasswordEmpty && (
                  <Form.Text className="text-danger">
                    This field is required.
                  </Form.Text>
                )}
              </Form.Group>
            )}
            <Button variant="primary" type="submit" className="w-100 mb-3 mt-1">
              {lang === "Eng" ? "Change Password" : "تغيير كلمة المرور"}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Password;
