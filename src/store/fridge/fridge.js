import {
  addIngredientToLocalStorage,
  getIngredientsFromLocalStorage,
  removeIngredientFromLocalStorage,
} from "services/localStorage";

//initial state
const initialState = { ingredients: getIngredientsFromLocalStorage() || [] };

//ACTION TYPES
const ADD_INGREDIENT_TO_FRIDGE = "ADD_INGREDIENT_TO_FRIDGE";
const REMOVE_INGREDIENT_FROM_FRIDGE = "REMOVE_INGREDIENT_FROM_FRIDGE";

//REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT_TO_FRIDGE:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case REMOVE_INGREDIENT_FROM_FRIDGE:
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (ingredient) => ingredient.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

//ACTION CREATORS
export const addIngredientToFridge = (ingredient) => ({
  type: ADD_INGREDIENT_TO_FRIDGE,
  payload: ingredient,
});
export const removeIngredientFromFridge = (id) => ({
  type: REMOVE_INGREDIENT_FROM_FRIDGE,
  payload: id,
});
export const addIngredientToFridgeThunk = (ingredient) => (dispatch) => {
  addIngredientToLocalStorage(ingredient);
  dispatch(addIngredientToFridge(ingredient));
};
export const removeIngredientFromFridgeThunk = (id) => (dispatch) => {
  removeIngredientFromLocalStorage(id);
  dispatch(removeIngredientFromFridge(id));
};

//SELECTORS
export const getFridgeState = (state) => state.fridge;

export default reducer;
