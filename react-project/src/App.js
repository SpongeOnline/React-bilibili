import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import TestButton from "../components/button/TestButton"

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      value: "Click here",
    };
    this.clickButton = ()=> {
      alert("hahahha")
    };
    this.listener = this.listener.bind(this);
  }

  listener(newValue) {
    this.setState({
      value: newValue
    })
  }

  render(){
    return(
      <div className="App">
        <h1>{this.state.value}</h1>
        <TestButton 
          name={this.state.value} 
          event={this.clickButton}
          onValueChange={this.listener}/>
      </div>
    );
  }
}

export default hot(module)(App);