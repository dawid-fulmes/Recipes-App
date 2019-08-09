import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRecipes } from "../../store/actions";

const MainPage = ({ recipes, loading, error, getRecipes }) => {
  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  let output = (
    <ul>
      {recipes.map(({ name, _id }) => (
        <li key={_id}>{name}</li>
      ))}
    </ul>
  );

  if (error) {
    output = <p>something went wrong</p>;
  } else if (loading) {
    output = <p>Loading...</p>;
  }
  return <div>{output}</div>;
};

const mapStateToProps = state => ({
  recipes: state.recipes,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = dispatch => ({
  getRecipes: () => dispatch(getRecipes()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
