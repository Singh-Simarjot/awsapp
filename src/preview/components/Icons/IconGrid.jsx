import React, { Component } from "react";
import Icon from "./Icon";

class IconGrid extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {  }
  // }
  render() {
    const { data } = this.props;
    console.log("data", data);
    return (
      <div className="icon-grid"  id ={data.id}>
        <h3 className="ml-0">{data.title}</h3>
        <p>{data.description}</p>
        <div className="icon-list">
          {data.content.icons.map(item => (
            <Icon key={item.id} iconName={item.name} iconShow={item.url} />
          ))}
          {/* <Icon iconName="Add" iconShow="fa fa-plus" />
          <Icon iconName="Add alt" iconShow="fa fa-plus-circle" />
          <Icon iconName="Edit" iconShow="fa fa-pencil" />
          <Icon iconName="Sort Descending" iconShow="fa fa-sort-desc" />
          <Icon iconName="Sort Ascending" iconShow="fa fa-sort-asc" />
          <Icon iconName="Refresh" iconShow="fa fa-refresh" />
          <Icon iconName="Recycle" iconShow="fa fa-recycle" />
          <Icon iconName="Add Image" iconShow="fa fa-picture-o" />
          <Icon iconName="History" iconShow="fa fa-history" />
          <Icon iconName="Menu Bar" iconShow="fa fa-bars" />
          <Icon iconName="Direction Arrow" iconShow="fa fa-arrows" />
          <Icon iconName="Check" iconShow="fa fa-check-circle-o" />
          <Icon iconName="Eye" iconShow="fa fa-eye" /> */}
        </div>
      </div>
    );
  }
}

export default IconGrid;
