const FRIDGE = "fridge";

export const getIngredientsFormLocalStorage = () =>
  JSON.parse(localStorage.getItem(FRIDGE));

export const addIngredientToLocalStorage = (ingredient) => {
  const existingIngredients = getIngredientsFormLocalStorage();
  const newFridge = [...existingIngredients, ingredient];
  localStorage.setItem(FRIDGE, JSON.stringify(newFridge));
};


