import Flex from "components/Flex/Flex";
import Text from "components/Text/Text";
import { colorPrimary, colorFourth } from "App/style/theme/theme";
import Image from "components/Image/Image";
import config from "config/env";
import PropTypes from "prop-types";
import { Circle } from "@chakra-ui/react";
import Icon from "components/Icon/Icon";
import { IoCheckmark } from "react-icons/io5";
import {
  addIngredientToFridgeThunk,
  getFridgeState,
  removeIngredientFromFridgeThunk,
} from "store/fridge/fridge";
import { useSelector, useDispatch } from "react-redux";

function Ingredient({ ingredient }) {
  const { ingredients } = useSelector(getFridgeState);
  const dispatch = useDispatch();
  const imageSize = `100x100`;
  const imagePath = `${config.apiCdnUrl}ingredients_${imageSize}/`;
  const isIngredientSelected = ingredients?.some(
    (storeIngredient) => storeIngredient.id === ingredient.id
  );

  const toggleIngredient = () => {
    isIngredientSelected
      ? dispatch(removeIngredientFromFridgeThunk(ingredient.id))
      : dispatch(addIngredientToFridgeThunk(ingredient));
  };

  return (
    <Flex
      onClick={toggleIngredient}
      w="120px"
      h="130px"
      border="1px"
      borderColor={colorFourth}
      _hover={{
        boxShadow: `0px 0px 0px 2px ${colorPrimary}`,
        color: colorPrimary,
        cursor: "pointer",
      }}
      {...(isIngredientSelected && {
        boxShadow: `0px 0px 0px 2px ${colorPrimary}`,
        color: colorPrimary,
      })}
      borderRadius="10px"
      p="4px"
      flexDirection="column"
      m="10px 5px 0 5px"
      bg="white"
    >
      <Flex h="100px" pos="relative">
        <Image
          maxH="80px"
          loading="lazy"
          htmlHeight="130px"
          src={imagePath + ingredient.image}
          alt={ingredient.name}
          opacity={isIngredientSelected ? 0.3 : 1}
        />
        {isIngredientSelected && (
          <Circle
            pos="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%,-50%)"
            size="30px"
            bg={colorPrimary}
            color="white"
          >
            <Icon as={IoCheckmark} />
          </Circle>
        )}
      </Flex>
      <Text>{ingredient.name}</Text>
    </Flex>
  );
}

Ingredient.propTypes = {
  ingredient: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default Ingredient;
