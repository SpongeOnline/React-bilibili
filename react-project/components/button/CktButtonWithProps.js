import React from "react"

const CktButton = (props) => {
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
  
  export default CktButton;