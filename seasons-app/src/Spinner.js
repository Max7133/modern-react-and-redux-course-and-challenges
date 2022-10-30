import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

// Obj that is going to provide some Default Properties to this component
Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
