import React, { Component } from "react";
import "./previewModal.scss";
import { Modal, Button } from "react-bootstrap";

// components
import Html from "../../preview/components/Html/html";
import TypoGraphy from "../../preview/components/typoGraphy/typography";
import IconGrid from "../../preview/components/Icons/IconGrid";
import ColorGrid from "../../preview/components/Color/ColorGrid";
import TableData from "../../preview/components/TableData/TableData";
import VideoBlock from "../../preview/components/videoBlock/videoBlock";
import IframeBlock from "../../preview/components/iframeBlock/iframeBlock";
import CodeSnippets from "../../preview/components/codeSnippets/codeSnippets";
import CodeSnippetsWithView from "../../preview/components/codeSnippetsWithView/codeSnippetsWithView";
import ExternalPageLinkGrid from "../../preview/components/externalPageLinkGrid/externalPageLinkGrid";
import TextBlock from "../../preview/components/Content/Content";
import ImageBlock from "../../preview/components/imageBlock/imageBlock";
import MultipleImageBlock from "../../preview/components/multipleImageBlock/multipleImageBlock";
import InternalNav from  "../../preview/components/internalNav/internalNav"
// end components
class PreviewModal extends Component {
  state = {
    isLoadeing: false
  };
  renderPreview(item) {
    // data.map(item => item.type);
    switch (item.type) {
      case "HTML":
        return <Html data={item} />;
      case "TYPOGRAPHY":
        return <TypoGraphy data={item} />;
      case "ICON_GRID":
        return <IconGrid data={item} />;
      case "COLOR_PALETTE":
        return <ColorGrid data={item} />;
      case "MULTIPLE_IMAGE":
        return <MultipleImageBlock data={item} />;
      case "IMAGE_BLOCK":
        return <ImageBlock data={item} />;
      case "VIDEO_BLOCK":
        return <VideoBlock data={item} />;
      case "IFRAME_BLOCK":
        return <IframeBlock data={item} />;
      case "CODE_SNIPPETS":
        return <CodeSnippets data={item} />;
      case "CODE_SNIPPETS_WITH_VIEW":
        return <CodeSnippetsWithView data={item} />;
      case "EXTERNAL_PAGE_LINK_GRID":
        return <ExternalPageLinkGrid data={item} />;
      case "TEXT_BLOCK":
        return <TextBlock data={item} />;
      default:
        return "foo";
    }
  }

  render() {
    const { showModal, page } = this.props;
    // const interNav = page.data.widgets.filter(function(nav) {
    //   return nav.internalNavigation === true;
    // });
    return (
      <>
        <Modal
          size={"xl"}
          show={showModal}
          className="previewModa"
          backdropClassName="previewModalBackdrop"
          onHide={() => {
            this.props.handlePreviewModal();
          }}
          // centered
          // animation={false}
        >
          <Modal.Header closeButton>
            {page.title ? page.title : "Title Undefined"}
          </Modal.Header>
          <Modal.Body>

          <InternalNav data={page.data.widgets} />

            {/* {interNav.map(function(nav) {
              return (
                <InternalNav />
              );
            })} */}

            {page.data.widgets.length > 0
              ? page.data.widgets.map(item => this.renderPreview(item))
              : "Please Add Widgets for this page"}
            {/* {page.data.widgets.map(item => this.renderPreview(item))} */}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="info"
              size={"sm"}
              onClick={this.props.handlePreviewModal}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default PreviewModal;
