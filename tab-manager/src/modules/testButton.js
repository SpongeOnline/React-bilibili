import React from "react"

class TestButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "123",
    };
    this.clickButton = ()=> {
      alert("Ckt is a good man.")
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