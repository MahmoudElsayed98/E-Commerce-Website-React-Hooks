import React, { useState } from "react";
import "./index.css";
import { Form, Button } from "react-bootstrap";

function Contact({ lang }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="contact py-4 position-relative">
      <div className="container d-flex flex-column align-items-center">
        <h1 className="fw-bold pt-4 pb-md-3 mb-0 text-center text-uppercase">
          {lang === "Eng" ? "Contact Us" : "تواصل معنا"}
        </h1>
        <Form onSubmit={handleSubmit} method="POST">
          <Form.Group
            className="mb-3 d-md-flex align-items-center justify-content-between"
            controlId="formControlName"
          >
            <Form.Label className="mb-0 text-center">
              {" "}
              {lang === "Eng" ? "Full Name" : "الاسم بالكامل"}
            </Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={`${
                lang === "Eng" ? "Enter Full Name" : "ادخل الاسم بالكامل"
              }`}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 d-md-flex align-items-center justify-content-between"
            controlId="formControlEmail"
          >
            <Form.Label className="mb-0 text-center">
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
            />
          </Form.Group>
          <Form.Group
            className="mb-3 d-md-flex justify-content-end align-items-center"
            controlId="formControlMessage"
          >
            <Form.Label className="mb-0 text-center ">
              {" "}
              {lang === "Eng" ? "Subject" : "الموضوع"}
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder={`${
                lang === "Eng" ? "Leave Your Message Here" : "اترك رسالتك هنا"
              }...`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className={`d-block ${
              lang === "Eng" ? "ms-md-auto" : "me-md-auto"
            }`}
          >
            {lang === "Eng" ? "Send Your Message" : "ارسل رسالتك"}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
