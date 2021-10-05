import "reset.css";
import React, { useEffect } from "react";
import Ingredients from "./Ingredients/Ingredients";
import Fridge from "./Fridge/Fridge";
import Recipes from "./Recipes/Recipes";
import Home from "./Home/Home";
import Navigation from "./Navigation/Navigation";
import Button from "components/Buttons/Button/Button";
import Flex from "components/Flex/Flex";
import { Box } from "@chakra-ui/react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
              <Button m={2}>
                <Link to="/">Home</Link>
              </Button>
              <Button m={2}>
                <Link to="/ingredients">Ingredients</Link>
              </Button>
              <Button m={2}>
                <Link to="/fridge">Fridge</Link>
              </Button>
              <Button m={2}>
                <Link to="/recipes">Recipes</Link>
              </Button>
            </Navigation>
          </Flex>
          <div>
            <Switch>
              <Route path="/">
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
