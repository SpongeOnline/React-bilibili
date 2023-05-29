import React from "react"

const TestButton = (props) => {
    const handleClick = () => {
      alert("Just clicked this button.")
    };

    return (
      <div>
        <button type="button" onClick={handleClick}>
            {props.buttonName}
        </button>
      </div>
    );
};

class Welcome1 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: "789",
    };
    this.clickButton = ()=> {
      // alert("Ckt is a good man.")
      this.props.onValueChange("890")
    }
  }
  
  render(){
    const ParentStyle = {
      border: '2px',
      borderStyle: 'solid',
      color: 'red'
    }

    return(
      <div>
        {/* No parameters in render() and should refer this to get the props value  */}
        <button style={ParentStyle} onClick={this.props.event}>{this.props.name}</button><br/>
        <button onClick={this.clickButton}>按钮</button>
      </div>
    );
  }
}
  
export default Welcome1;