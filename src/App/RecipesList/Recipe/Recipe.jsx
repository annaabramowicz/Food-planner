import Flex from "components/Flex/Flex";
import Text from "components/Text/Text";
import Image from "components/Image/Image";
import Icon from "components/Icon/Icon";
import { IoFlameOutline } from "react-icons/io5";
import { colorFourth } from "App/style/theme/theme";

function Recipe({ recipe }) {
  const nutrientPath = recipe.nutrition.nutrients;
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
          htmlHeight={{ base: "230px", sm: "180px" }}
          mb="15px"
          src={recipe.image}
          alt={recipe.title}
          objectFit={{ base: "cover", sm: "contain" }}
        />
      </Flex>
      <Text textAlign="start">{recipe.title}</Text>
      <Flex w="200px" justifyContent="flex-start">
        <Text fontSize="sm" mr={2}>
          {nutrientPath[1].title} {Math.floor(nutrientPath[1].amount)}{" "}
          {nutrientPath[1].unit}
        </Text>
        <Text fontSize="sm" mr={2}>
          {nutrientPath[2].title} {Math.floor(nutrientPath[2].amount)}{" "}
          {nutrientPath[2].unit}
        </Text>
        <Text fontSize="sm">
          Carb {Math.floor(nutrientPath[3].amount)} {nutrientPath[3].unit}
        </Text>
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
        <Text mt="2px">{Math.floor(nutrientPath[0].amount)} Cal</Text>
      </Flex>
    </Flex>
  );
}

export default Recipe;
