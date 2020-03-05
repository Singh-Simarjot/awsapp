import React from "react";
import "./App.css";
import "./assets/scss/common.scss";
import "react-dropzone-uploader/dist/styles.css";

// import { Route } from "react-router-dom";

import Header from "./containers/header/header";
 

 
import Preview from "./preview/index";
 
import "react-toastify/dist/ReactToastify.css";


function App() {
 
  console.log()
  return (
    <React.Fragment>
      <Header />
      <Preview   />
    </React.Fragment>
  );
}
export default App;
