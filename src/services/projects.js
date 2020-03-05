import apiService from "./httpServices";
import { globalConstants } from "../globalvariables";
const APIBASEURL = globalConstants.BASE_URL;

export function getProjects() {
  const projectsEndpoint = APIBASEURL + "project";
  return apiService.get(projectsEndpoint);
}

export function getProjectDetail(id) {
  const projectsEndpoint = APIBASEURL + "project/" + id;
  return apiService.get(projectsEndpoint);
}

export function getPageDetail(id) {
  const pageEndpoint = APIBASEURL + "page/" + id;
  return apiService.get(pageEndpoint);
}

export function createProject(data) {
  const projectsEndpoint = APIBASEURL + "project/store";
  return apiService.post(projectsEndpoint, data);
}

export function deleteProject(id) {
  const projectsEndpoint = APIBASEURL + "project/" + id;
  return apiService.post(projectsEndpoint);
}

export function updateProject(id, data) {
  const projectsEndpoint = APIBASEURL + "project/update/" + id;
  return apiService.post(projectsEndpoint, data);
}

export function createPage(data) {
  const pageEndpoint = APIBASEURL + "page/store";
  return apiService.post(pageEndpoint, data);
}

export function updatePage(id, data) {
  const pageEndpoint = APIBASEURL + "page/update/" + id;
  return apiService.post(pageEndpoint, data);
}

export function deletePage(id) {
  const pageEndpoint = APIBASEURL + "page/" + id;
  return apiService.post(pageEndpoint);
}
export function updatePageStatus(id, data) {
  const pageEndpoint = APIBASEURL + "page/updatepagestatus/" + id;

  return apiService.post(pageEndpoint, JSON.stringify(data));
}

export function createNav(data) {
  const navigationEndpoint = APIBASEURL + "navigation/store";
  return apiService.post(navigationEndpoint, data);
}
export function updateNav(id, data) {
  const navigationEndpoint = APIBASEURL + "navigation/update/" + id;
  return apiService.post(navigationEndpoint, data);
}

export function uploadFile(file) {
  const projectsEndpoint = APIBASEURL + "project/file";
  return apiService.post(projectsEndpoint, file);
}

export function previewProject(id) {
  const projectsEndpoint = APIBASEURL + "project/download/"+id;
  return apiService.get(projectsEndpoint);
}

// export function uploadFile(file) {
//   const projectsEndpoint = APIBASEURL + "project/file";
//   return apiService.post(projectsEndpoint, file, {
//     headers: { "content-type": "application/x-www-form-urlencoded" }
//   });

// }
