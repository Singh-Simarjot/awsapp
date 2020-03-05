import React, { Component } from "react";
import "./widgets.scss";
import { Form, Modal, Button } from "react-bootstrap";
import nextId from "react-id-generator";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
const code = `<h1>Hello world</h1>
<p>Hello world</p>`;
class Html extends Component {
  state = {
    code,
    widget: {
      id: "",
      icon: "fa-code",
      type: "HTML",
      label: "HTML Component",
      title: "",
      description: "",
      internalNavigation: false,
      content: {
        code: ""
      }
    }
  };
  componentDidMount() {
    const modalOpenType = this.props.modalOpenType;
    if (modalOpenType === "edit") {
      const content = this.props.data;
      this.setState({ widget: content });
      this.setState({ code: content.content.code });
    }
  }
  titleInput = e => {
    const widget = { ...this.state.widget };
    widget.title = e.target.value;
    this.setState({ widget });
  };
  descriptionInput = e => {
    const widget = { ...this.state.widget };
    widget.description = e.target.value;
    this.setState({ widget });
  };
  contentInput = e => {
    /*
    const widget = { ...this.state.widget };
    widget.content = e.target.value;
    this.setState({ widget });
    */
    this.setState({ code: e.target.value });
  };
  internalNavigation = e => {
    const widget = { ...this.state.widget };
    widget.internalNavigation = !this.state.widget.internalNavigation;
    this.setState({ widget });
  };
  onSaveContent = () => {
    let dummyid;
    const widget = { ...this.state.widget };

    if (this.props.modalOpenType === "edit") {
      dummyid = widget.id;
    } else {
      // dummyid = nextId();
      dummyid =
        "_" +
        Math.random()
          .toString(36)
          .substr(2, 9);
    }

    widget.id = dummyid;
    widget.content.code = this.state.code;
    this.setState({ widget });
    this.props.onSaveComponent(widget);
  };
  disabledSave() {
    const widget = { ...this.state.widget };
    return widget.content == "" ||
      widget.title == "" ||
      widget.description == ""
      ? true
      : false;
  }
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
              <Form.Label>HTML Code</Form.Label>
              <div className="codeEditor">
                <Editor
                  value={this.state.code}
                  onValueChange={code => this.setState({ code })}
                  highlight={code => highlight(code, languages.js)}
                  padding={10}
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 12
                  }}
                  onChange={e => this.contentInput(e)}
                />
              </div>
            </Form.Group>
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

export default Html;
