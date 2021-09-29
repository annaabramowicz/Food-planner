import { get } from "axios";
import config from "config/env";

const API_URL = "https://api.spoonacular.com/";

export const getRecipesFromApi = () =>
  get(`${API_URL}recipes/complexSearch?apiKey=${config.apiKey}`);
