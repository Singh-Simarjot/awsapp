import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class DeveloperResource extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Col md={4}>
        <div className="bx-ratio">
        <a href={this.props.linktext} target="_blank" >
          <div className="box-wrap">

            <h6>{this.props.title}</h6>

            <div className="bottom-wrap ">
              <div className="left-icon">
                <img src={this.props.icon} alt="icon" />

                {/* <svg
                  focusable="false"
                  fill="#f4f4f4"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  className="MdxIcon-module--mdx-icon--3p_4x MdxIcon-module--icon-inverse--q6_WJ"
                >
                  <path
                    fillRule="evenodd"
                    d="M16,2a14,14,0,0,0-4.43,27.28c.7.13,1-.3,1-.67s0-1.21,0-2.38c-3.89.84-4.71-1.88-4.71-1.88A3.71,3.71,0,0,0,6.24,22.3c-1.27-.86.1-.85.1-.85A2.94,2.94,0,0,1,8.48,22.9a3,3,0,0,0,4.08,1.16,2.93,2.93,0,0,1,.88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4,5.4,0,0,1,1.44-3.76,5,5,0,0,1,.14-3.7s1.17-.38,3.85,1.43a13.3,13.3,0,0,1,7,0c2.67-1.81,3.84-1.43,3.84-1.43a5,5,0,0,1,.14,3.7,5.4,5.4,0,0,1,1.44,3.76c0,5.38-3.27,6.56-6.39,6.91a3.33,3.33,0,0,1,.95,2.59c0,1.87,0,3.38,0,3.84s.25.81,1,.67A14,14,0,0,0,16,2Z"
                  ></path>
                </svg> */}
              </div>

              <div className="right-icon">
                <svg
                  focusable="false"
                  fill="#f4f4f4"
                  preserveAspectRatio="xMidYMid meet"
                  aria-label="Open resource"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                  role="img"
                >
                  <path d="M26,28H6a2,2,0,0,1-2-2V6A2,2,0,0,1,6,4h9V6H6V26H26V17h2v9A2,2,0,0,1,26,28Z"></path>
                  <path d="M21 2L21 4 26.59 4 18 12.59 19.41 14 28 5.41 28 11 30 11 30 2 21 2z"></path>
                </svg>
              </div>
            </div>
            
          </div>
          </a>
        </div>
      </Col>
    );
  }
}

export default DeveloperResource;
