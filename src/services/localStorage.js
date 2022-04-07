const FRIDGE = "fridge";

export const getIngredientsFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(FRIDGE));

export const addIngredientToLocalStorage = (ingredient) => {
  const existingIngredients = getIngredientsFromLocalStorage() || [];
  const newFridge = [...existingIngredients, ingredient];
  localStorage.setItem(FRIDGE, JSON.stringify(newFridge));
};

export const removeIngredientFromLocalStorage = (id) => {
  const existingIngredients = getIngredientsFromLocalStorage();
  const newFridge = existingIngredients.filter(
    (ingredient) => ingredient.id !== id
  );
  localStorage.setItem(FRIDGE, JSON.stringify(newFridge));
};
