import React from "react";

const ErrorMessage = ({ againClick }) => {
  return (
    <div className="error">
      <p className="error__message">Something went wrong</p>
      <button className="button" onClick={againClick}>
        Try Again
      </button>
    </div>
  );
};

export default ErrorMessage;
