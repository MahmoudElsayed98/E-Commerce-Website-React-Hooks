import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import CountriesAR from "./CountriesAR";
import { LanguageContext } from "../../App";
import { CountryDropdown } from "react-country-region-selector";
import PhoneInput from "react-phone-input-2";
import "./index.css";

function Checkout({
  deliveryCost,
  cartProductsTotalSalary,
  handleCheckout,
  cartProducts,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");

  const lang = useContext(LanguageContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setCountry("");
    setAddress("");
    setCardNumber("");
    setExpirationDate("");
    setZipCode("");
    setPhone("");
  };
  return (
    <div className="checkout py-4 position-relative">
      <div className="container d-flex flex-column align-items-center">
        <h1 className="fw-bold pt-4 pb-md-3 mb-md-0 mb-1 text-center text-uppercase">
          {lang === "Eng" ? "Checkout" : "الدفع"}
        </h1>
        <Form
          id="checkout-form"
          onSubmit={handleSubmit}
          method="POST"
          className="row"
        >
          <div className="col-lg-6">
            <Form.Group
              className="mb-3 d-md-flex align-items-center justify-content-center justify-content-lg-between"
              controlId="formCheckoutName"
            >
              <Form.Label className="mb-md-0 mb-1 text-center">
                {lang === "Eng" ? "Name" : "الإسم"}
              </Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={`${
                  lang === "Eng" ? "Enter Full Name" : "ادخل الإسم بالكامل"
                }`}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 d-md-flex align-items-center justify-content-center justify-content-lg-between"
              controlId="formCheckoutEmail"
            >
              <Form.Label className="mb-md-0 mb-1 text-center">
                {lang === "Eng" ? "Email Address" : "البريد الإلكترونى"}
              </Form.Label>
              <Form.Control
                type="email"
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
            <Form.Group
              className="mb-3 d-md-flex align-items-center justify-content-center justify-content-lg-between"
              controlId="formCheckoutAddress"
            >
              <Form.Label className="mb-md-0 mb-1 text-center">
                {lang === "Eng" ? "Address" : "العنوان"}
              </Form.Label>
              <Form.Control
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder={`${
                  lang === "Eng" ? "Enter Street Address" : "ادخل عنوانك   "
                }`}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 d-md-flex align-items-center justify-content-center justify-content-lg-between"
              controlId="formCheckoutZipCode"
            >
              <Form.Label className="mb-md-0 mb-1 text-center">
                {lang === "Eng" ? "Zip Code" : "الرمز البريدى"}
              </Form.Label>
              <Form.Control
                type="Zip Code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="xxxxx"
              />
            </Form.Group>
          </div>

          <div className="col-lg-6">
            <Form.Group
              className="mb-3 d-md-flex align-items-center justify-content-center justify-content-lg-between"
              // controlId="formCheckoutCountry"
            >
              <Form.Label className="mb-md-0 mb-1 text-center">
                {lang === "Eng" ? "Country*" : "البلد"}
              </Form.Label>
              {lang === "Eng" ? (
                <CountryDropdown
                  className="rounded"
                  name="country"
                  blacklist={["IL", "CX"]}
                  value={country}
                  onChange={(country) => setCountry(country)}
                />
              ) : (
                <select
                  // id="formCheckoutCountry"
                  className="rounded"
                  name="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <CountriesAR />
                </select>
              )}
            </Form.Group>
            {lang === "Eng" ? (
              <Form.Group
                className="mb-3 d-md-flex align-items-center justify-content-center justify-content-lg-between"
                controlId="formCheckoutExpirationDate"
              >
                <Form.Label className="mb-md-0 mb-1 text-center">
                  {lang === "Eng" ? "Phone Number" : "رقم الهاتف "}
                </Form.Label>
                <PhoneInput
                  country={"eg"}
                  value={phone}
                  excludeCountries={["il", "cx"]}
                  onChange={(phone) => setPhone(phone)}
                />
              </Form.Group>
            ) : (
              <Form.Group
                className="mb-3 d-md-flex align-items-center justify-content-center justify-content-lg-between"
                controlId="formCheckoutExpirationDate"
              >
                <Form.Label className="mb-md-0 mb-1 text-center">
                  {lang === "Eng" ? "Phone Number" : "رقم الهاتف "}
                </Form.Label>
                <Form.Control
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="ادخل رقم الهاتف"
                />
              </Form.Group>
            )}
            <Form.Group
              className="mb-3 d-md-flex align-items-center justify-content-center justify-content-lg-between"
              controlId="formCheckoutCreditCardNumber"
            >
              <Form.Label className="mb-md-0 mb-1 text-center">
                {lang === "Eng" ? "Credit Card Number" : "رقم بطاقة الائتمان"}
              </Form.Label>
              <Form.Control
                type="tel"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="xxxx xxxx xxxx xxxx"
              />
            </Form.Group>
            <Form.Group
              className="mb-3 d-md-flex align-items-center justify-content-center justify-content-lg-between"
              controlId="formCheckoutExpirationDate"
            >
              <Form.Label className="mb-md-0 mb-1 text-center">
                {lang === "Eng" ? "Expiration Date" : "تاريخ إنتهاء الصلاحية"}
              </Form.Label>
              <Form.Control
                type="date"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
              />
            </Form.Group>
          </div>
          <Button
            variant="primary"
            type="submit"
            className=" d-block mx-auto text-center"
            onClick={() => handleCheckout()}
          >
            {lang === "Eng" ? "PURCHASE" : "شراء"}
            {cartProducts.length !== 0
              ? " $" + (cartProductsTotalSalary + deliveryCost).toFixed(2)
              : ""}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Checkout;
