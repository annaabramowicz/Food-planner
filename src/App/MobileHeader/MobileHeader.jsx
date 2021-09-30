import Heading from "components/Heading/Heading";
import styles from "./MobileHeader.module.scss";

const MobileHeader = (props) => (
  <Heading className={styles.header_mobile} {...props} />
);

export default MobileHeader;
