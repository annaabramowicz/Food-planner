import Flex from "components/Flex/Flex";
import Link from "components/Link/Link";
import Icon from "components/Icon/Icon";
import { BrowserRouter as NavLink } from "react-router-dom";
import { colorPrimary } from "../style/theme/theme";

const Navigation = ({ routes }) => (
  <Flex
    justifyContent="space-between"
    pos="fixed"
    bottom="0"
    w="600px"
    h="100px"
    m="0 auto"
  >
    {routes.map((route) => (
      <NavLink key={route.path} to={route.path}>
        <Link
          _hover={{
            background: "white",
            color: colorPrimary,
          }}
        >
          <Flex m={2} flexDirection="column">
            <Icon as={route.icon} />
            {route.text}
          </Flex>
        </Link>
      </NavLink>
    ))}
  </Flex>
);

export default Navigation;
