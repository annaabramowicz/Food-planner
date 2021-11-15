import Item from "./Ingredient/Ingredient";
import Flex from "components/Flex/Flex";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getIngredients } from "store/ingredients/ingredients";


function IngredientsList() {
  const ingredientsList = useSelector(getIngredients);
  return (
    <Flex flexWrap="wrap" justifyContent="space-around">
      {ingredientsList.map((ingredient) => (
        <Item key={ingredient.id} ingredient={ingredient} />
      ))}
    </Flex>
  );
}

IngredientsList.propTypes = {
  ingredients: PropTypes.array,
};

export default IngredientsList;
