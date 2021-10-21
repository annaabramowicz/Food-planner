import Flex from "components/Flex/Flex";
import { NavLink } from "react-router-dom";
import SearchBar from "App/SearchBar/SearchBar";
import Logo from "components/Logo/Logo";
import Box from "components/Box/Box";

import { useState } from "react";
import {
  colorPrimary,
  colorPrimaryDark,
  colorFourth,
} from "../style/theme/theme";

const TabletDesktopNavigation = ({ routes }) => {
  const [activePath, setActivePath] = useState("/");
  return (
    <>
      <Flex justifyContent="space-between" w="100%" h="100px" m="0 auto">
        <Flex>
          <Box display={{base: "none", sm: "block" }}>
            <Logo />
          </Box>
          <Flex ml={7} justifyContent="space-between" w="300px">
            {routes.map((route) => {
              const activeLinkStyles =
                activePath === route.path
                  ? {
                      color: colorPrimary,
                      borderBottom: `3px solid ${colorPrimary}`,
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
                    {route.text}
                  </Flex>
                </NavLink>
              );
            })}
          </Flex>
        </Flex>
        <SearchBar display="block" />
      </Flex>
      <Box
        borderBottom={`3px solid ${colorFourth}`}
        w="110vw"
        marginLeft="-30px"
      ></Box>
    </>
  );
};

export default TabletDesktopNavigation;
