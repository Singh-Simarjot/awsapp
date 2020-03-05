import React, { Component } from "react";
import "./ComponentsContent.scss";
import { Container } from "react-bootstrap";

// components
import TableData from "./TableData/TableData";
import ColorGrid from "./Color/ColorGrid";
import IconGrid from "./Icons/IconGrid";
import Theme from "./Theme/Theme";
import TextBlock from "./Content/Content";
import Html from "./Html/html";
import CodeSnippetsWithView from "./codeSnippetsWithView/codeSnippetsWithView";
import CodeSnippets from "./codeSnippets/codeSnippets";
import IframeBlock from "./iframeBlock/iframeBlock";
import VideoBlock from "./videoBlock/videoBlock";
import TypoGraphy from "./typoGraphy/typography";
import ExternalPageLinkGrid from "./externalPageLinkGrid/externalPageLinkGrid";
import ImageBlock from "./imageBlock/imageBlock";
import MultipleImageBlock from "./multipleImageBlock/multipleImageBlock";
class ComponentsContent extends Component {
  state = {};
  renderPreview(item) {
    const { content } = item;
    // data.map(item => item.type);
    switch (item.type) {
      case "HTML":
        // return <Html data={content} />;
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
    const { data } = this.props;
       
    return (
     
      <section className="componentsContent">
        <Container>
          {data.length > 0
            ? data.map(item => this.renderPreview(item))
            : "Please Add Widgets for this page"}
        </Container>
      </section>
    );
  }
}

export default ComponentsContent;
