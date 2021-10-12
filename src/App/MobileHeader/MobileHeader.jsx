import Heading from "components/Heading/Heading";
import { fontFamilyPrimary } from "App/style/theme/theme";
const MobileHeader = (props) => (
  <Heading fontFamily={fontFamilyPrimary} textAlign="left" {...props} />
);

export default MobileHeader;
