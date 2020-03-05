import React, { Component } from "react";
import "./videoBlock.scss";
class VideoBlock extends Component {
  state = {};
  render() {
    const { data } = this.props;
    return (
      <div className="videoBlock"  id ={data.id}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        {data.content.videoType === "URL" ? (
          <iframe src={data.content.video}></iframe>
        ) : (
          <video controls src={data.content.video}></video>
        )}
      </div>
    );
  }
}

export default VideoBlock;
