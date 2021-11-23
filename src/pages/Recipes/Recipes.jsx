import RecipesList from "App/RecipesList/RecipesList";
import { useDispatch } from "react-redux";
import { getRecipesAsyc } from "store/recipes/recipes";
import { useEffect } from "react";

const Recipes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipesAsyc());
  }, [dispatch]);

  return <RecipesList />;
};

export default Recipes;
