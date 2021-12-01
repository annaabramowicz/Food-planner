import Item from "./Recipe/Recipe";
import Flex from "components/Flex/Flex";
import { useSelector } from "react-redux";
import { getRecipes } from "store/recipes/recipes";
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";

function RecipesList() {
  const recipesState = useSelector(getRecipes);
  const renderedRecipes =
    recipesState.recipes?.length !== 0
      ? recipesState.recipes
      : recipesState.initialRecipes;
  return (
    <>
      {recipesState.loading ? (
        <LoadingSpinner />
      ) : (
        <Flex flexWrap="wrap" justifyContent="space-between">
          {renderedRecipes.map((recipe) => (
            <Item key={recipe.id} recipe={recipe} />
          ))}
        </Flex>
      )}
    </>
  );
}

export default RecipesList;
