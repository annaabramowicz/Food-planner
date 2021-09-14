import { Flex as ChakraFlex } from "@chakra-ui/layout";

const Flex = (props) => {
  return (
    <ChakraFlex
    //   height="5vh" //??????
      alignItems="center"
      justifyContent="center"
      {...props}
    />
  );
};

export default Flex;
