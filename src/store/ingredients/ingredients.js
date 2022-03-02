import { getIngredientsBySearchTermFromApi } from "services/foodApi";
import ingredients from "App/ingredients";

//initial state
const initialState = {
  initialIngredients: ingredients,
  searchedIngredients: [],
  loading: false,
};

//ACTION TYPES
const NAMESPACE = "GET_INGREDIENTS_";
const GET_INGREDIENTS_STARTED = `${NAMESPACE}STARTED`;
const GET_INGREDIENTS_SUCCESS = `${NAMESPACE}SUCCESS`;
const GET_INITIAL_INGREDIENTS_SUCCESS = `GET_INITIAL_INGREDIENTS_SUCCESS`;
const GET_INGREDIENTS_FAIL = `${NAMESPACE}FAIL`;

//REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_STARTED:
      return {
        ...state,
        loading: true,
      };
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        searchedIngredients: action.payload?.length ? [...action.payload] : [],
        loading: false,
      };
    case GET_INITIAL_INGREDIENTS_SUCCESS:
      return {
        ...state,
        searchedIngredients: [],
        loading: false,
      };
    case GET_INGREDIENTS_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

//ACTION CREATORS
const getIngredientsStarted = () => ({ type: GET_INGREDIENTS_STARTED });
const getIngredientsSuccess = (result) => ({
  type: GET_INGREDIENTS_SUCCESS,
  payload: result,
});
const getInitialIngredientsSuccess = (result) => ({
  type: GET_INITIAL_INGREDIENTS_SUCCESS,
  payload: result,
});
const getIngredientsFail = (error) => ({ type: GET_INGREDIENTS_FAIL, error });

// THUNKS
export const getIngredientsAsync =
  (searchTerm) => async (dispatch, getState) => {
    const state = getState();
    dispatch(getIngredientsStarted());
    if (searchTerm) {
      try {
        const result = await getIngredientsBySearchTermFromApi(searchTerm);
        dispatch(getIngredientsSuccess(result));
      } catch (err) {
        dispatch(getIngredientsFail(err));
      }
    } else {
      const result = getIngredients(state).initialIngredients;
      dispatch(getInitialIngredientsSuccess(result));
    }
  };

//SELECTORS
export const getIngredients = (state) => state.ingredients;

export default reducer;
