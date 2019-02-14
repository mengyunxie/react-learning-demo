import MultiLevel from "../pages/multiLevel";
import Home from "../pages/home";
import MyTable from "../pages/table";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
    exact: true
  },
  {
    name: "Multi-level",
    path: "/multiLevel",
    component: MultiLevel
  },
  {
    name: "Table",
    path: "/table",
    component: MyTable
  }
];

export default routes;
