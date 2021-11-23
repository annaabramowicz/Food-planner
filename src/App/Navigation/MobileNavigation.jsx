import Flex from "components/Flex/Flex";
import { NavLink } from "react-router-dom";
import Icon from "components/Icon/Icon";
import { useState } from "react";
import { colorPrimary } from "../style/theme/theme";
import PropTypes from "prop-types";
import { colorFourth } from "App/style/theme/theme";

const MobileNavigation = ({ routes }) => {
  const [activePath, setActivePath] = useState(routes[0].path);
  return (
    <Flex
      bg="white"
      borderTop="1px"
      borderColor={colorFourth}
      justifyContent="space-around"
      w="100%"
      h="100px"
      pos="fixed"
      bottom={0}
      left={0}
      right={0}
      zIndex={1}
      >
      {routes.map((route) => {
        const activeLinkStyles =
          activePath === route.path
            ? {
                color: colorPrimary,
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
            >
              <Icon as={route.icon} />
              {route.text}
            </Flex>
          </NavLink>
        );
      })}
    </Flex>
  );
};

MobileNavigation.propTypes = {
  routes: PropTypes.array,
};

export default MobileNavigation;
