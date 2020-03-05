import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ProjectsContext from "../../../context/projectsContext";

import $ from "jquery";

import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  componentDidMount() {
    $(".home-sidebar .list-group-item h5").on("click", function() {
      if (
        $(this)
          .parent(".list-group-item")
          .hasClass("active")
      ) {
        $(this)
          .parent()
          .removeClass("active");
      } else {
        $(".home-sidebar .list-group-item").removeClass("active");
        $(this)
          .parent()
          .addClass("active");
      }
    });
  }
  static contextType = ProjectsContext;

  renderUrl(item, parent, tab) {
    let parentUrl;
    let tabUrl;
    if (parent !== null) {
      parentUrl ="/"+ this.coovertToSring(parent.title);
    } else {
      parentUrl = "";
    }
    if (tab !== null) {
      tabUrl =  "/" + this.coovertToSring(tab.title) ;
    } else {
      tabUrl = "";
    }
    return "/home" + parentUrl + "/" +this.coovertToSring(item) + tabUrl;
  }
  coovertToSring(string) {
   
    return string
      .split(" ")
      .join("-")
      .toLowerCase();
  }
  renderNavLink(item, parent) {
    const { selectedProject, onSelectPage } = this.props;
    let url = "";

    if (item.templateType == "TABS") {
      const pages = selectedProject.pages.filter(page => page.id === item.id);
      const tab = pages[0].data.tabs[0];
      return (
        <NavLink
          to={this.renderUrl(item.title, parent, tab)}
          exact
          onClick={() => {
            onSelectPage(item);
          }}
        >
          {item.title}
        </NavLink>
      );
    } 
    else if(item.templateType == "CUSTOM"){
      {
         return (<a href ={item.url} target="_blank"> {item.title} </a> )
      }
    }
    else {
      return (
        <NavLink
          to={this.renderUrl(item.title, parent, null)}
          exact
          onClick={() => {
            onSelectPage(item);
          }}
        >
          {item.title}
        </NavLink>
      );
    }
  }

  render() {
    const { selectedProject, onSelectPage } = this.props;
    return (
      <div className="home-sidebar">
        {selectedProject.navigation !== null &&
          selectedProject.navigation.length > 0 && (
            <ListGroup className="nav-list">
              <ListGroup.Item>
                <NavLink to={"/"}>
                  <h5>Home</h5>
                </NavLink>
              </ListGroup.Item>
              {selectedProject.navigation.map(item => (
                <ListGroup.Item key={item.id}>
                  <h5>
                    {item.children !== undefined && item.children.length > 0
                      ? item.title
                      : this.renderNavLink(item, null)}
                    {item.children !== undefined && item.children.length > 0 && (
                      <span>
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </span>
                    )}
                  </h5>
                  {item.children !== undefined && item.children.length > 0 && (
                    <ListGroup className="nav-sub-list">
                      {item.children.map(childItem => (
                        <ListGroup.Item key={childItem.id}>
                          {this.renderNavLink(childItem, item)}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  )}
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
      </div>
    );
  }
}

export default Sidebar;
