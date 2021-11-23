import {
  getRecipesFromApi,
  getRecipesBySearchTermFromApi,
} from "services/foodApi";

//initial state
const initialState = { recipes: [], loading: false };

//ACTION TYPES
const NAMESPACE = "GET_RECIPES_";
const GET_RECIPES_STARTED = `${NAMESPACE}STARTED`;
const GET_RECIPES_SUCCESS = `${NAMESPACE}SUCCESS`;
const GET_RECIPES_FAIL = `${NAMESPACE}FAIL`;

//REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES_STARTED:
      return {
        ...state,
        loading: true,
      };
    case GET_RECIPES_SUCCESS:
      return {
        recipes: action.payload?.length ? [...action.payload] : [],
        loading: false,
      };
    case GET_RECIPES_FAIL:
      return {
        ...state,
        loading: false,
      };
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
export const getRecipesAsyc = (searchTerm) => async (dispatch) => {
  dispatch(getRecipesStarted());
  try {
    const result = searchTerm
      ? await getRecipesBySearchTermFromApi(searchTerm)
      : await getRecipesFromApi();

    dispatch(getRecipesSuccess(result));
  } catch (err) {
    dispatch(getRecipesFail(err));
  }
};

//SELECTORS
export const getRecipes = (state) => state.recipes;

export default reducer;
