import Flex from "components/Flex/Flex";
import { NavLink } from "react-router-dom";
import Icon from "components/Icon/Icon";

import { useState } from "react";
import { colorPrimary } from "../style/theme/theme";

const MobileNavigation = ({ routes }) => {
  const [activePath, setActivePath] = useState("/");
  return (
    <Flex
      justifyContent="space-around"
      w="100%"
      h="100px"
      pos="fixed"
      bottom={0}
      left={0}
      right={0}
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

export default MobileNavigation;
