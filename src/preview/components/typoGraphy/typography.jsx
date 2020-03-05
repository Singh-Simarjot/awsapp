import React, { Component } from "react";
import "./typography.scss";
import { Row, Col } from "react-bootstrap";
import MenuLink from "./internalmenulink/menulink";
import TypeColor from "./typecolor/typecolor";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
class TypoGraphy extends Component {
  state = {
    code: "font-family:"
  };
  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        <MenuLink />
        <div className="content-block"  id ={data.id}>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          {/* <h2>Type tokens and sets</h2>
          <p>
            arbon uses type tokens and themes to manage typography. Type tokens
            are pre-set configurations of typographic elements such as font
            size, weight, or leading (line height) that are specifically
            calibrated for use alongside IBM Plex in product. Selecting the
            appropriate type style is determined by layout or template
            structure. Layouts may have several levels of architecture or areas
            that require varying typographic hierarchies.
          </p> */}
        </div>
        <div className="content-block">
          <h3>Productive vs. Expressive type sets</h3>
          <p>
            Productive type is reserved for use in web-based product design,
            where the user needs to focus on tasks. The Productive styles are
            curated to create a series of clear user expectations about
            hierarchy. Expressive type, on the other hand, allows for a more
            dramatic, graphic use of type in editorial and marketing design —
            which many users would find distracting in product.
          </p>
          <p>
            Productive type is reserved for use in web-based product design,
            where the user needs to focus on tasks. The Productive styles are
            curated to create a series of clear user expectations about
            hierarchy. Expressive type, on the other hand, allows for a more
            dramatic, graphic use of type in editorial and marketing design —
            which many users would find distracting in product.
          </p>
        </div>
        <div className="mt-5">
          <Row>
            <Col lg={8}>
              <div className="f-typography bg-white  p-3">
                {data.content.selectedFonts.map(item => (
                  <>
                    <link
                      href={"https://fonts.googleapis.com/css?family=" + item}
                    />
                    <h3 className="bold" style={{ fontFamily: item }}>
                      {item}
                    </h3>
                  </>
                ))}
              </div>
            </Col>
          </Row>
        </div>
        <div className="mt-5">
          <h4 className="mt-4">Sans-serif font stack</h4>
          <Row>
            <Col lg={8}>
              <div className="codeSnippets">
                <i className="fa fa-clone"></i>
                <Editor
                  //   value={this.state.code}
                  value={
                    this.state.code +
                    data.content.selectedFonts.map(item => " " + item)
                  }
                  highlight={code => highlight(code, languages.js)}
                  padding={10}
                  readOnly
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 12
                  }}
                />
              </div>
            </Col>
          </Row>
        </div>
        <div className="s-scaling mt-5">
          <div className="content-block">
            <h2 className="mt-4">Scale</h2>
            <p>
              The IBM type scale is built on a single equation. The formula for
              our scale was created to provide hierarchy for all types of
              experiences. The formula assumes that y₀=12 px:
            </p>
          </div>

          <Row>
            <Col lg={8}>
              <div className="scaling-property bg-white  p-3">
                <ul>
                  <li className="info-heading">
                    <span>rem</span>
                    <span>px</span>
                  </li>
                  <li>
                    <span>0.75</span>
                    <span>Plex 12</span>
                  </li>
                  <li>
                    <span>0.875</span>
                    <span>Plex 14</span>
                  </li>
                  <li>
                    <span>1</span>
                    <span>Plex 16</span>
                  </li>
                  <li>
                    <span>1.125</span>
                    <span>Plex 18</span>
                  </li>
                  <li>
                    <span>1.25</span>
                    <span>Plex 20</span>
                  </li>
                  <li>
                    <span>1.5</span>
                    <span>Plex 24</span>
                  </li>
                  <li>
                    <span>1.75</span>
                    <span>Plex 28</span>
                  </li>
                  <li>
                    <span>2</span>
                    <span>Plex 32</span>
                  </li>
                  <li>
                    <span>2.25</span>
                    <span>Plex 36</span>
                  </li>
                  <li>
                    <span>2.625</span>
                    <span>Plex 42</span>
                  </li>
                  <li>
                    <span>3</span>
                    <span>Plex 48</span>
                  </li>
                  <li>
                    <span>3.375</span>
                    <span>Plex 54</span>
                  </li>
                  <li>
                    <span>4.25</span>
                    <span>Plex 68</span>
                  </li>
                  <li>
                    <span>4.75</span>
                    <span>Plex 76</span>
                  </li>
                  <li>
                    <span>5.25</span>
                    <span>Plex 84</span>
                  </li>
                  <li>
                    <span>5.75</span>
                    <span>Plex 92</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mt-5">
          <div className="content-block">
            <h2>Style</h2>
            <p>
              Typography creates purposeful texture, guiding users to read and
              understand the hierarchy of information. The right typographic
              treatment and the controlled usage of type styles helps manage the
              display of content, keeping it useful, simple, and effective.
            </p>
          </div>
          <div className="content-block mb-3">
            <h2>Weights</h2>
            <p>
              Font weight is an important typographic variable that can add
              emphasis and differentiate content hierarchy. Font weight and size
              pairings must be carefully balanced. A bold weight will always
              have more emphasis than a lighter weight font of the same size.
              However, a lighter weight font can rank hierarchically higher than
              a bold font if the lighter weight type size is significantly
              larger than the bold one.
            </p>
            <p>
              We suggest using IBM Plex Light, Regular, and SemiBold for digital
              experiences. The semibold weight is ideal for section headers, but
              should not be used for long text.
            </p>
          </div>
          <Row>
            <Col lg={8}>
              <div className="f-typography bg-white  p-3">
                <h4 className="normal">Semibold(600)</h4>
                <h4 className="normal">Regular(400)</h4>
                <h4 className="normal">Light (300)</h4>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mt-5">
          <div className="content-block">
            <h2>Italic</h2>
            <p>
              Each weight has an italic style, which should only be used when
              you need to emphasize certain words in a sentence (titles of
              works, technical terms, names of devices, captions, etc.).
            </p>
          </div>
          <Row>
            <Col lg={8}>
              <div className="f-typography bg-white  p-3">
                <h3 className="semi-bold">
                  <em>Semibold(600)</em>
                </h3>
                <h4 className="normal">
                  <em>SRegular(400)</em>
                </h4>
                <h5 className="light">
                  <em>SLight (300)</em>
                </h5>
              </div>
            </Col>
          </Row>
        </div>

        <TypeColor data={data.content.typeColor} />
      </React.Fragment>
    );
  }
}

export default TypoGraphy;
