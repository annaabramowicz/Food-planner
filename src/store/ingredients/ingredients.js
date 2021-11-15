import { getIngredientsFromApi } from "services/foodApi";
import ingredients from "App/ingredients";

//initial state
const initialState = ingredients;

//ACTION TYPES
const NAMESPACE = "GET_INGREDIENTS_";
const GET_INGREDIENTS_STARTED = `${NAMESPACE}STARTED`;
const GET_INGREDIENTS_SUCCESS = `${NAMESPACE}SUCCESS`;
const GET_INGREDIENTS_FAIL = `${NAMESPACE}FAIL`;

//REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_SUCCESS:
      return action.payload?.length ? [...action.payload] : initialState;
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
const getIngredientsFail = (error) => ({ type: GET_INGREDIENTS_FAIL, error });

// THUNKS
export const getIngredientsAsyc = (searchTerm) => async (dispatch) => {
  dispatch(getIngredientsStarted());
  try {
    const result = await getIngredientsFromApi(searchTerm);
    dispatch(getIngredientsSuccess(result));
  } catch (err) {
    dispatch(getIngredientsFail(err));
  }
};

//SELECTORS
export const getIngredients = (state) => state.ingredients;

export default reducer;
