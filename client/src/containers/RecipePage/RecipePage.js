import React from "react";

const RecipePage = ({ match }) => {
  return <div>Page of recipe #{match.params.id}</div>;
};

export default RecipePage;
