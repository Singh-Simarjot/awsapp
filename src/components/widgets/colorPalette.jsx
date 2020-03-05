import React, { Component } from "react";
import "./widgets.scss";
import nextId from "react-id-generator";
import { Form, Modal, Button, Row, Col } from "react-bootstrap";
class ColorPalette extends Component {
  state = {
    colorsPalettes: [
      {
        id: "1",
        title: "",
        shades: []
      }
    ],
    widget: {
      id: "",
      icon: "fa-th",
      type: "COLOR_PALETTE",
      label: "Color Palette",
      title: "",
      description: "",
      internalNavigation: false,
      content: {
        colorsPalettes: []
      }
    }
  };

  componentDidMount() {
    const modalOpenType = this.props.modalOpenType;
    if (modalOpenType === "edit") {
      const content = this.props.data;
      this.setState({ widget: content });
      this.setState({ colorsPalettes: content.content.colorsPalettes });
    }
  }

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

  internalNavigation = e => {
    const widget = { ...this.state.widget };
    widget.internalNavigation = !this.state.widget.internalNavigation;
    this.setState({ widget });
  };

  saveColor = shade => {
    const parentId = shade.parentId;
    const shadeId = shade.id;
    const colorsPalettes = this.state.colorsPalettes.filter(item =>
      item.id === parentId
        ? item.shades.filter(shade =>
            shade.id === shadeId ? (shade.saved = true) : shade
          )
        : item
    );
    this.setState({ colorsPalettes });
  };

  editColor = shade => {
    const parentId = shade.parentId;
    const shadeId = shade.id;
    const colorsPalettes = this.state.colorsPalettes.filter(item =>
      item.id === parentId
        ? item.shades.filter(shade =>
            shade.id === shadeId ? (shade.saved = false) : shade
          )
        : item
    );
    this.setState({ colorsPalettes });
  };

  disabledSaveColor(shade) {
    return shade.color === "" ? true : false;
  }
  deleteColor = (shade, id) => {
    const colorsPalettes = this.state.colorsPalettes.filter(function(item) {
      if (item.id === id) {
        item.shades = item.shades.filter(m => m.id != shade.id);
        return item;
      } else {
        return item;
      }
    });
    this.setState({ colorsPalettes });
  };

  disabledAddColor(item) {
    return item.shades.filter(item => item.saved === false).length > 0
      ? true
      : false;
  }
  disabledAddRow() {
    const colorsPalettes = this.state.colorsPalettes;
    const result = colorsPalettes.filter(row =>
      row.title === "" ? true : false
    );
    return result.length > 0 ? true : false;
  }

  addColorRow = () => {
    const dummyid = nextId();
    const obj = {
      id: dummyid,
      title: "",
      shades: []
    };
    const colorsPalettes = [...this.state.colorsPalettes, obj];
    this.setState({ colorsPalettes });
  };

  deleteColorRow = id => {
    const colorsPalettes = this.state.colorsPalettes.filter(
      item => item.id !== id
    );
    this.setState({ colorsPalettes });
  };

  addColorRowTitle = (e, id) => {
    const colorsPalettes = this.state.colorsPalettes.filter(function(item) {
      if (item.id === id) {
        item.title = e.target.value;
        return item;
      } else {
        return item;
      }
    });

    this.setState({ colorsPalettes });
  };

  addMoreColor = e => {
    const dummyid = nextId();
    const obj = {
      id: dummyid,
      color: "",
      saved: false,
      parentId: e.target.id
    };
    const colorsPalettes = this.state.colorsPalettes.filter(item =>
      item.id === e.target.id ? (item.shades = [...item.shades, obj]) : item
    );

    this.setState({ colorsPalettes });
  };

  addColor = e => {
    const pid = e.target.name;
    const id = e.target.id;
    const color = e.target.value;

    const colorsPalettes = this.state.colorsPalettes.filter(item =>
      item.id === pid
        ? item.shades.filter(shade =>
            shade.id === id ? (shade.color = color) : shade
          )
        : item
    );
    this.setState({ colorsPalettes });
  };

  disabledSave() {
    const colorsPalettes = this.state.colorsPalettes;
    const colorsPalettesTitle = colorsPalettes.filter(row =>
      row.title === "" ? true : false
    );

    const colorItm = colorsPalettes.filter(
      item =>
        item.title === "" ||
        item.shades.filter(shade => !shade.saved).length > 0 ||
        item.shades.length === 0
    );

    const widget = this.state.widget;
    return widget.title == "" ||
      widget.description == "" ||
      colorsPalettesTitle.length > 0 ||
      colorItm.length > 0 ||
      colorsPalettes.length === 0
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
    widget.content.colorsPalettes = this.state.colorsPalettes;
    this.setState({ widget });
    this.props.onSaveComponent(widget);
  };
  render() {
    const { onModalChange } = this.props;
    const { widget, colorsPalettes } = this.state;
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
              name="description"
            />
          </Form.Group>
          <div className="widgetsDiv colorPalette">
            {colorsPalettes.map(item => (
              <div className="colorPaletteRow">
                <Form.Group>
                  <Form.Control
                    size={"sm"}
                    id={item.id}
                    value={item.title}
                    placeholder="Color Row Title"
                    onChange={e => this.addColorRowTitle(e, item.id)}
                  />
                </Form.Group>
                <Row key={item.id}>
                  {item.shades.map(shade => (
                    <Col xs={6} md={3} key={shade.id}>
                      <Form.Group className="colorBox">
                        <Form.Control
                          size={"sm"}
                          name={item.id}
                          id={shade.id}
                          value={shade.color}
                          onChange={e => this.addColor(e)}
                          readOnly={shade.saved ? true : false}
                        />
                        {shade.saved ? (
                          <Button
                            size={"sm"}
                            variant={"success"}
                            onClick={() => this.editColor(shade)}
                            disabled={this.disabledSaveColor(shade)}
                          >
                            <i className="fa fa-pencil"></i>
                          </Button>
                        ) : (
                          <Button
                            size={"sm"}
                            variant={"success"}
                            onClick={() => this.saveColor(shade)}
                            disabled={this.disabledSaveColor(shade)}
                          >
                            <i className="fa fa-check"></i>
                          </Button>
                        )}

                        <Button
                          size={"sm"}
                          variant={"danger"}
                          onClick={() => this.deleteColor(shade, item.id)}
                        >
                          <i className="fa fa-times"></i>
                        </Button>
                      </Form.Group>
                    </Col>
                  ))}
                  {/* button add color */}
                  <Col xs={6} md={3}>
                    <Form.Group>
                      <Button
                        id={item.id}
                        size={"sm"}
                        className="addMoreColor"
                        disabled={this.disabledAddColor(item)}
                        onClick={e => this.addMoreColor(e)}
                      >
                        Add Color
                      </Button>
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  size={"sm"}
                  variant={"danger"}
                  onClick={() => this.deleteColorRow(item.id)}
                >
                  <i className="fa fa-trash-o"></i>
                </Button>
              </div>
            ))}
          </div>
          <Form.Group className="text-center">
            <Button
              size={"sm"}
              className="addMoreColorRow"
              onClick={this.addColorRow}
              disabled={this.disabledAddRow()}
            >
              Add Color Row
            </Button>
          </Form.Group>
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

export default ColorPalette;
