import Flex from "components/Flex/Flex";
import Heading from "components/Heading/Heading";
import Image from "components/Image/Image";

const Logo = () => (
  <Flex alignItems="center">
    <Image
      display={{ sm: "none", md: "block" }}
      src="logo.png"
      alt="Logo"
      objectFit="cover"
      boxSize="50px"
    />
    <Heading display={{ sm: "none", md: "block" }} w="150px">
      Food planer
    </Heading>
  </Flex>
);

export default Logo;
