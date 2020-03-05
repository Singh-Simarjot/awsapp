import React, { Component } from "react";
import "./icon.scss";

class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="px-ratio">
        <div className="grid-block">
          <h6 className="icon-name">{this.props.iconName}</h6>
          <div className="icon-preview">
            <span>
              {/* <i className={this.props.iconShow} aria-hidden="true"></i> */}
              <img src={this.props.iconShow} alt="icon" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Icon;
