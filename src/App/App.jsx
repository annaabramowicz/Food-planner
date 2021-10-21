import React, { useEffect } from "react";
import Navigation from "./Navigation/Navigation";
import Box from "components/Box/Box";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getRecipesAsyc } from "store/recipes/recipes";
import routes from "./routes";
import MobileHeader from "App/MobileHeader/MobileHeader";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipesAsyc());
  }, [dispatch]);

  return (
    <Box padding="5px 20px" overflowX="hidden">
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
              {route.component}
            </Route>
          ))}
        </Switch>
      </Router>
    </Box>
  );
}

export default App;
