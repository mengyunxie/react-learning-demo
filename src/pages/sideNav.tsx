import * as React from "react";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import routes from "../routers/router";

class SideNav extends React.Component {
  public render() {
    return (
      <MenuList>
        {routes.map(route => (
          <Link to={route.path} className="Nav-link">
            <MenuItem>{route.name}</MenuItem>
          </Link>
        ))}
      </MenuList>
    );
  }
}

export default SideNav;
