import Loader from "react-loader-spinner";
import Flex from "components/Flex/Flex";
import {colorFourth} from "App/style/theme/theme";

const LoadingSpinner = () => (
  <Flex height="80vh">
    <Loader
      type="TailSpin"
      color={colorFourth}
      height={100}
      width={100}
    />
  </Flex>
);

export default LoadingSpinner;
