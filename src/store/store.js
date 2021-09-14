import { createStore } from "redux";
import todosReducer from "./todos/todos";
import { combineReducers } from "redux";

//główny reducer dla wszystkich części
const reducer = combineReducers({
  // slice, czyli wycinki głownego
  todos: todosReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
