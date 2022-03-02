import Heading from "components/Heading/Heading";
import PropTypes from "prop-types";

const MobileHeader = (props) => (
  <Heading display={{ sm: "none" }} textAlign="left" {...props} />
);

MobileHeader.propTypes = {
  children: PropTypes.string,
};

export default MobileHeader;
