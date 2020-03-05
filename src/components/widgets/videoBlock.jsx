import React, { Component } from "react";
import "./widgets.scss";
import { Form, Modal, Button } from "react-bootstrap";
import nextId from "react-id-generator";
// import FigureImage from "react-bootstrap/FigureImage";
import FileBase64 from "react-file-base64";
import { uploadFile } from "../../services/projects";

class VideoBlock extends Component {
  state = {
    widget: {
      id: "",
      icon: "fa-video-camera",
      type: "VIDEO_BLOCK",
      label: "Video Block",
      title: "",
      description: "",
      internalNavigation: false,
      content: {
        videoType: "INTERNAL_STORAGE",
        video: ""
      }
    }
  };
  componentDidMount() {
    const modalOpenType = this.props.modalOpenType;
    if (modalOpenType === "edit") {
      const content = this.props.data;
      this.setState({ widget: content });
    }
  }
  internalNavigation = e => {
    const widget = { ...this.state.widget };
    widget.internalNavigation = !this.state.widget.internalNavigation;
    this.setState({ widget });
  };
  titleInput = e => {
    const widget = this.state.widget;
    widget.title = e.target.value;
    this.setState({ widget });
  };
  descriptionInput = e => {
    const widget = this.state.widget;
    widget.description = e.target.value;
    this.setState({ widget });
  };
  videoType = e => {
    const widget = this.state.widget;
    widget.content.video = "";
    widget.content.videoType = e.target.value;
    this.setState({ widget });
  };
  addVideo = e => {
    const widget = this.state.widget;
    widget.content.video = e.target.value;
    this.setState({ widget });
  };
  disabledSave() {
    const widget = this.state.widget;
    return widget.title === "" ||
      widget.description === "" ||
      widget.content.video === ""
      ? true
      : false;
  }
  onSaveContent = () => {
    let dummyid;
    const widget = { ...this.state.widget };

    if (this.props.modalOpenType === "edit") {
      dummyid = widget.id;
    } else {
      //dummyid = nextId();
      dummyid = "_" + Math.random().toString(36).substr(2, 9);
    }
    widget.id = dummyid;
    this.setState({ widget });
    this.props.onSaveComponent(widget);
  };
  getVideo = async files => {
    const widget = this.state.widget;
    const video = [files];
    try {
      await uploadFile(JSON.stringify(video)).then(response => {
        if (response.status === 200) {
          const data = response.data;
          if (data.status) {
            widget.content.video = data.file.toString();
            this.setState({ widget });
          }
        }
      });
    } catch (err) {}
  };
  removeWidgetVideo = () => {
    const widget = this.state.widget;
    widget.content.video = "";
    this.setState({ widget });
  };
  render() {
    const { onModalChange } = this.props;
    const { widget } = this.state;
    return (
      <>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={widget.title}
              onChange={e => this.titleInput(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={widget.description}
              onChange={e => this.descriptionInput(e)}
              as="textarea"
              rows="2"
            />
          </Form.Group>
          <div className="widgetsDiv">
            <Form.Group>
              <Form.Label>Select Video Type</Form.Label>
              <Form.Control as="select" onChange={e => this.videoType(e)}>
                <option
                  selected={
                    widget.content.videoType === "INTERNAL_STORAGE"
                      ? true
                      : false
                  }
                  value="INTERNAL_STORAGE"
                >
                  Internal Storage
                </option>
                <option
                  value="URL"
                  selected={widget.content.videoType === "URL" ? true : false}
                >
                  URL
                </option>
              </Form.Control>
            </Form.Group>
            {this.state.widget.content.videoType === "URL" && (
              <Form.Group>
                <Form.Label>Video Url</Form.Label>
                {widget.content.video ? (
                  <div
                    className="imageOverRemove"
                    style={{ marginBottom: "15px" }}
                  >
                    <iframe src={widget.content.video} frameborder="0"></iframe>
                    <Button
                      variant={"danger"}
                      size="sm"
                      onClick={this.removeWidgetVideo}
                    >
                      <i className="fa fa-times"></i>
                    </Button>
                  </div>
                ) : (
                  <div style={{ marginBottom: "15px" }}>
                    <Form.Control
                      value={widget.content.video}
                      onChange={e => this.addVideo(e)}
                    />
                  </div>
                )}
              </Form.Group>
            )}
            {this.state.widget.content.videoType === "INTERNAL_STORAGE" && (
              <Form.Group>
                <Form.Label>Add Video</Form.Label>
                {widget.content.video ? (
                  <div
                    className="imageOverRemove"
                    style={{ marginBottom: "15px" }}
                  >
                    <video controls src={widget.content.video}></video>

                    <Button
                      variant={"danger"}
                      size="sm"
                      onClick={this.removeVideo}
                    >
                      <i className="fa fa-times"></i>
                    </Button>
                  </div>
                ) : (
                  <div style={{ marginBottom: "15px" }}>
                    <FileBase64 onDone={this.getVideo.bind(this)} />
                  </div>
                )}
                {/* <Form.Control
                  type="file"
                  value={widget.content.video}
                  onChange={e => this.addVideo(e)}
                /> */}
              </Form.Group>
            )}
          </div>
          <Form.Group>
            <Form.Check
              id="addInternalNavigation"
              label={"Add Internal Navigation"}
              value={widget.internalNavigation}
              onChange={e => this.internalNavigation(e)}
              checked={widget.internalNavigation ? true : false}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onModalChange} variant="danger">
            Cancel
          </Button>
          <Button
            onClick={this.onSaveContent}
            variant="success"
            disabled={this.disabledSave()}
          >
            Save
          </Button>
        </Modal.Footer>
      </>
    );
  }
}

export default VideoBlock;
