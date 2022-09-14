import React from "react";
import { SidebarData } from "../data/SidebarData";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <React.Fragment>
      <section>
        <div
          className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: "280px", height: "100vh" }}>
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" >
            <span className="fs-4">Sidebar</span>
          </a>

          <hr />

          <ul className="nav nav-pills flex-column mb-auto">
            {SidebarData.map((item, index) => {
              return (
                <li className="nav-item" key={index}> 
                  <NavLink to={item.path} className="nav-link " aria-current="page">
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </NavLink>
                </li>
           
              );
            })}
          </ul>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Sidebar;
