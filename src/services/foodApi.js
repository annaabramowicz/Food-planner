import { get } from "axios";
import config from "config/env";

export const getRecipesBySearchTermFromApi = (searchTerm) =>
  get(
    `${config.apiUrl}recipes/complexSearch?query=${searchTerm}&minFat=0&minProtein=0&minCalories=0&minCarbs=0&apiKey=${config.apiKey}`
  ).then(({ data }) => data.results);

export const getRecipesFromApi = () =>
  get(
    `${config.apiUrl}recipes/complexSearch?number=15&minFat=0&minProtein=0&minCalories=0&minCarbs=0&apiKey=${config.apiKey}`
  ).then(({ data }) => data.results);

export const getIngredientsBySearchTermFromApi = (searchTerm) =>
  get(
    `${config.apiUrl}food/ingredients/search?query=${searchTerm}&apiKey=${config.apiKey}`
  ).then(({ data }) => data.results);
