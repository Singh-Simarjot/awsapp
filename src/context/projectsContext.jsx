import React, { Component } from "react";
import { toast } from "react-toastify";

import {
  getProjects,
  getProjectDetail,
  getPageDetail,
  createProject,
  deleteProject,
  updateProject,
  createPage,
  updatePage,
  deletePage,
  updatePageStatus,
  createNav,
  updateNav
} from "../services/projects";

const Context = React.createContext();

export class ProjectsContext extends Component {
  state = {
    selectedProjectID: null,
    selectedPageID: null,
    allProjects: [],
    selectedProject: null,
    selectedPage: null,
    subPage: {
      id: "",
      title: "",
      dateCreated: "",
      dateEdited: "",
      author: "",
      widgets: [],
      isloading: false
    }
  };

  getAllProjects = async () => {
    try {
      await getProjects().then(response => {
        if (response.status === 200) {
          const allProjects = response.data;
          this.setState({ allProjects: allProjects, isloading: true });
        }
      });
    } catch (err) {
      this.setState({ allProjects: [], isloading: true });
    }
  };

  onSelectProject = async id => {
    this.setState({ selectedProjectID: id });
  };
  handleProjectDetail = async id => {
    this.setState({ isloading: false });

    var result;
    try {
      result = await getProjectDetail(id).then(response => {
        if (response.status === 200) {
          const selectedProject = response.data;
          // console.log(selectedProject);
          this.setState(
            {
              selectedProjectID: selectedProject.id,
              selectedProject: selectedProject,
              isloading: true
            },
            () => {
              return selectedProject;
            }
          );

          return selectedProject;
        }
      });
    } catch (err) {
      console.log(err);

      this.setState({
        selectedProjectID: null,
        selectedProject: null,
        isloading: true
      });
    }

    return result;
  };

  onSelectPage = async selectedPageID => {
    this.setState({ selectedPageID });
  };

  handlePageDetail = async () => {
    var result;
    try {
      result = await getPageDetail(this.state.selectedPageID).then(response => {
        if (response.status === 200) {
          const selectedPage = response.data;
          this.setState(
            {
              selectedPage,
              selectedPageID: selectedPage.id
            },
            () => {
              return selectedPage;
            }
          );
          return selectedPage;
        }
      });
    } catch (err) {}
    return result;
  };

  handleSelectSubPage = id => {
    const subpage = this.state.selectedProject.pages.filter(
      item => item.id === id
    );
    this.setState({ subPage: subpage[0] });
  };

  addNewProject = async item => {
    try {
      await createProject(JSON.stringify(item)).then(response => {
        if (response.status === 200) {
          const result = response.data;
          item.id = result.data.projectId;
          const allProjects = [item, ...this.state.allProjects];
          toast.success("Project Added!");
          this.setState({ allProjects });
        }
      });
    } catch (err) {}
  };
  updateProject = async selectedProject => {
    try {
      await updateProject(
        selectedProject.id,
        JSON.stringify(selectedProject)
      ).then(response => {
        if (response.status === 200) {
          this.setState({ selectedProject });
          toast.success("Project Updated!");
        }
      });
    } catch (err) {}
  };

  saveNewPage = async page => {
    // saveNewPage = async page => {
    const data = { projectID: this.state.selectedProjectID, page: page };
    const result = await createPage(JSON.stringify(data));
    page.id = result.data.PageId;

    const selectedProject = { ...this.state.selectedProject };
    selectedProject.pages = [page, ...selectedProject.pages];
    toast.success("Page  Added!");
    this.setState({ selectedProject });
  };

  editPage = async selectedPage => {
    const selectedProject = { ...this.state.selectedProject };
    const page = {
      projectID: this.state.selectedProjectID,
      page: selectedPage
    };

    try {
      await updatePage(selectedPage.id, JSON.stringify(page)).then(response => {
        if (response.status === 200) {
          selectedProject.pages.filter(item =>
            item.id === selectedPage.id
              ? ((item.title = selectedPage.title),
                (item.templateType = selectedPage.templateType))
              : item
          );
          this.setState({ selectedProject, selectedPage });
          toast.success("Page Updated!");
        }
      });
    } catch (err) {}
  };

  markDraftPage = async page => {
    const selectedPage = { ...this.state.selectedPage };
    const selectedProject = { ...this.state.selectedProject };
    let data = {};
    if (page.saved) {
      data.saved = 0;
    } else {
      data.saved = 1;
    }

    try {
      await updatePageStatus(page.id, data).then(response => {
        if (response.status === 200) {
          selectedProject.pages.filter(item =>
            item.id === page.id ? (item.saved = data.saved) : item
          );
          selectedPage.saved = data.saved;
          this.setState({ selectedPage, selectedProject });
          toast.success(
            selectedPage.saved ? "Page is Live Now !" : "Marked as Draft !"
          );
        }
      });
    } catch (err) {}
  };

  onDeletePage = async id => {
    const selectedProject = this.state.selectedProject;
    const result = await deletePage(id);
    let pages = selectedProject.pages.filter(item => item.id !== id);
    selectedProject.pages = pages;
    this.setState({ selectedProject });
    toast.success("Page Deleted!");
  };

  onDeleteProject = async id => {
    const allProjects = this.state.allProjects;
    await deleteProject(id);
    let projects = allProjects.filter(item => item.id !== id);
    this.setState({ allProjects: projects });
    toast.success("Project Deleted!");
  };

  updateNavigation = async navData => {
    const selectedProject = { ...this.state.selectedProject };
    const id = this.state.selectedProject.navigationId;

    try {
      await updateNav(id, navData).then(response => {
        if (response.status === 200) {
          console.log(response);
          selectedProject.navigation = response.data.Navigation;
          this.setState({ selectedProject });
          toast.success("Navigation Updated!");
        }
      });
    } catch (err) {}
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          onSelectProject: this.onSelectProject,
          getAllProjects: this.getAllProjects,
          onProjectDetail: this.handleProjectDetail,
          onPageDetail: this.handlePageDetail,
          updateNavigation: this.updateNavigation,
          addNewProject: this.addNewProject,
          onUpdateProject: this.updateProject,
          editPage: this.editPage,
          onDeleteProject: this.onDeleteProject,
          onDeletePage: this.onDeletePage,
          onSelectPage: this.onSelectPage,
          onSaveNewPage: this.saveNewPage,
          markDraftPage: this.markDraftPage,
          onUploadFile: this.handleUploadFile,
          onSelectSubPage: this.handleSelectSubPage
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
