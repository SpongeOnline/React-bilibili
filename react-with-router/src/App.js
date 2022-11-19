import React, { Component} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./modules/main"

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
         
          </Route>
        </Routes>
       
      </BrowserRouter>
    );
  }
}

export default App;
