import { get } from "axios";
import config from "config/env";

export const getRecipesFromApi = () =>
  get(`${config.apiUrl}recipes/complexSearch?apiKey=${config.apiKey}`).then(
    ({ data }) => data.results
  );

export const getIngredientsFromApi = (searchTerm) =>
  get(
    `${config.apiUrl}food/ingredients/search?query=${searchTerm}&apiKey=${config.apiKey}`
  ).then(({ data }) => data.results);
