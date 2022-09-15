import React from "react";
import { SidebarData } from "../data/SidebarData";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <React.Fragment>
      <section>
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar-main-content">
          <div className="w-full flex items-center pl-10 space-x-4">
            <div className="border-1 border-slate-200 mb-4 border-bottom-custom">
              <p className="text-white text-8xl m-0 pb-3">My App</p>
            </div>
          </div>
          <ul className="nav nav-pills flex-column mb-auto">
            {SidebarData.map((item, index) => {
              return (
                <li className="nav-item mb-2" key={index}>
                  <NavLink
                    to={item.path}
                    className="nav-link text-white text-base-sm"
                  >
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
