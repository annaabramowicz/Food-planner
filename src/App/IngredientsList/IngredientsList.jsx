import Item from "./Ingredient/Ingredient";
import ingredients from "../ingredients";
import Flex from "components/Flex/Flex";
import PropTypes from "prop-types";

function IngredientsList() {
  const substring = "oma";
  const filteredIngredients = ingredients.filter((ingredient) =>
    ingredient.name.toLowerCase().includes(substring)
  );
  console.log(filteredIngredients);
  return (
    <Flex flexWrap="wrap" justifyContent="space-around">
      {filteredIngredients.map((ingredient) => (
        <Item key={ingredient.id} ingredient={ingredient} />
      ))}
    </Flex>
  );
}

IngredientsList.propTypes = {
  ingredients: PropTypes.array,
};

export default IngredientsList;
