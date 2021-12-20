import Flex from "components/Flex/Flex";
import Text from "components/Text/Text";
import { colorPrimary, colorFourth } from "App/style/theme/theme";
import Image from "components/Image/Image";
import config from "config/env";
import PropTypes from "prop-types";
import { Circle } from "@chakra-ui/react";
import Icon from "components/Icon/Icon";
import { IoCheckmark } from "react-icons/io5";
import { useState } from "react";
import {
  addIngredientToFridge,
  removeIngredientFromFridge,
  getIngredientsFormFridge,
} from "store/fridge/fridge";

import { useSelector, useDispatch } from "react-redux";

function Ingredient({ ingredient }) {
  const fridgeState = useSelector(getIngredientsFormFridge);
  const dispatch = useDispatch();
  const imageSize = `100x100`;
  const imagePath = `${config.apiCdnUrl}ingredients_${imageSize}/`;
  const [checkMark, setCheckMark] = useState(false);

  const selectedIngredient = () => {
    setCheckMark(!checkMark);
    dispatch(addIngredientToFridge(ingredient));
    const includeIngredient = fridgeState
      .map((elem) => elem.id)
      .include(ingredient.id);
    includeIngredient
      ? dispatch(removeIngredientFromFridge(ingredient.id))
      : dispatch(addIngredientToFridge(ingredient));
  };

  return (
    <Flex
      onClick={selectedIngredient}
      w="120px"
      h="130px"
      border="1px"
      borderColor={colorFourth}
      _hover={{
        boxShadow: `0px 0px 0px 2px ${colorPrimary}`,
        color: colorPrimary,
        cursor: "pointer",
      }}
      {...(checkMark && {
        boxShadow: `0px 0px 0px 2px ${colorPrimary}`,
        color: colorPrimary,
      })}
      borderRadius="10px"
      p="4px"
      flexDirection="column"
      m="5px"
    >
      <Flex h="100px" pos="relative">
        <Image
          maxH="80px"
          loading="lazy"
          htmlHeight="130px"
          src={imagePath + ingredient.image}
          alt={ingredient.name}
          opacity={checkMark ? 0.3 : 1}
        />
        {checkMark && (
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
  ingredient: PropTypes.object,
};

export default Ingredient;
