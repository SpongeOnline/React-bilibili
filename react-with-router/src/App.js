import {hot} from "react-hot-loader";
import React, { Component} from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./modules/layout";
// import TestButton from "./modules/testButton";
import { fluentButton, provideFluentDesignSystem } from "@fluentui/web-components"
provideFluentDesignSystem().register(fluentButton());

const TestButton = asyncComponent(() => import("./modules/testButton"));


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

function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
 
      this.state = {
        component: null
      };
    }
 
    async componentDidMount() {
      const { default: component } = await importComponent();
 
      this.setState({
        component: component
      });
    }
 
    render() {
      const C = this.state.component;
 
      return C ? <C {...this.props} /> : null;
    }
  }
 
  return AsyncComponent;
 }

export default hot(module)(App);