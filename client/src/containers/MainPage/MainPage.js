import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getRecipes } from "../../store/actions";
import RecipesList from "./RecipesList/RecipesList";
import ErrorAndLoading from "../../hoc/ErrorAndLoading/ErrorAndLoading";

const MainPage = ({ recipes, loading, error, getRecipes }) => {
  useEffect(() => {
    getRecipes();
  }, [getRecipes]);
  return (
    <ErrorAndLoading error={error} loading={loading} againClick={getRecipes}>
      <RecipesList recipes={recipes} />
    </ErrorAndLoading>
  );
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
