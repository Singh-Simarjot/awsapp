import React, { Component } from "react";
import "./content.scss";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Row, Col, Button } from "react-bootstrap";
// import ContentItem from "./contentItem";
// import $ from "jquery";
import SortableTree from "react-sortable-tree";
import "react-sortable-tree/style.css"; // This only needs to be imported once in your app

class NavigationContent extends Component {
 
   

  render() {
    const { onSaveNavigatoin,navigation } = this.props;
    
    return (
      <div className="content">
        <div className="contentTop">
          <Row>
            <Col>
              <h2>Navigation</h2>
            </Col>
            <Col size={"4"} className="text-right">
              <Button onClick={onSaveNavigatoin} size={"sm"}>
                Save
              </Button>
            </Col>
          </Row>
        </div>
        <div className="contentData contentDataNavigation">
          <SortableTree
            treeData={navigation}
            onChange={(navigation) => this.props.sortNavigation({ navigation })}
            maxDepth={2}
          />
        </div>
      </div>
    );
  }
}

export default NavigationContent;
