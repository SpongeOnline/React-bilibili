import {hot} from "react-hot-loader";
import React, { Component} from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./modules/layout";
import CktButton from "../components/button/CktButton";
import LeftSideBar from "./modules/Leftsidebar";

class App extends Component{
  render(){
    return(
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LeftSideBar />} />
            <Route path="test" element={<CktButton />} />
          </Route>
        </Routes>
      </HashRouter>
    );
  }
}

export default hot(module)(App);