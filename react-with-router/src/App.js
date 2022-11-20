import {hot} from "react-hot-loader";
import React, { Component} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./modules/layout"
import LeftSideBar from "./modules/Leftsidebar";

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LeftSideBar />} />
            <Route path="test" element={<LeftSideBar />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
    // return(
    //   <div className="App">
    //     <h1> Hello, World! </h1>
        
    //   </div>
    // );
  }
}

export default hot(module)(App);