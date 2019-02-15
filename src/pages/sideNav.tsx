import * as React from "react";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import sideNavRouter from "../routers/sideNavRouter";

class SideNav extends React.Component {
  public render() {
    return (
      <MenuList>
        {sideNavRouter.map((route, index) => (
          <Link key={index} to={route.path} className="Nav-link">
            <MenuItem>{route.name}</MenuItem>
          </Link>
        ))}
      </MenuList>
    );
  }
}

export default SideNav;
