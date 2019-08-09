import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRecipes } from "../../store/actions";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Spinner from "react-spinkit";
import RecipesList from "./RecipesList/RecipesList";

const MainPage = ({ recipes, loading, error, getRecipes }) => {
  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  if (error) {
    return <ErrorMessage againClick={getRecipes} />;
  } else if (loading) {
    return <Spinner name="three-bounce" color="black" fadeIn="none" />;
  } else {
    return <RecipesList recipes={recipes} />;
  }
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
