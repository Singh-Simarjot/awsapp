import React, { Component } from "react";
import "./multipleImageBlock.scss";
import { Image } from "react-bootstrap";
class MultipleImageBlock extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="multipleImageBlock"  id ={data.id}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <div className="multipleImageBlockGrid">
          <div className="multipleImageBlockRow">
            {data.content.images &&
              data.content.images.map(item => (
                <div className="multipleImageBlockImg" key={item.id}>
                  <Image src={item.url} fluid />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MultipleImageBlock;
