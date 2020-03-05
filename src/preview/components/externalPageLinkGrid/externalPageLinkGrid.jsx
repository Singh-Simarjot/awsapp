import React, { Component } from "react";
import "./externalPageLinkGrid.scss";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
class ExternalPageLinkGrid extends Component {
  state = {};
  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        <h2 id ={data.id}>{data.title}</h2>
        <p>{data.description}</p>
        {/* <h3 className="mt-5 mb-3">Resources</h3> */}
        <Row>
          <Col lg={8} className="d-flex card-box-feature">
            {data.content.externalLink.map(tag => (
              <Link to={tag.url} target="_blank" key={tag.id}>
                <Card>
                  <Card.Body>
                    <Card.Text>{tag.label}</Card.Text>
                    <img src={tag.icon} alt={tag.label} />
                    {/* <i className={tag.iconpackage}></i>
                    <i className={tag.iconlink}></i> */}
                  </Card.Body>
                </Card>
              </Link>
            ))}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default ExternalPageLinkGrid;
