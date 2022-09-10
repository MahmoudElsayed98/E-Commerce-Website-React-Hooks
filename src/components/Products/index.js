import axios from "axios";
import "react-loading-skeleton/dist/skeleton.css";
import React, { useEffect, useState } from "react";
import "./index.css";
// import Loading from "./Loading";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

function Products({
  skeletonCardsNo,
  addToCart,
  addToWishlist,
  addToComparison,
  category,
}) {
  // const [mounted, setMounted] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [productsLoading, setProductsLoading] = useState(false);
  // const enableLoading = () => {
  //   if (productsLoading === true) {
  //     setProductsLoading(false);
  //   }
  // };
  useEffect(() => {
    // enableLoading();
    if (productsLoading === true) {
      setProductsLoading(false);
    }
    axios
      .get(`https://fake-e-commerce-api.onrender.com/product${category}`)
      .then((res) => {
        // if (mounted) {
        setProducts(res.data);
        setProductsLoading(true);
        // }
      })
      .catch((err) => {
        setError(err);
      });
    // return () => {
    //   setMounted(false);
    // };
  }, [category]);
  // const fetchApiData = () => {

  // };
  return (
    <>
      <div className="products position-relative">
        <div className="container">
          <div className="content d-flex w-100 flex-wrap justify-content-center justify-content-md-start">
            {productsLoading ? (
              products.map((p) => {
                return (
                  <ProductCard
                    product={p}
                    key={p._id}
                    addToCart={addToCart}
                    addToWishlist={addToWishlist}
                    addToComparison={addToComparison}
                  />
                );
              })
            ) : (
              // <Loading />
              <ProductCardSkeleton skeletonCardsNo={skeletonCardsNo} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
