import Item from "./Ingredient/Ingredient";
import Flex from "components/Flex/Flex";
import { useSelector } from "react-redux";
import { getIngredients } from "store/ingredients/ingredients";
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";

function IngredientsList(props) {
  const ingredientsState = useSelector(getIngredients);

  return (
    <>
      {ingredientsState.loading ? (
        <LoadingSpinner />
      ) : (
        <Flex flexWrap="wrap" justifyContent="space-around" {...props}>
          {ingredientsState.ingredients.map((ingredient) => (
            <Item key={ingredient.id} ingredient={ingredient} />
          ))}
        </Flex>
      )}
    </>
  );
}

export default IngredientsList;
