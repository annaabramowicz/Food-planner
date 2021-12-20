import Flex from "components/Flex/Flex";
import Text from "components/Text/Text";
import { colorFourth } from "App/style/theme/theme";
import Image from "components/Image/Image";
import config from "config/env";
import PropTypes from "prop-types";
import { Circle } from "@chakra-ui/react";
import Icon from "components/Icon/Icon";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { removeIngredientFromFridge } from "store/fridge/fridge";

function Ingredient({ ingredient }) {
  const dispatch = useDispatch();
  const imageSize = `100x100`;
  const imagePath = `${config.apiCdnUrl}ingredients_${imageSize}/`;
  const selectedIngredient = () => {
    dispatch(removeIngredientFromFridge(ingredient.id));
  };

  return (
    <Flex
      onClick={selectedIngredient}
      w="120px"
      h="130px"
      border="1px"
      borderColor={colorFourth}
      pos="relative"
      borderRadius="10px"
      p="4px"
      flexDirection="column"
      m="5px"
    >
      <Flex h="100px">
        <Image
          maxH="80px"
          loading="lazy"
          htmlHeight="130px"
          src={imagePath + ingredient.image}
          alt={ingredient.name}
        />
        <Circle
          pos="absolute"
          top="95%"
          left="95%"
          transform="translate(-50%,-50%)"
          size="30px"
          bg="white"
          border="1px"
          borderColor={colorFourth}
          color="red"
          _hover={{
            boxShadow: `0px 0px 0px 1px red`,
            cursor: "pointer",
          }}
        >
          <Icon as={IoCloseOutline} />
        </Circle>
      </Flex>
      <Text>{ingredient.name}</Text>
    </Flex>
  );
}

Ingredient.propTypes = {
  ingredient: PropTypes.object,
};

export default Ingredient;
