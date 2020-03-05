import React, { Component } from "react";

class InternalNav extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const page = this.props.data;
    const interNav = page.filter(function(nav) {
      return nav.internalNavigation === true;
    });
    return (
      <div class="content-block">
        <ul className="page-navigation">
          {interNav.map(function(nav) {
            return (
              <li>
                {" "}
                <a href={"#" + nav.id}> {nav.title} </a>{" "}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default InternalNav;
