import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

import "./tab.scss";
import { NavLink } from "react-router-dom";

import ProjectsContext from "../../../context/projectsContext";

class Tabs extends Component {
  static contextType = ProjectsContext;
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderUrl(string) {
    return string
      .split(" ")
      .join("-")
      .toLowerCase();
  }
  render() {
    const { tabsList ,onSelectSubPage } = this.props;
    
    
 
     return (
      <section className="tabing-section">
        <Container>
          
          <Nav
           
          >
            {tabsList.length>0 ? tabsList.map(item => (
              <Nav.Item key={item.id}>
                {/* <Nav.Link href={item.url}>{item.title}</Nav.Link> */}
                <NavLink
                  to={this.renderUrl(item.title)}
                  onClick={() => {
                    onSelectSubPage(item.id);
                  }}
                >
                  {item.title}
                </NavLink>
              </Nav.Item>
            )) :   "Please Add A tab" }
          </Nav>
        </Container>
      </section>
    );
  }
}

export default Tabs;
