import React, { Component } from "react";
import { Button, ButtonToolbar, Modal, Form } from "react-bootstrap";
import ModalComponent from "../modal/modalComponent";
import ModalDelete from "../../components/modalDelete/modalDelete";
import ProjectsContext from "../../context/projectsContext";
class ContentItem extends Component {
  state = {
    // showModal: false,
    showDeleteModal: false,

    showModalComponent: false,
    modalData: { title: "", description: "", content: "" }
  };
  // handleModal() {
  //   this.props.onModalChange();
  // }
  handleModalDelete = () => {
    this.setState({ showDeleteModal: !this.state.showDeleteModal });
  };
  static contextType = ProjectsContext;
  confirmAction = () => {
    this.props.deleteWidgets();
    this.setState({ showDeleteModal: false });
  };

  // edit

  handleModal = modalData => {
    // console.log(modalData);

    this.setState({ showModalComponent: !this.state.showModalComponent }, () =>
      this.setModalContent(modalData)
    );
  };
  setModalContent = modalData => {
    if (this.state.showModalComponent) {
      this.setState({ modalData });
    } else {
      this.setState({ modalData: null });
    }
  };
  // saveComponent = modalData => {
  //   // console.log("Page Data", modalData);
  //   const page = this.state.page;
  //   // const modalData = { ...this.state.modalData };
  //   page.data.widgets = [...page.data.widgets, modalData];
  //   this.setState({ page }, () => this.handleModal());
  // };
  render() {
    const { widgetContent } = this.props;
    return (
      <React.Fragment>
        <div className="media border p-3">
          <div className="mediaIcon border">
            <i className={"fa " + widgetContent.icon}></i>
          </div>
          <div className="media-body">
            <h4>{widgetContent.title}</h4>
            <p>{widgetContent.description}</p>
          </div>
          {/* <div className="moveIcon">
            <i className="fa fa-arrows-v"></i>
          </div> */}
          <div className="contentItemAction">
            <ButtonToolbar>
              <Button
                variant="dark"
                size="sm"
                onClick={() => {
                  this.props.onModalChange(widgetContent, "edit");
                }}
              >
                <i className="fa fa-pencil"></i>
              </Button>
              <Button
                variant="dark"
                size="sm"
                className="ml-2"
                onClick={() => {
                  this.handleModalDelete();
                }}
              >
                <i className="fa fa-trash"></i>
              </Button>
            </ButtonToolbar>
          </div>
        </div>
        <ModalDelete
          showModal={this.state.showDeleteModal}
          modalAction={this.handleModalDelete}
          onconfirm={this.confirmAction}
        />
      </React.Fragment>
    );
  }
}

export default ContentItem;
