import React from "react"

const main = (props) => {
    const handleClick = () => {
      alert(props.name + " just clicked this button.")
    };
  
    return (
      <div>
        <button type="button" onClick={handleClick}>
            test
        </button>
      </div>
    );
  };
  
  export default main;