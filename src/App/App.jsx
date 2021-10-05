import "reset.css";
import React, { useEffect } from "react";
import Ingredients from "../pages/Ingredients/Ingredients";
import Fridge from "../pages/Fridge/Fridge";
import Recipes from "../pages/Recipes/Recipes";
import Home from "../pages/Home/Home";
import Navigation from "./Navigation/Navigation";
import Button from "components/Buttons/Button/Button";
import Flex from "components/Flex/Flex";
import { Box } from "@chakra-ui/react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { getRecipesAsyc } from "store/recipes/recipes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipesAsyc());
  }, [dispatch]);

  return (
    <>
      <Box width="600px" margin="0 auto">
        <Router>
          <Flex>
            <Navigation>
              <NavLink to="/">
                <Button>Home </Button>
              </NavLink>
              <NavLink to="/ingredients">
                <Button>Ingredients </Button>
              </NavLink>
              <NavLink to="/fridge">
                <Button>Fridge </Button>
              </NavLink>
              <NavLink to="/recipes">
                <Button>Recipes </Button>
              </NavLink>
            </Navigation>
          </Flex>
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/ingredients">
                <Ingredients />
              </Route>
              <Route path="/fridge">
                <Fridge />
              </Route>
              <Route path="/recipes">
                <Recipes />
              </Route>
            </Switch>
          </div>
        </Router>
      </Box>
    </>
  );
}

export default App;
