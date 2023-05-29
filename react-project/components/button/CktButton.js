import React from "react";

function CktButton(props) {
    return <h1>Hello, {props.name}</h1>;
}

class Welcome extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
}

// Parameter can be empty
const Test = (props) => <h1>{props.name}:test</h1>

class Welcome1 extends React.Component{
    render(){
      return(
        <div>
          {/* No parameters in render() and should refer this to get the props value  */}
          <button>{this.props.name}</button><br/>
          <button>按钮</button>
        </div>
      );
    }
}

const CktButtonOnlick = (props) => {
    const handleClick = () => {
      alert(props.name + " just clicked this button.")
    };
  
    return (
      <div>
        <button type="button" onClick={handleClick}>
            {props.name}
        </button>
      </div>
    );
};
  
class CktButtonConstructor extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: "123",
      };
    }
  
    render() {
      return (
        <button onClick={() => { 
            console.log(this.state.value)
            this.setState({
                value: "999"
            })
            console.log(this.state.value)
        }}>
          {this.state.value}
        </button>
      );
    }
}

class CktButtonCallBack extends React.Component {
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
            <CktButtonCallBack onClick={this.clickButton}></CktButtonCallBack>
        </div>
        
      );
    }
}

class ButtonSetStatus extends Component{

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

export {CktButtonCallBack};