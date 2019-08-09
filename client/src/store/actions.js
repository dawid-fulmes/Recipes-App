import axios from "axios";

import {
  GET_RECIPES_START,
  GET_RECIPES_SUCCESS,
  GET_RECIPES_FAIL,
} from "./actionTypes";

const getRecipesStart = () => ({
  type: GET_RECIPES_START,
});

const getRecipesSuccess = recipes => ({
  type: GET_RECIPES_SUCCESS,
  recipes,
});
const getRecipesFail = error => ({
  type: GET_RECIPES_FAIL,
  error,
});

export const getRecipes = () => {
  return dispatch => {
    dispatch(getRecipesStart());
    axios
      .get("api/recipes")
      .then(({ data }) => {
        dispatch(getRecipesSuccess(data));
      })
      .catch(err => dispatch(getRecipesFail(err)));
  };
};
