import React, { Component } from "react";
import "./html.scss";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
class Html extends Component {
  state = {};
  render() {
    const { data } = this.props;
    return (
      <div className="htmlPreview"  id ={data.id}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        {ReactHtmlParser(data.content.code)}
      </div>
    );
  }
}

export default Html;
