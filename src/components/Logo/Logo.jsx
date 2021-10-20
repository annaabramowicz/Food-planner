import Image from "components/Image/Image";
import logo from "./logo.png";

const Logo = () => (
  <Image
    display={{ sm: "none", md: "block" }}
    src={logo}
    alt="Logo"
    objectFit="cover"
    boxSize="50px"
  />
);

export default Logo;
