import React, { Component } from "react";
import { Link } from "react-router-dom";
// import ListGroup from "react-bootstrap/ListGroup";
import "./assets/home.scss";
// import Sidebar from "./component/sidebar";
import { Container, Row, Col } from "react-bootstrap";
import designImage from "./assets/images/designers.jpg";
import developImage from "./assets/images/developing.jpg";
// import sketchIcon from "./assets/images/sketch.jpg";
import xdImage from "./assets/images/xd_kit_img.jpg";
import carbonImage from "./assets/images/v10.7-release.jpg";
import hackImage from "./assets/images/hacktoberfest.jpg";

// video
// import videoImg from "./assets/video/bannerVideoImg.jpg";
// import videoMobMp4 from "./assets/video/bannerVideoMob.mp4";
// import videoMobWebm from "./assets/video/bannerVideoMob.webm";
// import videoMp4 from "./assets/video/bannerVideo.webm";
// import videoWebm from "./assets/video/bannerVideo.webm";
import DeveloperResource from "./developerResource";
import ArticlePost from "./articlePost";

import ProjectsContext from "../../context/projectsContext";

class Home extends Component {
  static contextType = ProjectsContext;

  

  render() {
    const {   description  ,selectedProject } = this.props;
    
    const homeData = selectedProject;
    // const homeData = selectedProjectID.data;
    return (
      <React.Fragment>
        {homeData.headerSection.videoThumb &&
          homeData.headerSection.videoThumb !== undefined && (
            <section className="video-section">
              {homeData.headerSection.videoThumb && (
                <video
                  poster={homeData.headerSection.videoThumb}
                  muted
                  autoPlay="autoplay"
                  playsInline=""
                  loop
                >
                  <source
                    src={homeData.headerSection.video}
                    type="video/webm"
                    media="all and (max-width: 600px)"
                  />
                  <source
                    src={homeData.headerSection.video}
                    type="video/mp4"
                    media="all and (max-width: 600px)"
                  />
                  <source
                    src={homeData.headerSection.video}
                    type="video/webm"
                  />
                  <source src={homeData.headerSection.video} type="video/mp4" />
                </video>
              )}
              {homeData.headerSection.link && (
                <Container className="position-relative">
                  <div className="more d-flex ml-auto">
                    <a
                      href={homeData.headerSection.link}
                      className="d-flex flex-column"
                    >
                      <div className="more-text">
                        <span>{homeData.headerSection.linkTopText}</span>
                        <h4>{homeData.headerSection.linkTitle}</h4>
                      </div>
                      <span className="arrow-icon mt-auto">
                        <i
                          className="fa fa-long-arrow-right"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </a>
                  </div>
                </Container>
              )}
            </section>
          )}

        {selectedProject.name && (
          <section className="main-content">
            <Container>
              <Row>
                <Col md={4}>
                  <div className="heading">{selectedProject.name}</div>
                </Col>
                <Col md={4} lg={8}>
                  <div className="heading-description">{description}</div>
                </Col>
              </Row>
            </Container>
          </section>
        )}

        {homeData.designingSection.link && (
          <section className="designing-section">
            <Container className="position-relative">
              <a href={homeData.designingSection.link}>
                {homeData.designingSection.image && (
                  <div className="bx-ratio-section">
                    <img
                      src={homeData.designingSection.image}
                      alt=""
                      className="img-fluid top-img"
                    />
                  </div>
                )}
                {homeData.designingSection.linkTitle && (
                  <div className="more d-flex ml-auto flex-column">
                    <div className="more-text">
                      {homeData.designingSection.linkTopText && (
                        <span>{homeData.designingSection.linkTopText}</span>
                      )}
                      {homeData.designingSection.linkTitle && (
                        <h4>{homeData.designingSection.linkTitle}</h4>
                      )}
                    </div>
                    <span className="arrow-icon mt-auto">
                      <i
                        className="fa fa-long-arrow-right"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </div>
                )}
              </a>
            </Container>
          </section>
        )}

        {homeData.developmentSection.link && (
          <section className="designing-section">
            <Container className="position-relative">
              <a href={homeData.developmentSection.link}>
                <div className="bx-ratio-section">
                  <img
                    src={homeData.developmentSection.image}
                    alt=""
                    className="img-fluid top-img"
                  />
                </div>
                <div className="more d-flex ml-auto flex-column">
                  <div className="more-text">
                    <span>{homeData.developmentSection.linkTopText}</span>
                    <h4>{homeData.developmentSection.linkTitle}</h4>
                  </div>
                  <span className="arrow-icon mt-auto">
                    <i
                      className="fa fa-long-arrow-right"
                      aria-hidden="true"
                    ></i>
                  </span>
                </div>
              </a>
            </Container>
          </section>
        )}

        {homeData.resource.otherResourceTitle && (
          <section className="other-resource">
            <Container>
              <div className="resource-wrap">
                <h5 className="main-head">
                  {homeData.resource.otherResourceTitle}
                </h5>
                <p>{homeData.resource.otherResourceDescription}</p>
                {homeData.resource.otherResourceComponets.length > 0 && (
                  <div className="resource-list">
                    <Row>
                      {homeData.resource.otherResourceComponets.map(items => (
                        <DeveloperResource
                          title={items.title}
                          icon={items.icon}
                          linktext={items.link}
                        />
                      ))}

                      {/* <DeveloperResource title="Sketch libraries" />
                    <DeveloperResource title="Carbon Components" />
                    <DeveloperResource title="Carbon Components React" />
                    <DeveloperResource title="Carbon Components Angular" />
                    <DeveloperResource title="Carbon Components Vue" /> */}
                    </Row>
                  </div>
                )}
              </div>
            </Container>
          </section>
        )}

        {homeData.latestTrends.latestTrendSectionTitle && (
          <section className="latest-post">
            <Container>
              <div className="resource-wrap">
                <h5 className="main-head">
                  {homeData.latestTrends.latestTrendSectionTitle}
                </h5>
                {homeData.latestTrends.latestTrendSectionArticle.length > 0 && (
                  <div className="resource-list">
                    <Row>
                      {homeData.latestTrends.latestTrendSectionArticle.map(
                        items => (
                          <ArticlePost
                            title={items.title}
                            topimage={items.image}
                            author={items.author}
                            published={items.publishDate}
                            link={items.link}
                          />
                        )
                      )}

                      {/* <ArticlePost
                    title="Adobe XD Carbon starter kit announced at Max"
                    topimage={xdImage}
                  />
                  <ArticlePost
                    title="New in Carbon: October 2019"
                    topimage={carbonImage}
                  />
                  <ArticlePost
                    title="Help build Carbon — Hacktoberfest 2019"
                    topimage={hackImage}
                  /> */}
                    </Row>
                  </div>
                )}
              </div>
            </Container>
          </section>
        )}

        {/* <section className="main-content start-contributing">
          <Container>
            <Row>
              <Col md={4}>
                <div className="heading">{homeData.contribute.title}</div>
              </Col>
              <Col md={4} lg={8}>
                <div className="heading-description">
                  <p>{homeData.contribute.description}</p>
                  <Link to={homeData.contribute.link}>
                    {homeData.contribute.linkText}
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section> */}

        {/* <section className="main-content start-contributing">
          <Container>
            <Row>
              <Col md={4}>
                <div className="heading">Wondering how to contribute?</div>
              </Col>
              <Col md={4} lg={8}>
                <div className="heading-description">
                  <p>We welcome all feedback, designs, or ideas in order to produce the best possible experience for our users. If you’re interested in contributing, check out our contributing guidelines to get started.</p>
                  <Link to="/">
                  Start contributing
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </section> */}

        {/* <section className="text-pagination mt-0">
          <Container>
            <Link>
              <div className="previous">
                <span>Previous</span>
                <h2>Home</h2>
              </div>
            </Link>

            <Link>
              <div className="next">
                <span>Next</span>
                <h2>Get started: Design</h2>
              </div>
            </Link>
          </Container>
        </section> */}
      </React.Fragment>
    );
  }
}

export default Home;
