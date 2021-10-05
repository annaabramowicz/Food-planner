import { extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Open Sans",
      },
    },
    a: {
      color: "teal.500",
      _hover: {
        textDecoration: "none",
        color: "white",
      },
    },
  },
});

export default theme;
