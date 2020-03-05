import React, { Component } from "react";
import "./imageBlock.scss";
import Image from "react-bootstrap/Image";
class ImageBlock extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="ImageBlock"  id ={data.id}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <div>
          {data.content.image && (
            <div className="ImageBlockImg">
              <Image src={data.content.image} fluid />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ImageBlock;
