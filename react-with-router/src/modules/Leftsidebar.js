import React from "react"

const LeftSideBar = (props) => {
    const handleClick = () => {
      alert(props.name + " just clicked this button.")
    };
  
    return (
      <div>
        <button type="button" onClick={handleClick}>
            test test test 123
        </button>
      </div>
    );
  };
  
  export default LeftSideBar;