import React, { Component } from "react";
import "./componentsList.scss";
// import ComponentsListItem from "./componentsListItem";
import { Row, Col, Button, Form } from "react-bootstrap";
import ProjectsContext from "../context/projectsContext";

// import $ from "jquery";
class NavigationList extends Component {
  static contextType = ProjectsContext;
  renderBtnStatus = () => {
    const { customItem } = this.props;
    return customItem.title === "" || customItem.url === "" ? true : false;
  };

  render() {
    const { pages, customItem } = this.props;

    const navPages =
      pages !== undefined &&
      pages.filter(items => {
        return items.saved === 1;
      });

    return (
      <div className="componentsList">
        <Row>
          <Col>
            <h2>Pages List </h2>
          </Col>
          <Col xs={4} className="text-right componentsListBtn">
            <Button variant="light" size="sm">
              <i className="fa fa-bars"></i>
            </Button>
          </Col>
        </Row>
        <div className="componentsListItms">
          <div className="navigationList">
            <ul>
              {navPages.map((menuPage, i) => (
                <li key={i}>
                  {" "}
                  {menuPage.title}{" "}
                  <i
                    onClick={() => this.props.addToNavigation(menuPage)}
                    className="fa fa-plus"
                  ></i>
                </li>
              ))}
            </ul>
          </div>
          {/* customLickCreate */}
          <div className="customLinkCreate">
            <h2>Add Custom Link</h2>
            <Row noGutters>
              <Col>
                <Form.Group className="pr-2">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    name="title"
                    value={customItem.title}
                    onChange={e => this.props.onChangeField(e)}
                    size={"sm"}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="pl-2">
                  <Form.Label>URL</Form.Label>
                  <Form.Control
                    name="url"
                    value={customItem.url}
                    size={"sm"}
                    onChange={e => this.props.onChangeField(e)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="text-right">
              <Button
                onClick={() => this.props.onCustomItem()}
                size={"sm"}
                variant="success"
                disabled={this.renderBtnStatus()}
              >
                Add Menu
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationList;
