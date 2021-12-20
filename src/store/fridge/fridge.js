import { addIngredientToLocalStorage, getIngredientsFormLocalStorage } from "services/localStorage";

//initial state
const initialState = {ingredients : getIngredientsFormLocalStorage()}

//ACTION TYPES
const ADD_INGREDIENT_TO_FRIDGE = "ADD_INGREDIENT_TO_FRIDGE";
const REMOVE_INGREDIENT_FROM_FRIDGE = "REMOVE_INGREDIENT_FROM_FRIDGE";

//REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT_TO_FRIDGE:
      return [...state, action.payload];
    case REMOVE_INGREDIENT_FROM_FRIDGE:
      return state.filter((ingredient) => ingredient.id !== action.payload);
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

//SELECTORS
export const getIngredientsFormFridge = (state) => state.fridge;

export default reducer;
