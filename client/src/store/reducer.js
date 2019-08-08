import {
  GET_RECIPES_START,
  GET_RECIPES_SUCCESS,
  GET_RECIPES_FAIL,
} from "./actionTypes";

const initialState = {
  recipes: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_RECIPES_SUCCESS:
      return {
        ...state,
        loading: false,
        recipes: action.recipes,
      };
    case GET_RECIPES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
