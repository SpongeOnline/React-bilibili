import {hot} from "react-hot-loader";
import React, { Component} from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./modules/layout";
import TestButton from "./modules/testButton";
// import { fluentButton, provideFluentDesignSystem } from "@fluentui/web-components"
// provideFluentDesignSystem().register(fluentButton());

class App extends Component{
  render(){
    return(
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="page1" element={<TestButton />} />
          </Route>
        </Routes>
      </HashRouter>
    );
  }
}

export default hot(module)(App);