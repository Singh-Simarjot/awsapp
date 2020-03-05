import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import $ from "jquery";

class NavigationControls extends Component {
  state = { title: "" };
  componentDidMount() {
    const title = this.props.item.title;
    //editNavBtn
    $(document).on("click", ".editNavBtn", function() {
      $(this)
        .siblings(".editDrop")
        .addClass("editDropOpen");
    });
    $(document).on("click", ".editDropCancel, .editDropSave", function() {
      $(this)
        .parent(".editDrop")
        .removeClass("editDropOpen");
    });
  }
  editLabel = e => {
    this.setState({ title: e.target.value });
  };

  render() {
    const {
      item,
      parentid,
      onEdit,
      onDelete,
      onSaveLabel,
      dummyId
    } = this.props;
    const { title } = this.state;
    return (
      <div>
        {/* <span className="editNavBtn" onClick={() => onEdit(item.dummyid,parentid)}>
          Edit{" "}
        </span>{" "} */}
        <span
          className="deleteNavBtn"
          onClick={() => onDelete(dummyId, parentid)}
        >
          Delete
        </span>{" "}
        {/* <div className="editDrop">
          <Form.Control
            size={"sm"}
            onChange={e => this.editLabel(e)}
            value={title}
            name="title"
          />
          <Button size={"sm"} variant={"success"} onClick={()=>this.props.onSaveLabel(item.dummyid,parentid,title) } className="editDropSave">
            <i className="fa fa-check"></i>
          </Button>
          <Button size={"sm"} variant={"danger"} className="editDropCancel">
            <i className="fa fa-times"></i>
          </Button>
        </div> */}
      </div>
    );
  }
}

export default NavigationControls;
