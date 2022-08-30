import React, { createContext, useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-input-2/lib/style.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import ProductsHeader from "./components/Products/ProductsHeader";
import Products from "./components/Products";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Contact from "./components/Contact";
import ProductDetails from "./components/Products/ProductDetails";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import ProductNotify from "./components/Products/ProductNotify";
import Checkout from "./components/Checkout";
import Wishlist from "./components/Wishlist";
import "./App.css";
import Compare from "./components/Compare";
import Account from "./components/Account";
import SignOut from "./components/SignOut";

export const CartProductsContext = createContext();
export const WishlistProductsContext = createContext();
export const CompareProductsContext = createContext();
export const ProductQuantityContext = createContext();
export const CartProductsTotalSalaryContext = createContext();
export const IsCartProductsChangedContext = createContext();
export const IsCompareProductsChangedContext = createContext();
// export const IsWishlistProductsChangedContext = createContext();
export const DeliveryCostContext = createContext();
export const ChangeLanguageContext = createContext();
export const LanguageContext = createContext();
export const RemoveProFromWishlistContext = createContext();
export const RemoveProFromComparisonContext = createContext();
export const CartProductsTotalNumberContext = createContext();

function App() {
  const [cartProductsTotalNumber, setCartProductsTotalNumber] = useState(0);
  const [lang, setLang] = useState(
    `${localStorage.getItem("lang") ? localStorage.getItem("lang") : "Eng"}`
  );
  const [wishlistProducts, setWishlistProducts] = useState(
    localStorage.getItem("wishlistProducts")
      ? JSON.parse(localStorage.getItem("wishlistProducts"))
      : []
  );
  const [cartProducts, setCartProducts] = useState(
    localStorage.getItem("cartProducts")
      ? JSON.parse(localStorage.getItem("cartProducts"))
      : []
  );
  const [compareProducts, setCompareProducts] = useState(
    localStorage.getItem("compareProducts")
      ? JSON.parse(localStorage.getItem("compareProducts"))
      : []
  );
  const [productQuantity, setProductQuantity] = useState(1);
  const [cartProductsTotalSalary, setCartProductsTotalSalary] = useState(0);
  // const [isCartProductsChanged, setIsCartProductsChanged] = useState(
  //   localStorage.getItem("isCartProductsChanged")
  //     ? localStorage.getItem("isCartProductsChanged")
  //     : false
  // );
  // const [isCompareProductsChanged, setIsCompareProductsChanged] = useState(
  //   localStorage.getItem("isCompareProductsChanged")
  //     ? localStorage.getItem("isCompareProductsChanged")
  //     : false
  // );
  // const [isWishlistProductsChanged, setIsWishlistProductsChanged] = useState(
  //   localStorage.getItem("isWishlistProductsChanged")
  //     ? localStorage.getItem("isWishlistProductsChanged")
  //     : false
  // );
  const websiteRef = useRef();
  const deliveryCost = 50;

  useEffect(() => {
    calculateCartProductsTotalPrice();
    calculateCartProductsTotalNumber();
  }, [cartProducts]);
  useEffect(() => {
    if (localStorage.getItem("lang") === "Ar") {
      websiteRef.current.style.direction = "rtl";
    } else {
      websiteRef.current.style.direction = "ltr";
    }
    // localStorage.clear();
  }, []);
  const calculateCartProductsTotalNumber = () => {
    if (cartProducts.length !== 0) {
      let cartProductsClone = [...cartProducts];
      const numberOfCartProducts = cartProductsClone
        .map((p) => {
          return p.qty ? p.qty : 1;
        })
        .reduce((cur, acc) => {
          return cur + acc;
        });
      console.log(numberOfCartProducts);
      setCartProductsTotalNumber(numberOfCartProducts);
    } else {
      setCartProductsTotalNumber(0);
    }
  };
  const calculateCartProductsTotalPrice = () => {
    let cartProductsClone = cartProducts;
    let totalSalary = cartProductsClone.reduce((acc, cur) => {
      return acc + cur.price;
    }, 0);
    setCartProductsTotalSalary(totalSalary);
  };
  const changeLanguage = (language) => {
    if (language === "Eng") {
      websiteRef.current.style.direction = "ltr";
      setLang("Eng");
      localStorage.setItem("lang", "Eng");
    } else {
      websiteRef.current.style.direction = "rtl";
      setLang("Ar");
      localStorage.setItem("lang", "Ar");
    }
  };
  const resetProductQuantity = () => {
    setProductQuantity(1);
  };
  const increaseProductQuantity = () => {
    setProductQuantity((prev) => prev + 1);
  };
  const decreaseProductQuantity = () => {
    if (productQuantity !== 1) {
      setProductQuantity((prev) => prev - 1);
    }
  };
  const addToComparison = (product) => {
    let compareProductsClone = [...compareProducts];
    console.log(compareProductsClone.length);
    let productClone = { ...product };
    if (compareProductsClone.length < 4) {
      compareProductsClone.push({ ...productClone });
    } else {
      let deletedPro = compareProductsClone.shift();
      localStorage.removeItem(`compareProduct${deletedPro.id}`);
      compareProductsClone.push(productClone);
    }
    setCompareProducts(compareProductsClone);
    localStorage.setItem(
      `compareProduct${product.id}`,
      JSON.stringify(productClone)
    );
    toast.success(
      <ProductNotify product={productClone} target="compare" goal="add" />,
      {
        position: `${lang === "Eng" ? "top-right" : "top-left"}`,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    // setIsCompareProductsChanged(true);
    // localStorage.setItem("isCompareProductsChanged", true);
    localStorage.setItem(
      "compareProducts",
      JSON.stringify(compareProductsClone)
    );
  };
  const addToWishlist = (product) => {
    const wishlistProductsClone = [...wishlistProducts];
    let productClone = { ...product };
    localStorage.setItem(
      `wishlistProduct${product.id}`,
      JSON.stringify(product)
    );
    wishlistProductsClone.push({ ...productClone });
    toast.success(
      <ProductNotify product={productClone} target="wishlist" goal="add" />,
      {
        position: `${lang === "Eng" ? "top-right" : "top-left"}`,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    setWishlistProducts(wishlistProductsClone);
    // setIsWishlistProductsChanged(true);
    // localStorage.setItem("isWishlistProductsChanged", true);
    localStorage.setItem(
      "wishlistProducts",
      JSON.stringify(wishlistProductsClone)
    );
  };
  const addToCart = (product) => {
    const cartProductsClone = [...cartProducts];
    let alreadyAdded = false;
    cartProductsClone.forEach((p) => {
      if (p.id === product.id) {
        alreadyAdded = true;
        p.qty += productQuantity;
        p.price = p.qty * product.price;
        toast.success(<ProductNotify product={p} target="cart" goal="add" />, {
          position: `${lang === "Eng" ? "top-right" : "top-left"}`,
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        calculateCartProductsTotalPrice();
        resetProductQuantity();
      }
    });
    if (alreadyAdded === false) {
      let productClone = { ...product };
      productClone.price *= productQuantity;
      cartProductsClone.push({ ...productClone, qty: productQuantity });
      setCartProductsTotalSalary(productClone.price);
      calculateCartProductsTotalPrice();
      resetProductQuantity();
      toast.success(
        <ProductNotify product={productClone} target="cart" goal="add" />,
        {
          position: `${lang === "Eng" ? "top-right" : "top-left"}`,
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
    setCartProducts(cartProductsClone);
    // setIsCartProductsChanged(true);
    // localStorage.setItem("isCartProductsChanged", true);
    localStorage.setItem("cartProducts", JSON.stringify(cartProductsClone));
  };
  const removeProductFromCart = (product) => {
    const cartProductsClone = cartProducts;
    const newCartProducts = cartProductsClone.filter(
      (p) => p.id !== product.id
    );
    const newCartProductsTotalSalary = cartProductsTotalSalary - product.price;
    setCartProducts(newCartProducts);
    calculateCartProductsTotalNumber();
    localStorage.setItem("cartProducts", JSON.stringify(newCartProducts));
    setCartProductsTotalSalary(newCartProductsTotalSalary);
    toast.success(
      <ProductNotify product={product} target="cart" goal={"remove"} />,
      {
        position: `${lang === "Eng" ? "top-right" : "top-left"}`,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    //if cartProducts is empty
    // if (cartProducts.length === 1) {
    //   setIsCartProductsChanged(false);
    //   localStorage.setItem("isCartProductsChanged", false);
    // }
  };
  const removeProductFromComparison = (product) => {
    const compareProductsClone = compareProducts;
    const newCompareProducts = compareProductsClone.filter(
      (p) => p.id !== product.id
    );
    localStorage.removeItem(`compareProduct${product.id}`);
    setCompareProducts(newCompareProducts);
    localStorage.setItem("compareProducts", JSON.stringify(newCompareProducts));
    toast.success(
      <ProductNotify product={product} target="compare" goal={"remove"} />,
      {
        position: `${lang === "Eng" ? "top-right" : "top-left"}`,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    //if compareProducts is empty
    // if (compareProducts.length === 1) {
    //   setIsCompareProductsChanged(false);
    //   localStorage.setItem("isCompareProductsChanged", false);
    // }
  };
  const removeProductFromWishlist = (product) => {
    const wishlistProductsClone = wishlistProducts;
    const newWishlistProducts = wishlistProductsClone.filter(
      (p) => p.id !== product.id
    );
    localStorage.removeItem(`wishlistProduct${product.id}`);
    setWishlistProducts(newWishlistProducts);
    localStorage.setItem(
      "wishlistProducts",
      JSON.stringify(newWishlistProducts)
    );
    toast.success(
      <ProductNotify product={product} target="wishlist" goal={"remove"} />,
      {
        position: `${lang === "Eng" ? "top-right" : "top-left"}`,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    //if wishlistProducts is empty
    // if (wishlistProducts.length === 1) {
    //   setIsWishlistProductsChanged(false);
    //   localStorage.setItem("isWishlistProductsChanged", false);
    // }
  };
  const handleCheckout = () => {
    setCartProducts([]);
    setCartProductsTotalSalary(0);
    // setIsCartProductsChanged(false);
    // setIsWishlistProductsChanged(false);
    localStorage.clear();
    // alert("Purchased Successfully");
  };
  return (
    <CartProductsContext.Provider value={cartProducts}>
      <CompareProductsContext.Provider value={compareProducts}>
        <ProductQuantityContext.Provider value={productQuantity}>
          <CartProductsTotalSalaryContext.Provider
            value={cartProductsTotalSalary}
          >
            {/* <IsCartProductsChangedContext.Provider
              value={isCartProductsChanged}
            > */}
            {/* <IsCompareProductsChangedContext.Provider
                value={isCompareProductsChanged}
              > */}
            <DeliveryCostContext.Provider value={deliveryCost}>
              <WishlistProductsContext.Provider value={wishlistProducts}>
                {/* <IsWishlistProductsChangedContext.Provider
                      value={isWishlistProductsChanged}
                    > */}
                <ChangeLanguageContext.Provider value={changeLanguage}>
                  <LanguageContext.Provider value={lang}>
                    <RemoveProFromWishlistContext.Provider
                      value={removeProductFromWishlist}
                    >
                      <RemoveProFromComparisonContext.Provider
                        value={removeProductFromComparison}
                      >
                        <CartProductsTotalNumberContext.Provider
                          value={cartProductsTotalNumber}
                        >
                          <div className="e-commerce-website" ref={websiteRef}>
                            <ToastContainer
                              position="top-right"
                              autoClose={2000}
                              hideProgressBar={false}
                              newestOnTop={false}
                              closeOnClick
                              rtl={false}
                              pauseOnFocusLoss
                              draggable
                              pauseOnHover
                            />
                            <Header
                              removeProductFromCart={removeProductFromCart}
                            />
                            <Routes>
                              <Route
                                path="/E-Commerce-Website-React-Hooks/"
                                element={<Home lang={lang} />}
                              />
                              <Route
                                path="/E-Commerce-Website-React-Hooks/cart"
                                element={
                                  <Cart
                                    removeProductFromCart={
                                      removeProductFromCart
                                    }
                                    deliveryCost={deliveryCost}
                                  />
                                }
                              />
                              <Route
                                path="/E-Commerce-Website-React-Hooks/products"
                                element={<ProductsHeader />}
                              >
                                <Route
                                  index
                                  element={
                                    <Products
                                      category=""
                                      skeletonCardsNo={20}
                                      addToCart={addToCart}
                                      addToWishlist={addToWishlist}
                                      addToComparison={addToComparison}
                                    />
                                  }
                                />
                                <Route
                                  path="men's%20clothing"
                                  element={
                                    <Products
                                      category={"category/men's clothing"}
                                      skeletonCardsNo={4}
                                      addToCart={addToCart}
                                      addToWishlist={addToWishlist}
                                      addToComparison={addToComparison}
                                    />
                                  }
                                />
                                <Route
                                  path="women's%20clothing"
                                  element={
                                    <Products
                                      category={"category/women's clothing"}
                                      skeletonCardsNo={6}
                                      addToCart={addToCart}
                                      addToWishlist={addToWishlist}
                                      addToComparison={addToComparison}
                                    />
                                  }
                                />
                                <Route
                                  path="jewelery"
                                  element={
                                    <Products
                                      category="category/jewelery"
                                      skeletonCardsNo={4}
                                      addToCart={addToCart}
                                      addToWishlist={addToWishlist}
                                      addToComparison={addToComparison}
                                    />
                                  }
                                />
                                <Route
                                  path="electronics"
                                  element={
                                    <Products
                                      category="category/electronics"
                                      skeletonCardsNo={6}
                                      addToCart={addToCart}
                                      addToWishlist={addToWishlist}
                                      addToComparison={addToComparison}
                                    />
                                  }
                                />
                                <Route
                                  path=":id"
                                  element={
                                    <ProductDetails
                                      addToCart={addToCart}
                                      addToComparison={addToComparison}
                                      addToWishlist={addToWishlist}
                                      cartProducts={cartProducts}
                                      productQuantity={productQuantity}
                                      removeProductFromComparison={
                                        removeProductFromComparison
                                      }
                                      removeProductFromWishlist={
                                        removeProductFromWishlist
                                      }
                                      resetProductQuantity={
                                        resetProductQuantity
                                      }
                                      increaseProductQuantity={
                                        increaseProductQuantity
                                      }
                                      decreaseProductQuantity={
                                        decreaseProductQuantity
                                      }
                                    />
                                  }
                                />
                              </Route>
                              <Route
                                path="/E-Commerce-Website-React-Hooks/about"
                                element={<About lang={lang} />}
                              />
                              <Route
                                path="/E-Commerce-Website-React-Hooks/contact"
                                element={<Contact lang={lang} />}
                              />
                              <Route
                                path="/E-Commerce-Website-React-Hooks/sign-in"
                                element={<SignIn lang={lang} />}
                              />
                              <Route
                                path="/E-Commerce-Website-React-Hooks/sign-out"
                                element={<SignOut lang={lang} />}
                              />
                              <Route
                                path="/E-Commerce-Website-React-Hooks/register"
                                element={<Register lang={lang} />}
                              />
                              <Route
                                path="/E-Commerce-Website-React-Hooks/wishlist"
                                element={
                                  <Wishlist
                                    removeProductFromWishlist={
                                      removeProductFromWishlist
                                    }
                                  />
                                }
                              />
                              <Route
                                path="/E-Commerce-Website-React-Hooks/compare"
                                element={
                                  <Compare
                                    removeProductFromComparison={
                                      removeProductFromComparison
                                    }
                                    addToCart={addToCart}
                                  />
                                }
                              />
                              <Route
                                path="/E-Commerce-Website-React-Hooks/account/"
                                element={<Account />}
                              />
                              <Route
                                path="/E-Commerce-Website-React-Hooks/checkout"
                                element={
                                  <Checkout
                                    cartProductsTotalSalary={
                                      cartProductsTotalSalary
                                    }
                                    deliveryCost={deliveryCost}
                                    cartProducts={cartProducts}
                                    handleCheckout={handleCheckout}
                                  />
                                }
                              />
                              <Route
                                path="*"
                                element={
                                  // <Navigate
                                  //   to="/E-Commerce-Website-React-Hooks/"
                                  // />
                                  <NotFound />
                                }
                              />
                            </Routes>
                            <Footer lang={lang} />
                          </div>
                        </CartProductsTotalNumberContext.Provider>
                      </RemoveProFromComparisonContext.Provider>
                    </RemoveProFromWishlistContext.Provider>
                  </LanguageContext.Provider>
                </ChangeLanguageContext.Provider>
                {/* </IsWishlistProductsChangedContext.Provider> */}
              </WishlistProductsContext.Provider>
            </DeliveryCostContext.Provider>
            {/* </IsCompareProductsChangedContext.Provider> */}
            {/* </IsCartProductsChangedContext.Provider> */}
          </CartProductsTotalSalaryContext.Provider>
        </ProductQuantityContext.Provider>
      </CompareProductsContext.Provider>
    </CartProductsContext.Provider>
  );
}

export default App;
