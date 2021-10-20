import Flex from "components/Flex/Flex";
import Icon from "components/Icon/Icon";
import { NavLink } from "react-router-dom";
import SearchBar from "App/SearchBar/SearchBar";
import Logo from "components/Logo/Logo";
import { useState } from "react";
import {
  colorPrimary,
  colorPrimaryDark,
  colorFourth,
} from "../style/theme/theme";

const Navigation = ({ routes }) => {
  const [activePath, setActivePath] = useState("/");
  return (
    <Flex
      justifyContent="space-between"
      pos={{ sm: "fixed" }}
      bottom={{ sm: "0" }}
      top={{ md: "0" }}
      w={{ sm: "600px", md: "100%" }}
      h="100px"
      m="0 auto"
      borderBottom={{ md: `3px solid ${colorFourth}` }}
    >
      <Flex ml={{ md: 20 }}>
        <Logo />
        <Flex
          ml={{ md: 7 }}
          justifyContent="space-between"
          w={{ sm: "600px", md: "300px" }}
        >
          {routes.map((route) => {
            const activeLinkStyles =
              activePath === route.path
                ? {
                    color: colorPrimary,
                    borderBottom: { md: `3px solid ${colorPrimary}` },
                  }
                : {};
            return (
              <NavLink
                key={route.path}
                to={route.path}
                exact={Boolean(route.isExact)}
                isActive={(match, location) => {
                  if (match) setActivePath(location.pathname);
                }}
              >
                <Flex
                  pos="relative"
                  top="20px"
                  pb="35px"
                  m={2}
                  flexDirection="column"
                  {...activeLinkStyles}
                  _hover={{ color: colorPrimaryDark }}
                >
                  <Icon display={{ md: "none" }} as={route.icon} />
                  {route.text}
                </Flex>
              </NavLink>
            );
          })}
        </Flex>
      </Flex>
      <SearchBar display={{ sm: "none", md: "block" }} />
    </Flex>
  );
};

export default Navigation;
