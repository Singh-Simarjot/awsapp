import React, { Component } from "react";
import "./sidebarNav.scss";
import { NavLink } from "react-router-dom";
class SidebarNav extends Component {
  state = {};
  render() {
    return (
      <div className="sidebarNav">
        <ul className="sidebarNavList">
          <li>
            <h4>Pages</h4>
            <ul>
              <li>
                <NavLink exact to="/project">Pages</NavLink>
              </li>
              <li>
                <NavLink to="/project/addnew">Create New Page</NavLink>
              </li>
              {/* <li>
                <NavLink to="/project/drafts">Drafts</NavLink>
              </li> */}
            </ul>
          </li>
          <li>
            <h4>Navigation</h4>
            <ul>
              <li>
                {" "}
                <NavLink to="/project/navigation">Create Navigation</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default SidebarNav;
