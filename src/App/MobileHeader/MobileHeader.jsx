import Heading from "components/Heading/Heading";
const MobileHeader = (props) => (
  <Heading
    display={{ md: "none" }}
    textAlign="left"
    {...props}
  />
);

export default MobileHeader;
