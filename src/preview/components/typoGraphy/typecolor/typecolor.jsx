import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
class TypeColor extends Component {
  state = {};
  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        <div className="mt-5">
          <div className="content-block">
            <h2>Type color</h2>
            <p>
              Type color should be carefully considered, with legibility and
              accessibility as paramount concerns. Keep type color neutral in
              running text. Use primary blue for primary actions.
            </p>
          </div>
        </div>
        <Row>
          <Col lg={8}>
            <div className="color-section">
              <ul>
                {data.map(item => (
                  <div key={item.id}>
                    <li
                      className="bdr-green"
                      style={{ color: item.color, borderColor: item.color }}
                    >
                      <i
                        className="fa fa-check-circle"
                        style={{ color: item.color }}
                      ></i>
                      Neutral color for text
                    </li>
                  </div>
                ))}
                {/* <div>
                  <li className="bdr-green">
                    <i className="fa fa-check-circle"></i>Neutral color for text
                  </li>
                </div>
                <div>
                  <li className="bdr-pink">
                    <i className="fa fa-times-circle"></i>Neutral color for text
                  </li>
                </div>
                <div>
                  <li className="bdr-green bg-dark-custom">
                    <i className="fa fa-check-circle"></i>Neutral color for text
                  </li>
                </div>
                <div>
                  <li className="bdr-pink bg-dark-custom-text">
                    <i className="fa fa-check-circle"></i>Neutral color for text
                  </li>
                </div>
                <div>
                  <li className="bdr-green">
                    <i className="fa fa-check-circle"></i>
                    <Link>Link</Link>
                    <i className="fa fa-long-arrow-right arrow"></i>
                  </li>
                  <p>
                    Core blue colors are used for text links and primary actions
                  </p>
                </div>
                <div>
                  <li className="bdr-pink">
                    <i className="fa fa-times-circle"></i>Download{" "}
                    <i className="fa fa-download download"></i>
                  </li>
                  <p>Secondary actions use Gray 100 and icons</p>
                </div> */}
              </ul>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default TypeColor;
