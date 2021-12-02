import Flex from "components/Flex/Flex";
import Text from "components/Text/Text";
import Image from "components/Image/Image";
import Icon from "components/Icon/Icon";
import Tag from "components/Tag/Tag";
import { IoFlameOutline } from "react-icons/io5";
import { colorFourth } from "App/style/theme/theme";

function Recipe({ recipe }) {
  const [calories, protein, fat, carb] = recipe.nutrition.nutrients;

  return (
    <Flex
      p={1}
      m={1}
      flexDirection="column"
      alignItems="flex-start"
      w={{ base: "210px", sm: "260px" }}
      minH={{ base: "331px", sm: "311px" }}
      justifyContent="flex-start"
      pos="relative"
    >
      <Flex h={{ base: "230px", sm: "180px" }} minW="210px">
        <Image
          borderRadius="10px"
          height={{ base: "230px", sm: "180px" }}
          htmlHeight="200px"
          mb="15px"
          src={recipe.image}
          alt={recipe.title}
          objectFit="none"
        />
      </Flex>
      <Text textAlign="start">{recipe.title}</Text>
      <Flex mb="2px" justifyContent="flex-start">
        <Tag fontSize="sm" p="5px" mr={1}>
          Protein {Math.floor(protein.amount)} {fat.unit}
        </Tag>
        <Tag fontSize="sm" p="5px" mr={1}>
          Fat {Math.floor(fat.amount)} {fat.unit}
        </Tag>
        <Tag fontSize="sm" p="5px">
          Carb {Math.floor(carb.amount)} {carb.unit}
        </Tag>
      </Flex>
      <Flex
        pos={{ base: "absolute", sm: "static" }}
        left="15px"
        top="175px"
        borderRadius="5px"
        bg="white"
        p="2px 6px 2px 4px"
        border="1px"
        borderColor={colorFourth}
        mt={1}
      >
        <Icon w="20px" as={IoFlameOutline} />
        <Text mt="2px">{Math.floor(calories.amount)} Cal</Text>
      </Flex>
    </Flex>
  );
}

export default Recipe;
