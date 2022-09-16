import React from "react";
import AppRoute from "./AppRoute";
import Sidebar from "./Sidebar";

const MainPage = () => {
  return (
    <>
      {/* sidebar section */}
      <section className="d-flex">
        <Sidebar />
        <AppRoute />
      </section>
    </>
  );
};

export default MainPage;
