import React from "react";
import { SidebarData } from "../data/SidebarData";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <React.Fragment>
      <section>
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar-main-content">
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