import React from "react";
import MainHeader from "../Header/MainHeader";
import UpperHeader from "./UpperHeader";
function Header({ removeProductFromCart }) {
  return (
    <header>
      <UpperHeader />
      <MainHeader removeProductFromCart={removeProductFromCart} />
    </header>
  );
}

export default Header;
