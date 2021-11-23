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
import PropTypes from "prop-types";
import { useBreakpointValue } from "@chakra-ui/react";

const TabletDesktopNavigation = ({ routes }) => {
  const [activePath, setActivePath] = useState(routes[0].path);
  const placeholder = useBreakpointValue({
    sm: "Search",
    md: "Search by recipes or ingredients",
  });
  return (
    <>
      <Flex justifyContent="space-between" w="100%" h="100px" m="0 auto">
        <Flex>
          <Box display={{ base: "none", sm: "block" }}>
            <Logo />
          </Box>
          <Flex
            m={{ sm: "0 4px", lg: "0 18px" }}
            justifyContent="space-between"
            w={{ sm: "280px", lg: "320px" }}
          >
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
                    pb="38px"
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
        <Box w={{ sm: "200px", md: "250px" }}>
          <SearchBar placeholder={placeholder} borderColor={colorFourth} />
        </Box>
      </Flex>
      <Box
        borderBottom={`3px solid ${colorFourth}`}
        w="110vw"
        marginLeft="-30px"
        marginBottom="10px"
      />
    </>
  );
};

TabletDesktopNavigation.propTypes = {
  routes: PropTypes.array,
};

export default TabletDesktopNavigation;
