import React, { Component } from "react";
import "./componentsList.scss";
import ComponentsListItem from "./componentsListItem";
// import ContentItem from "../containers/content/contentItem";
import { Row, Col, Button } from "react-bootstrap";
import WidgetsContext from "../context/widgetsContext";

import $ from "jquery";
class ComponentsList extends Component {
  static contextType = WidgetsContext;
  componentDidMount() {
    $(".componentsListBtn button").on("click", function() {
      $(".componentsListItms").toggleClass("componentsListItmsOpen");
    });
  }

  render() {
    const { options } = this.context;
    return (
      <div className="componentsList">
        <Row>
          <Col>
            <h2>Components List</h2>
          </Col>
          <Col xs={4} className="text-right componentsListBtn">
            <Button variant="light" size="sm">
              <i className="fa fa-bars"></i>
            </Button>
          </Col>
        </Row>
        <div className="componentsListItms">
          {options.map(item => (
            <ComponentsListItem
              key={item.id}
              onModalChange={this.props.onModalChange}
              icon={item.icon + " fa"}
              item={item}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ComponentsList;
