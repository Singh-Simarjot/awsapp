import React, { Component } from "react";
class ComponentsListItem extends Component {
  handleModal(item) {
    this.props.onModalChange(item, "new");
  }

  render() {
    return (
      <React.Fragment>
        <div
          className="componentItem"
          onClick={() => {
            this.handleModal(this.props.item);
          }}
        >
          <h5>
            <i className={this.props.item.icon + " fa"}></i>
            {this.props.item.label}
          </h5>
        </div>
      </React.Fragment>
    );
  }
}

export default ComponentsListItem;
