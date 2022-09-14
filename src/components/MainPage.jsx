import React from "react";
import Header from "./Header";
import Route from "./Route";
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
        <Route />
      </section>
    </React.Fragment>
  );
};

export default MainPage;
