import Box from "components/Box/Box";
import MobileNavigation from "./MobileNavigation";
import TabletDesktopNavigation from "./TabletDesktopNavigation";
import { navigationProps } from "./navigationProps";

const Navigation = (props) => (
  <>
    <Box padding={{ base: "5px 10px" }} display={{ sm: "none" }}>
      <MobileNavigation {...props} />
    </Box>
    <Box
      bgColor="#fff"
      padding={{ sm: "0px 20px", md: "0px 30px" }}
      display={{ base: "none", sm: "block" }}
    >
      <TabletDesktopNavigation {...props} />
    </Box>
  </>
);

Navigation.propTypes = navigationProps;

export default Navigation;
