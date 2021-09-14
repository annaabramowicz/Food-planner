import { Button as ChakraButton } from "@chakra-ui/button";

const Button = (props) => {
  const getColorScheme = () => {
    if (props.type === "positive") {
      return "teal";
    } else if (props.type === "negative") {
      return "red";
    }
    return "orange";
  };

  return (
    <ChakraButton colorScheme={getColorScheme()} m={2} variant="outline" {...props} />
  );
};

export default Button;
