import React, { Component } from "react";
import "./widgets.scss";
import { Button, Form, Modal, Row, Col } from "react-bootstrap";
import nextId from "react-id-generator";
import FileBase64 from "react-file-base64";
import { uploadFile } from "../../services/projects";
class IconGrid extends Component {
  state = {
    items: [
      {
        id: "1",
        url: "",
        name: "",
        delete: true
      }
    ],
    widget: {
      id: "",
      icon: "fa-th-large",
      type: "ICON_GRID",
      label: "Icons Grid",
      title: "",
      description: "",
      internalNavigation: false,
      content: {
        icons: []
      }
    }
  };

  componentDidMount() {
    const modalOpenType = this.props.modalOpenType;
    if (modalOpenType === "edit") {
      const content = this.props.data;
      this.setState({ widget: content });
      this.setState({ items: content.content.icons });
    }
  }

  addMoreIcon = () => {
    const dummyid = nextId();
    const obj = { id: dummyid, url: "", name: "", delete: true };
    const items = [...this.state.items, obj];
    this.setState({ items });
  };
  deleteIcon = id => {
    const items = this.state.items.filter(m => m.id !== id);
    this.setState({ items });
  };

  //
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

  // addIcon = e => {
  //   const items = this.state.items;
  //   items.filter(item =>
  //     item.id === e.target.id ? (item.url = e.target.value) : item
  //   );
  //   this.setState({ items });
  // };
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
    widget.content.icons = this.state.items;
    this.setState({ widget });
    this.props.onSaveComponent(widget);
  };

  internalNavigation = e => {
    const widget = { ...this.state.widget };
    widget.internalNavigation = !this.state.widget.internalNavigation;
    this.setState({ widget });
  };

  disabledSave() {
    const widget = this.state.widget;
    const items = this.state.items;

    return items.filter(item => item.url === "").length !== 0 ||
      items.filter(item => item.name === "").length !== 0 ||
      items.length === 0 ||
      widget.title == "" ||
      widget.description == ""
      ? true
      : false;
  }

  addIconName = (e, id) => {
    const items = this.state.items;
    items.filter(item =>
      item.id === id ? (item.name = e.target.value) : item
    );
    this.setState({ items });
  };

  getIcon = async (files, id) => {
    const items = this.state.items;
    const icon = [files];

    try {
      await uploadFile(JSON.stringify(icon)).then(response => {
        if (response.status === 200) {
          const data = response.data;
          if (data.status) {
            items.filter(item =>
              item.id === id ? (item.url = data.file.toString()) : item
            );
            this.setState({ items });
          }
        }
      });
    } catch (err) {}
  };

  removeIcone = id => {
    const items = this.state.items;
    items.filter(item => (item.id === id ? (item.url = "") : item));
    this.setState({ items });
  };

  render() {
    const { onModalChange } = this.props;
    const { widget, items } = this.state;
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
            {items.map(item => (
              <Form.Group className="addIceon" key={item.id}>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        placeholder="Icon Name"
                        value={item.name}
                        onChange={e => this.addIconName(e, item.id)}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      {item.url ? (
                        <div className="imageOverRemove">
                          <img src={item.url} alt="icon Url" />
                          <Button
                            variant={"danger"}
                            size="sm"
                            onClick={() => this.removeIcone(item.id)}
                          >
                            <i className="fa fa-times"></i>
                          </Button>
                        </div>
                      ) : (
                        <FileBase64 onDone={e => this.getIcon(e, item.id)} />
                      )}
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  size={"sm"}
                  variant="link"
                  className={item.delete ? "text-danger" : "text-danger d-none"}
                  onClick={() => this.deleteIcon(item.id)}
                >
                  <i className="fa fa-minus"></i>
                </Button>
              </Form.Group>
            ))}
            <Form.Group className="text-center">
              <Button
                size={"sm"}
                variant="success"
                onClick={this.addMoreIcon}
                disabled={
                  this.state.items.filter(item => item.url === "").length > 0 ||
                  this.state.items.filter(item => item.name === "").length > 0
                    ? true
                    : false
                }
              >
                <i className="fa fa-plus"></i> Add More
              </Button>
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

export default IconGrid;
