import React from "react"

class TestButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "123",
    };
    this.clickButton = ()=> {
      // Returns all the tabs in the current window
      function getTabs() {
        alert("Many:" + alert.length)
        chrome.tabs.query({}, function(tabs) {
          alert(tabs[0]);
          console.log(tabs);
        });
      }
      alert(getTabs());    
      console.log("jijijij");
      alert("Cktt is a good man.")
    }
  }

  render() {
    return (
      <div>
          <button onClick={() => { 
              this.props.onClick()
          }}>
              {this.state.value}
          </button>
          <button onClick={this.clickButton}></button>
      </div>
      
    );
  }
}

export default TestButton;