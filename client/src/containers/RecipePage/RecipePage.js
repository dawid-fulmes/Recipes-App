import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getRecipes } from "../../store/actions";
import ErrorAndLoading from "../../hoc/ErrorAndLoading/ErrorAndLoading";
import RecipeDetails from "./RecipeDetails/RecipeDetails";

const RecipePage = ({
  match,
  history,
  recipes,
  loading,
  error,
  getRecipes,
}) => {
  const [recipe] = recipes.filter(({ _id }) => _id === match.params.id);
  useEffect(() => {
    if (!recipe) {
      getRecipes();
    }
  }, [getRecipes, recipe]);

  let output = <RecipeDetails {...recipe} />;
  let className = "recipe-page";
  if (!recipe) {
    className += " recipe-page--no-recipe";
    output = (
      <p className="recipe-page__message">There is no recipe in database :(</p>
    );
  }

  return (
    <ErrorAndLoading error={error} loading={loading} againClick={getRecipes}>
      <div className={className}>
        {output}
        <button className="button" onClick={() => history.push("/")}>
          Go back to List
        </button>
      </div>
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
)(RecipePage);
