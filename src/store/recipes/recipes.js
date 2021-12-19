import {
  getRecipesFromApi,
  getRecipesBySearchTermFromApi,
} from "services/foodApi";

//initial state
const initialState = { recipes: [], initialRecipes: [], loading: false };

//ACTION TYPES
const GET_RECIPES_STARTED = `GET_RECIPES_STARTED`;
const GET_RECIPES_SUCCESS = `GET_RECIPES_SUCCESS`;
const GET_INITIAL_RECIPES_SUCCESS = `GET_INITIAL_RECIPES_SUCCESS`;
const GET_RECIPES_FAIL = `GET_RECIPES_FAIL`;

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
        initialRecipes: [...state.initialRecipes],
        loading: false,
      };
    case GET_INITIAL_RECIPES_SUCCESS:
      return {
        recipes: [],
        initialRecipes: [...action.payload],
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
const getInitialRecipesSuccess = (result) => ({
  type: GET_INITIAL_RECIPES_SUCCESS,
  payload: result,
});
const getRecipesFail = (error) => ({ type: GET_RECIPES_FAIL, error });

// THUNKS
export const getRecipesAsync =
  (searchTerm, postAction) => async (dispatch, getState) => {
    const state = getState();
    if (searchTerm) {
      dispatch(getRecipesStarted(searchTerm));
      if (postAction) {
        postAction();
      }
      try {
        const result = await getRecipesBySearchTermFromApi(searchTerm);
        dispatch(getRecipesSuccess(result));
      } catch (err) {
        dispatch(getRecipesFail(err));
      }
    } else {
      const result = getRecipes(state).initialRecipes;
      dispatch(getInitialRecipesSuccess(result));
    }
  };

export const getInitialRecipesAsync = () => async (dispatch, getState) => {
  dispatch(getRecipesStarted());
  const state = getState();
  const hasInitialRecipesAlreadyFetched =
    getRecipes(state).initialRecipes.length >= 1;
  if (!hasInitialRecipesAlreadyFetched) {
    try {
      const result = await getRecipesFromApi();
      dispatch(getInitialRecipesSuccess(result));
    } catch (err) {
      dispatch(getRecipesFail(err));
    }
  } else {
    const result = getRecipes(state).initialRecipes;
    dispatch(getInitialRecipesSuccess(result));
  }
};

//SELECTORS
export const getRecipes = (state) => state.recipes;

export default reducer;
