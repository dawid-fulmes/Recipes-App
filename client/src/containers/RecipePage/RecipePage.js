import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getRecipes } from "../../store/actions";
import ErrorAndLoading from "../../hoc/ErrorAndLoading/ErrorAndLoading";

const RecipePage = ({ match, recipes, loading, error, getRecipes }) => {
  const [recipe] = recipes.filter(({ _id }) => _id === match.params.id);
  useEffect(() => {
    if (!recipe) {
      getRecipes();
    }
  }, [getRecipes, recipe]);

  let output = <div>There is recipe!!!!</div>;
  if (!recipe) {
    output = <div>There is NO recipe :(</div>;
  }

  return (
    <ErrorAndLoading error={error} loading={loading} againClick={getRecipes}>
      {output}
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
