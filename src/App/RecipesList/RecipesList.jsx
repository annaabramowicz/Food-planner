import Item from "./Recipe/Recipe";
import Flex from "components/Flex/Flex";
import recipes from "App/recipes";

function RecipesList() {
  return (
    <Flex flexWrap="wrap" justifyContent="space-between">
      {recipes.map((recipe) => (
        <Item key={recipe.id} recipe={recipe} />
      ))}
    </Flex>
  );
}

export default RecipesList;
