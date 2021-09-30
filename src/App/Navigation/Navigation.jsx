import Flex from "components/Flex/Flex";
import styles from "./Navigation.module.scss";

const Navigation = (props) => (
  <Flex
    justifyContent="space-between"
    className={styles.navigation_mobile}
    {...props}
  />
);

export default Navigation;
