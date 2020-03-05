import React, { Component } from "react";

import Sidebar from "./templates/component/sidebar";
import Footer from "./templates/component/footer";
import Home from "./templates/Home";
import { Switch, Route } from "react-router-dom";
import DefaultTemplate from "./templates/default";
import ProjectsContext from "../context/projectsContext"; 
import Loader from "../components/loader/loader";
 
import Data from "../../src/project.json";

class Preview extends Component {
  static contextType = ProjectsContext;

  state = {
    isLoading: false,
    selectedProject: {},
    selectedPage: [],
    subPage: {
      data: { widgets: [] }
    },
    dataNotFound:false

  };

  componentDidMount() {
    const selectedProject = Data;
    
   
   if(Object.entries(Data).length === 0 ) {
    this.setState({ selectedProject, isLoading: true, dataNotFound:true });
   }
   else{
     this.setState({ selectedProject, isLoading: true, dataNotFound:false });
   }
  }

  handleSelectPage = page => {
    const pages = this.state.selectedProject.pages;

    const selectedPage = pages.filter(item => item.id === page.id);

    this.setState({ selectedPage: selectedPage[0] });
    if (page.templateType === "TABS") {
      const pages = this.state.selectedProject.pages.filter(
        item => item.id === page.id
      );
      this.handleSelectSubPage(pages[0].data.tabs[0].id);
    }
  };
  handleSelectSubPage = id => {
    const pages = this.state.selectedProject.pages;
    const selectedPage = pages.filter(item => item.id === id);
    this.setState({ subPage: selectedPage[0] });
  };

  render() {
    const { selectedProject, selectedPage, subPage } = this.state;

    if (this.state.isLoading) { 
      if(!this.state.dataNotFound && selectedProject.data !== undefined ){
      return (
        <div className="home-wrap">
          <span className="homepage-dots"></span>
          <Sidebar
            selectedProject={selectedProject}
            onSelectPage={this.handleSelectPage}
          />
          <div className="main">
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Home
                    {...props}
                    title={selectedProject.title}
                    description={selectedProject.description}
                    selectedProject={selectedProject.data}
                  />
                )}
              />

              {selectedProject.navigation !== null &&
                selectedProject.navigation.map(item => (
                  <>
                    <Route
                      path={"/home"}
                      render={props => (
                        <DefaultTemplate
                          {...props}
                          selectedPage={selectedPage}
                          subPage={subPage}
                          onSelectSubPage={this.handleSelectSubPage}
                        />
                      )}
                    />
                    {/* {item.children !== undefined &&
                  item.children.map(clildItem => (
                    (console.log("/preview" + clildItem.url)),
                    <Route
                      path={"/preview" + clildItem.url}
                      component={DefaultTemplate}
                    />
                  ))} */}
                  </>
                ))}
            </Switch>
            <Footer />
          </div>
        </div>
      )}
      else{ return "Data Not Found" }
    } else {
      return <Loader />;
    }
  }
}

export default Preview;
