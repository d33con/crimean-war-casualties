import React from "react";
import PropTypes from "prop-types";
import "./App.css";

const UpdateDataButton = props => {
  return (
    <div className="data-update-container">
      <div className="update-button" onClick={props.onClick}>
        {`Showing: Casualties by ${props.dataStyle}`}
      </div>
    </div>
  );
};

UpdateDataButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default UpdateDataButton;
