import Box from "components/Box/Box";
import MobileNavigation from "./MobileNavigation";
import TabletDesktopNavigation from "./TabletDesktopNavigation";

const Navigation = (props) => (
  <>
    <Box display={{ sm: "none" }}>
      <MobileNavigation {...props} />
    </Box>
    <Box display={{ base: "none", sm: "block" }}>
      <TabletDesktopNavigation {...props} />
    </Box>
  </>
);

export default Navigation;
