import React from "react"
import { fluentButton, provideFluentDesignSystem } from "@fluentui/web-components"
provideFluentDesignSystem().register(fluentButton());

const testButton = () => {
    return (
      <div>
        {/* <button type="button">
            I'm button
        </button> */}
        <fluent-button>te1st button</fluent-button>
      </div>
    );
  };
  
  export default testButton;