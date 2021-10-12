import Flex from "components/Flex/Flex";

const Navigation = (props) => (
  <Flex
    justifyContent="space-between"
    pos="fixed"
    bottom="0"
    w="600px"
    h="100px"
    m="0 auto"
    {...props}
  />
);

export default Navigation;
