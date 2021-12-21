import Ingredients from "./pages/Ingredients/Ingredients";
import Fridge from "./pages/Fridge/Fridge";
import Recipes from "./pages/Recipes/Recipes";
import Home from "./pages/Home/Home";
import {
  IoHomeOutline,
  IoCartOutline,
  IoLibraryOutline,
  IoJournalOutline,
} from "react-icons/io5";

const routes = [
  {
    path: "/",
    icon: IoHomeOutline,
    text: "Home",
    component: <Home />,
    isExact: true,
  },
  {
    path: "/ingredients",
    icon: IoCartOutline,
    text: "Ingredients",
    component: <Ingredients />,
  },
  {
    path: "/fridge",
    icon: IoJournalOutline,
    text: "Fridge",
    component: <Fridge />,
  },
  {
    path: "/recipes",
    icon: IoLibraryOutline,
    text: "Recipes",
    component: <Recipes />,
  },
];

export default routes;
