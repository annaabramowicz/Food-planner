import Ingredients from "../pages/Ingredients/Ingredients";
import Fridge from "../pages/Fridge/Fridge";
import Recipes from "../pages/Recipes/Recipes";
import Home from "../pages/Home/Home";
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
    components: <Home />,
    isExact: true,
  },
  {
    path: "/ingredients",
    icon: IoCartOutline,
    text: "Ingredients",
    components: <Ingredients />,
  },
  {
    path: "/fridge",
    icon: IoJournalOutline,
    text: "Fridge",
    components: <Fridge />,
  },
  {
    path: "/recipes",
    icon: IoLibraryOutline,
    text: "Recipes",
    components: <Recipes />,
  },
];

export default routes;
