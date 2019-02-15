import Page1 from "../pages/page1";
import Page2 from "../pages/page2";

const multiLevelRouter = [
  {
    name: "Multi-level",
    path: "/multiLevel",
    component: Page1,
    exact: true
  },
  {
    name: "Page1",
    path: "/multiLevel/page1",
    component: Page1
  },
  {
    name: "Page2",
    path: "/multiLevel/page2",
    component: Page2
  }
];

export default multiLevelRouter;
