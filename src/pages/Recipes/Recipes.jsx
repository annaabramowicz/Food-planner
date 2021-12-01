import RecipesList from "App/RecipesList/RecipesList";
import { useDispatch } from "react-redux";
import { getInitialRecipesAsync } from "store/recipes/recipes";
import { useEffect } from "react";

const Recipes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitialRecipesAsync());
  }, [dispatch]);

  return <RecipesList />;
};

export default Recipes;
