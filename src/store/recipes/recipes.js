import { getRecipesFromApi } from "services/foodApi";

//initial state
const initialState = [];

//ACTION TYPES
const NAMESPACE = "GET_RECIPES_";
const GET_RECIPES_STARTED = `${NAMESPACE}STARTED`;
const GET_RECIPES_SUCCESS = `${NAMESPACE}SUCCESS`;
const GET_RECIPES_FAIL = `${NAMESPACE}FAIL`;

//REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES_SUCCESS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

//ACTION CREATORS
const getRecipesStarted = () => ({ type: GET_RECIPES_STARTED });
const getRecipesSuccess = (result) => ({
  type: GET_RECIPES_SUCCESS,
  payload: result,
});
const getRecipesFail = (error) => ({ type: GET_RECIPES_FAIL, error });

// THUNKS
export const getRecipesAsyc = () => async (dispatch) => {
  dispatch(getRecipesStarted());
  try {
    const result = await getRecipesFromApi();
    dispatch(getRecipesSuccess(result));
  } catch (err) {
    dispatch(getRecipesFail(err));
  }
};

//SELECTORS
export const getAllRecipes = (state) => state;

export default reducer;
