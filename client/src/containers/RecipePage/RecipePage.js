import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRecipes } from "../../store/actions";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Spinner from "react-spinkit";

const RecipePage = ({ match, recipes, loading, error, getRecipes }) => {
  const [recipe] = recipes.filter(({ _id }) => _id === match.params.id);
  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  if (error) {
    return <ErrorMessage againClick={getRecipes} />;
  } else if (loading) {
    return <Spinner name="three-bounce" color="black" fadeIn="none" />;
  } else {
    if (recipe) {
      return <div>There is recipe!!!!</div>;
    } else {
      return <div>There is no recipe :(</div>;
    }
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
)(RecipePage);
