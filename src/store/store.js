import { createStore, applyMiddleware } from "redux";
import recipesReducer from "./recipes/recipes";
import thunkMiddleware from "redux-thunk";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ingredientsReducer from "./ingredients/ingredients";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const reducer = combineReducers({
  recipes: recipesReducer,
  ingredients: ingredientsReducer,
});

const store = createStore(reducer, composedEnhancer);

export default store;
