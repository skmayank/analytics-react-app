import React from "react";
import { SidebarData } from "../data/SidebarData";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  
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
                  <Link
                    to={item.path}
                    className={`nav-link text-white text-base-sm ${item.path === location?.pathname && "active"}`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </Link>
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
