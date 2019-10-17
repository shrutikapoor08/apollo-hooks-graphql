import React from "react";

const Delete = props => {
  return (
    <button
      type="submit"
      onClick={props.onClick}
      className="mui-btn mui-btn--flat mui-btn--primary"
    >
      Delete
    </button>
  );
};

export default Delete;
