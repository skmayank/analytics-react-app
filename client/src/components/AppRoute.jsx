import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { Inventory } from "../pages/Inventory";
import RetailerFullProduct from "../pages/RetailerFullProduct";

const AppRoute = () => {
  return (
    <React.Fragment>
      <section className="main__contain">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/inventory" element={<Inventory />} />
          <Route
            exact
            path="/retailer-full-product"
            element={<RetailerFullProduct />}
          />
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default AppRoute;
