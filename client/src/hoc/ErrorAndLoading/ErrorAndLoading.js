import React from "react";
import Spinner from "react-spinkit";

import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const ErrorAndLoading = ({ error, loading, againClick, children }) => {
  if (error) {
    return <ErrorMessage againClick={againClick} />;
  } else if (loading) {
    return <Spinner name="three-bounce" color="black" fadeIn="none" />;
  } else {
    return children;
  }
};

export default ErrorAndLoading;
