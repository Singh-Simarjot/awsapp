import React, { Component } from "react";
import "./PageHeader.scss";
import { Container } from "react-bootstrap";
class PageHeader extends Component {
  state = {};
  render() {
    return (
      <section className="pageHeaderComp">
        <Container>
          <h1>{this.props.pageTitel}</h1>
        </Container>
      </section>
    );
  }
}

export default PageHeader;
