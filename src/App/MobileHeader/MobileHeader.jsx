import Heading from "components/Heading/Heading";
import styles from "./MobileHeader.module.scss";
import "@fontsource/orelega-one";

const MobileHeader = (props) => (
  <Heading
    fontFamily="Orelega One"
    className={styles.header_mobile}
    {...props}
  />
);

export default MobileHeader;
