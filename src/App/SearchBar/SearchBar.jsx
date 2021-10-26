import Box from "components/Box/Box";
import MobileSearchBar from "./MobileSearchBar";
import TabletDesktopSearchBar from "./TabletDesktopSearchBar";

const SearchBar = (props) => (
  <>
    <Box display={{ base: "block", sm: "none" }}>
      <MobileSearchBar {...props} />
    </Box>
    <Box display={{ base: "none", sm: "block" }}>
      <TabletDesktopSearchBar {...props} />
    </Box>
  </>
);

export default SearchBar;
