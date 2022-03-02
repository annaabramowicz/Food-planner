import React, { useEffect } from "react";
import Navigation from "./Navigation/Navigation";
import Box from "components/Box/Box";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import MobileHeader from "App/MobileHeader/MobileHeader";
import { colorFourth, colorFifth } from "./style/theme/theme";
import SearchBar from "./SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import { getInitialRecipesAsync } from "store/recipes/recipes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitialRecipesAsync());
  }, [dispatch]);
  return (
    <Box bgColor={colorFifth} h="100vh" overflowX="hidden">
      <Router>
        <Navigation routes={routes} />
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={Boolean(route.isExact)}
            >
              <MobileHeader margin="0 10px">{route.text}</MobileHeader>
              <Box
                display={{ base: "block", sm: "none" }}
                margin="10px 10px 10px 10px"
              >
                <SearchBar
                  inputGroupProps={{
                    bgColor: { colorFourth },
                    variant: "filled",
                  }}
                />
              </Box>
              <Box
                padding={{
                  base: "0px 5px 10px",
                  sm: "0px 10px 10px",
                  md: "0px 20px",
                }}
                mb={{ base: "95px", sm: "0" }}
              >
                {route.component}
              </Box>
            </Route>
          ))}
        </Switch>
      </Router>
    </Box>
  );
}

export default App;
