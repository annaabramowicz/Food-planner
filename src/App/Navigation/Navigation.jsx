import Flex from "components/Flex/Flex";
import Link from "components/Link/Link";
import Icon from "components/Icon/Icon";
import { BrowserRouter as NavLink } from "react-router-dom";
import { colorPrimary } from "../style/theme/theme";
import SearchBar from "App/SearchBar/SearchBar";
import Logo from "App/Logo/Logo";

const Navigation = ({ routes }) => (
  <Flex
    justifyContent="space-between"
    pos="fixed"
    bottom={{ sm: "0" }}
    top={{ md: "0" }}
    w={{ sm: "600px", md: "100%" }}
    h="100px"
    m="0 auto"
    borderBottom={{ md: "3px solid black" }}
  >
    <Flex>
      <Logo />
      <Flex justifyContent="space-between" w={{ sm: "600px", md: "300px" }}>
        {routes.map((route) => (
          <NavLink key={route.path} to={route.path}>
            <Link
              _hover={{
                background: "white",
                color: colorPrimary,
              }}
            >
              <Flex m={2} flexDirection="column">
                <Icon display={{ md: "none" }} as={route.icon} />
                {route.text}
              </Flex>
            </Link>
          </NavLink>
        ))}
      </Flex>
    </Flex>
    <SearchBar display={{ sm: "none", md: "block" }} />
  </Flex>
);

export default Navigation;
