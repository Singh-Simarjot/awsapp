import React, { Component } from "react";
import "./widgets.scss";
import { Form, Modal, Button, Row, Col } from "react-bootstrap";
import FontPicker from "font-picker-react";
import nextId from "react-id-generator";
import axios from "axios";

import _ from "lodash";
import { Dropdown } from "semantic-ui-react";

class Typography extends Component {
  state = {
    gFonts: [],
    widget: {
      id: "",
      icon: "fa-keyboard-o",
      label: "Typography Block",
      type: "TYPOGRAPHY",
      title: "",
      description: "",
      internalNavigation: false,
      content: {
        selectedFonts: ["Open Sans"],
        typeColor: []
      }
    }
  };

  async componentDidMount() {
    const modalOpenType = this.props.modalOpenType;
    if (modalOpenType === "edit") {
      const content = this.props.data;
      this.setState({ widget: content });
    }

    // api
    const getFonts = await axios.get(
      "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBN9L9tYefx2Ge4y6fybH5ymuZVjlqczYw"
    );
    this.setState({ gFonts: getFonts.data.items });
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
    const widget = { ...this.state.widget };
    widget.content = e.target.value;
    this.setState({ widget });
  };
  internalNavigation = e => {
    const widget = { ...this.state.widget };
    widget.internalNavigation = !this.state.widget.internalNavigation;
    this.setState({ widget });
  };
  fontChange = font => {
    const activeFontFamily = font;
    this.setState({ activeFontFamily });
  };
  selectFont = font => {
    const activeFontFamily = font.target.value;
    this.setState({ activeFontFamily });
  };

  // multiSelect
  multiSelect = (e, { value }) => {
    // multiSelect = e => {
    const widget = { ...this.state.widget };
    widget.content.selectedFonts = value;
    this.setState({ widget });
  };
  // encd multiSelect

  addMoreColor = () => {
    const dummyid = nextId();
    const widget = { ...this.state.widget };
    const obj = {
      id: dummyid,
      color: "",
      saved: false
    };
    widget.content.typeColor = [...widget.content.typeColor, obj];
    this.setState({ widget });
  };

  addColor = (e, id) => {
    const widget = { ...this.state.widget };
    widget.content.typeColor.filter(item =>
      item.id === id ? (item.color = e.target.value) : item
    );
    this.setState({ widget });
  };

  saveColor = id => {
    const widget = { ...this.state.widget };
    widget.content.typeColor.filter(item =>
      item.id === id ? (item.saved = true) : item
    );
    this.setState({ widget });
  };
  editColor = id => {
    const widget = { ...this.state.widget };
    widget.content.typeColor.filter(item =>
      item.id === id ? (item.saved = false) : item
    );
    this.setState({ widget });
  };
  deleteColor = id => {
    const widget = { ...this.state.widget };
    widget.content.typeColor = widget.content.typeColor.filter(m => m.id != id);
    this.setState({ widget });
  };

  disabledAddColor() {
    const widget = { ...this.state.widget };
    const result = widget.content.typeColor.filter(
      item => item.saved === false && item
    );
    return result.length > 0 ? true : false;
  }

  disabledSave() {
    const widget = { ...this.state.widget };
    const colors = widget.content.typeColor.filter(
      item => item.saved === false
    );
    return widget.content.selectedFonts == "" ||
      colors.length > 0 ||
      widget.content.typeColor.length === 0 ||
      widget.title == "" ||
      widget.description == ""
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

  render() {
    const { onModalChange } = this.props;
    const { widget, gFonts } = this.state;

    const stateOptions = _.map(gFonts, (gFonts, index) => ({
      key: gFonts[index],
      text: gFonts.family,
      value: gFonts.family
    }));
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
          <div className="widgetsDiv colorPalette">
            {/* multiple */}
            <Form.Group>
              <Form.Label>Select Fonts</Form.Label>
              <Dropdown
                placeholder="Select Font"
                fluid
                multiple
                search
                selection
                options={stateOptions}
                onChange={this.multiSelect}
                value={widget.content.selectedFonts}
              />
            </Form.Group>
            {/* end multiple */}
            <Form.Group>
              <Form.Label>Type color</Form.Label>
              <div className="colorPaletteRow">
                <Row>
                  {widget.content.typeColor.map(item => (
                    <Col xs={6} md={3} key={item.id}>
                      <Form.Group className="colorBox">
                        <Form.Control
                          size={"sm"}
                          name={item.id}
                          value={item.color}
                          onChange={e => this.addColor(e, item.id)}
                          readOnly={item.saved ? true : false}
                        />
                        {item.saved ? (
                          <Button
                            size={"sm"}
                            variant={"success"}
                            onClick={() => this.editColor(item.id)}
                            disabled={item.color === "" ? true : false}
                          >
                            <i className="fa fa-pencil"></i>
                          </Button>
                        ) : (
                          <Button
                            size={"sm"}
                            variant={"success"}
                            onClick={() => this.saveColor(item.id)}
                            disabled={item.color === "" ? true : false}
                          >
                            <i className="fa fa-check"></i>
                          </Button>
                        )}

                        <Button
                          size={"sm"}
                          variant={"danger"}
                          onClick={() => this.deleteColor(item.id)}
                        >
                          <i className="fa fa-times"></i>
                        </Button>
                      </Form.Group>
                    </Col>
                  ))}
                  <Col xs={6} md={3}>
                    <Form.Group>
                      <Button
                        size={"sm"}
                        className="addMoreColor"
                        disabled={this.disabledAddColor()}
                        onClick={() => this.addMoreColor()}
                      >
                        Add Color
                      </Button>
                    </Form.Group>
                  </Col>
                </Row>
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

export default Typography;
