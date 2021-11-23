import React from "react";
import Navigation from "./Navigation/Navigation";
import Box from "components/Box/Box";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import MobileHeader from "App/MobileHeader/MobileHeader";
import { colorFourth } from "./style/theme/theme";
import SearchBar from "./SearchBar/SearchBar";

function App() {
  return (
    <Box padding={{ base: "5px 10px", lg: "5px 30px" }} overflowX="hidden">
      <Router>
        <Navigation routes={routes} />
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={Boolean(route.isExact)}
            >
              <MobileHeader>{route.text}</MobileHeader>
              <Box
                display={{ base: "block", sm: "none" }}
                margin="10px 0 15px 0"
              >
                <SearchBar
                  inputGroupProps={{
                    bgColor: { colorFourth },
                    variant: "filled",
                  }}
                  placeholder="Search by recipes or ingredients"
                />
              </Box>
              <Box mb={{ base: "100px", sm: "0" }}>{route.component}</Box>
            </Route>
          ))}
        </Switch>
      </Router>
    </Box>
  );
}

export default App;
