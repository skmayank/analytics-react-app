import React from "react";
import Header from "./Header";
import AppRoute from "./AppRoute";
import Sidebar from "./Sidebar";

const MainPage = () => {
  return (
    <React.Fragment>
      <section>
          <Header />
      </section>

      {/* sidebar section */}
      <section className="d-flex">
        <Sidebar />
        <AppRoute />
      </section>
    </React.Fragment>
  );
};

export default MainPage;
