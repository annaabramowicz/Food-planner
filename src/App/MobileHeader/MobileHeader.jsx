import Heading from "components/Heading/Heading";
const MobileHeader = (props) => (
  <Heading display={{ sm: "none" }} textAlign="left" {...props} />
);

export default MobileHeader;
 