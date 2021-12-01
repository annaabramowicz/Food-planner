import RecipesList from "App/RecipesList/RecipesList";
import { useDispatch } from "react-redux";
import { getRecipesAsync } from "store/recipes/recipes";
import { useEffect } from "react";

const Recipes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipesAsync());
  }, [dispatch]);

  return <RecipesList />;
};

export default Recipes;
