import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Inventory from "../pages/Inventory";
import RetailerFullProduct from "../pages/RetailerFullProduct";
import kegAvailability from "../pages/kegAvailability";
import ProductAvailability from "../pages/ProductAvailability";

const Route = () => {
  return (
    <React.Fragment>
      <section className="main__contain">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route
            path="/retailer-full-product"
            element={<RetailerFullProduct />}
          />
          <Route path="/keg-availability" element={<kegAvailability />} />
          <Route
            path="/product-availability"
            element={<ProductAvailability />}
          />
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default Route;
