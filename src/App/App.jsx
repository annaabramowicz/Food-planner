import "reset.css";
import React from "react";
import Button from "components/Buttons/Button/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRecipesAsyc, getAllRecipes } from "store/recipes/recipes";
import config from "config/env";

console.log(config);

function App() {
  const dispatch = useDispatch();
  dispatch(getRecipesAsyc());
  const recipes = useSelector(getAllRecipes);
  console.log(recipes);

  // const handleClick = () => {
  // };

  function Home() {
    return <h2>Home Kota</h2>;
  }

  function About() {
    return <h2>About</h2>;
  }

  function Users() {
    return <h2>Users</h2>;
  }
  return (
    <>
      {/* <Button onClick={handleClick}>Thunk example</Button> */}
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
