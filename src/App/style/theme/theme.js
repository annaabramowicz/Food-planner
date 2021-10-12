import { extendTheme } from "@chakra-ui/react";
import "@fontsource/yeseva-one";

export const colorPrimary = "#06A561";
export const colorSecondary = "#131523";
export const colorThird = "#7E84A3";
export const colorFourth = "#E6E9F4";

export const fontFamilyPrimary = "Yeseva One, Times, serif";
export const fontFamilySecondary = "Rota, Arial, sans-serif";



const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: fontFamilySecondary,
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
