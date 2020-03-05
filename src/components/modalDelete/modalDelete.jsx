import React, { Component } from "react";
import "./modalDelete.scss";
import { Button, Modal } from "react-bootstrap";
class ModalDelete extends Component {
  state = {};
  render() {
    return (
      <Modal
        size={"md"}
        show={this.props.showModal}
        onHide={() => {
          this.props.modalAction();
        }}
        className="modalDelete"
        centered
      >
        <Modal.Header closeButton>
          <div className="crossIcon">
            <span></span>
          </div>
        </Modal.Header>
        <Modal.Body>
          <h3>Are you sure?</h3>
          Do you really want to delete these records? This process cannot be
          undone.
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.props.modalAction()} variant="secondary">
            Cancel
          </Button>
          <Button variant="danger" onClick={this.props.onconfirm}>Delete</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalDelete;
